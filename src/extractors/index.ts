import extractTransComponent from './transComponent';
import extractCustomTransComponent from './customTransComponent';
import extractWithTranslationHOC from './withTranslationHOC';
import extractUseTranslationHook from './useTranslationHook';
import extractGetFixedTFunction from './getFixedTFunction';
import extractTranslationRenderProp from './translationRenderProp';
import extractI18nextInstance from './i18nextInstance';
import extractTFunction from './tFunction';
import extractUserKey from './userkey';
import { ExtractionError } from './commons';

export { ExtractionError };

/**
 * All extractors sorted by priority.
 */
export const EXTRACTORS_PRIORITIES = [
  extractCustomTransComponent.name,
  extractTransComponent.name,
  extractUseTranslationHook.name,
  extractGetFixedTFunction.name,
  extractTranslationRenderProp.name,
  extractWithTranslationHOC.name,
  extractI18nextInstance.name,
  extractTFunction.name,
  extractUserKey.name
];

export default {
  extractCustomTransComponent,
  extractTransComponent,
  extractUseTranslationHook,
  extractGetFixedTFunction,
  extractTranslationRenderProp,
  extractWithTranslationHOC,
  extractI18nextInstance,
  extractTFunction,
  extractUserKey
};
