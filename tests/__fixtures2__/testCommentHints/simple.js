i18next.t('ok0')
// i18next-extract-disable-next-line
i18next.t('ko');
// i18next-extract-disable-next-line
i18next.t('ko');
i18next.t('ok1')
i18next.t('ko'); // i18next-extract-disable-line
i18next.t('ko'); // i18next-extract-disable-line
i18next.t('ko'); // i18next-extract-disable-line
i18next.t('ok2'); i18next.t('ok2-1')

// i18next-extract-disable
i18next.t('ko')
i18next.t('not ok')
i18next.t('do not extract this')
// i18next-extract-enable
i18next.t('ok3')

// i18next-extract-user-key-start ["titleKey"]
// i18next.t('ok4')
let test ={
	titleKey: 'ok5'
};
// i18next-extract-user-key-stop

// i18next-extract-mark-context-next-line ["fruit", "animal"]
t('custom-context0');
