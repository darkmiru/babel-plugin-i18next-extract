import * as BabelTypes from '@babel/types';
import * as BabelCore from '@babel/core';
import { ExtractedKey } from '../keys';
import { Config } from '../config';
import { CommentHint } from '../comments';
/**
 * Parse `Translation` render prop to extract all its translation keys and
 * options.
 *
 * @param path: node path of Translation JSX element.
 * @param config: plugin configuration
 * @param commentHints: parsed comment hints
 */
export default function extractTranslationRenderProp(path: BabelCore.NodePath<BabelTypes.JSXElement>, config: Config, commentHints?: CommentHint[]): ExtractedKey[];
