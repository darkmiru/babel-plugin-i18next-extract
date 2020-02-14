import * as BabelTypes from '@babel/types';
import * as BabelCore from '@babel/core';
import { CommentHint } from '../comments';
import { ExtractedKey } from '../keys';
import { Config } from '../config';
/**
 * Extract custom Trans components.
 *
 * @param path: node path of potential custom Trans JSX element.
 * @param config: plugin configuration
 * @param commentHints: parsed comment hints
 */
export default function extractCustomTransComponent(path: BabelCore.NodePath<BabelTypes.JSXElement>, config: Config, commentHints?: CommentHint[]): ExtractedKey[];
