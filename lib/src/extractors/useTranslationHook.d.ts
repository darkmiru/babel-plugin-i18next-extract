import * as BabelTypes from '@babel/types';
import * as BabelCore from '@babel/core';
import { ExtractedKey } from '../keys';
import { Config } from '../config';
import { CommentHint } from '../comments';
/**
 * Parse `useTranslation()` hook to extract all its translation keys and
 * options.
 * @param path: useTranslation call node path.
 * @param config: plugin configuration
 * @param commentHints: parsed comment hints
 */
export default function extractUseTranslationHook(path: BabelCore.NodePath<BabelTypes.CallExpression>, config: Config, commentHints?: CommentHint[]): ExtractedKey[];
