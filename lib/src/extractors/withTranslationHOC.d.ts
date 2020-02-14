import * as BabelTypes from '@babel/types';
import * as BabelCore from '@babel/core';
import { ExtractedKey } from '../keys';
import { Config } from '../config';
import { CommentHint } from '../comments';
/**
 * Parse function or class declaration (likely components) to find whether
 * they are wrapped with "withTranslation()" HOC, and if so, extract all the
 * translations that come from the "t" function injected in the component
 * properties.
 *
 * @param path node path to the component
 * @param config plugin configuration
 * @param commentHints parsed comment hints
 */
export default function extractWithTranslationHOC(path: BabelCore.NodePath<BabelTypes.Function | BabelTypes.ClassDeclaration>, config: Config, commentHints?: CommentHint[]): ExtractedKey[];
