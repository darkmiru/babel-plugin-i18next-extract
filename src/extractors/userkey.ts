import * as BabelTypes from '@babel/types';
import * as BabelCore from '@babel/core';
import {
  ExtractionError,
  getFirstOrNull,
  evaluateIfConfident,
  findKeyInObjectExpression,
  parseI18NextOptionsFromCommentHints,
} from './commons';
import {
  COMMENT_HINTS_KEYWORDS,
  getCommentHintForPath,
  CommentHint,
} from '../comments';
import { ExtractedKey } from '../keys';
import { Config } from '../config';


/**
 * Parse a call expression userkey.
 *
 * @param path: node path of the t function call.
 * @param config: plugin configuration
 * @param commentHints: parsed comment hints
 * @param skipCheck: set to true if you know that the call expression arguments
 *   already is a `t` function.
 */
export default function extractUserKey(
  path: BabelCore.NodePath<BabelTypes.ObjectProperty>,
  config: Config,
  commentHints: CommentHint[] = []
): ExtractedKey[] {
  if (!path.node.loc) return [];

  if (getCommentHintForPath(path, 'DISABLE', commentHints)) return [];
  let userkeyCommentHint = getCommentHintForPath(path, 'USERKEY', commentHints);
  if (userkeyCommentHint == null) return [];

  let opts = parseI18NextOptionsFromCommentHints(path, commentHints);

  if (opts && Array.isArray(opts.userkeys) && opts.userkeys.length > 0) {
    const key = path.node.key.name;

    if (opts.userkeys.indexOf(key) >= 0) {
      const valueNode = path.get('value');
      const value = evaluateIfConfident(valueNode);

      let ret = {
        key: value,
        parsedOptions: {
          contexts: false,
          hasCount: false,
          ns: null,
          defaultValue: null,
          userkeys: opts.userkeys
        },
        sourceNodes: [path.node],
        extractorName: extractUserKey.name,
      };

      return [ret];    
    }
  }

  return [];
}
