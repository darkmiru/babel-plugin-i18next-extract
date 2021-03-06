export interface Config {
    locales: string[];
    defaultNS: string;
    pluralSeparator: string;
    contextSeparator: string;
    keySeparator: string | null;
    nsSeparator: string | null;
    transKeepBasicHtmlNodesFor: string[];
    i18nextInstanceNames: string[];
    tFunctionNames: string[];
    defaultContexts: string[];
    outputPath: string;
    defaultValue: string | null;
    useI18nextDefaultValue: boolean | string[];
    useI18nextDefaultValueForDerivedKeys: boolean;
    keyAsDefaultValue: boolean | string[];
    keyAsDefaultValueForDerivedKeys: boolean;
    discardOldKeys: boolean;
    jsonSpace: string | number;
    enableExperimentalIcu: boolean;
    customTransComponents: readonly [string, string][];
    cache: {
        absoluteCustomTransComponents: readonly [string, string][];
    };
}
/**
 * Given Babel options, return an initialized Config object.
 *
 * @param opts plugin options given by Babel
 */
export declare function parseConfig(opts: Partial<Config>): Config;
