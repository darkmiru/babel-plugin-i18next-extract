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
export declare const EXTRACTORS_PRIORITIES: string[];
declare const _default: {
    extractCustomTransComponent: typeof extractCustomTransComponent;
    extractTransComponent: typeof extractTransComponent;
    extractUseTranslationHook: typeof extractUseTranslationHook;
    extractGetFixedTFunction: typeof extractGetFixedTFunction;
    extractTranslationRenderProp: typeof extractTranslationRenderProp;
    extractWithTranslationHOC: typeof extractWithTranslationHOC;
    extractI18nextInstance: typeof extractI18nextInstance;
    extractTFunction: typeof extractTFunction;
    extractUserKey: typeof extractUserKey;
};
export default _default;
