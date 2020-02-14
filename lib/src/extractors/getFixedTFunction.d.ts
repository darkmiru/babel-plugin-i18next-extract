import * as BabelTypes from '@babel/types';
import * as BabelCore from '@babel/core';
import { ExtractedKey } from '../keys';
import { Config } from '../config';
import { CommentHint } from '../comments';
/**
 * Parse `getFixedT()` getter to extract all its translation keys and
 * options (see https://www.i18next.com/overview/api#getfixedt)
 * @param path: useTranslation call node path.
 * @param config: plugin configuration
 * @param commentHints: parsed comment hints
 */
export default function extractGetFixedTFunction(path: BabelCore.NodePath<BabelTypes.CallExpression>, config: Config, commentHints?: CommentHint[]): ExtractedKey[];
