import * as BabelTypes from '@babel/types';
import * as BabelCore from '@babel/core';
import { CommentHint } from '../comments';
import { ExtractedKey } from '../keys';
import { Config } from '../config';
/**
 * Parse a call expression (likely `i18next.t`) to find its translation keys
 * and i18next options.
 *
 * @param path: node path of the t function call.
 * @param config: plugin configuration
 * @param commentHints: parsed comment hints
 * @param skipCheck: set to true if you know that the call expression arguments
 *   already is a `t` function.
 */
export default function extractI18nextInstance(path: BabelCore.NodePath<BabelTypes.CallExpression>, config: Config, commentHints?: CommentHint[]): ExtractedKey[];
