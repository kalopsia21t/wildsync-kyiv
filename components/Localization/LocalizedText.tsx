"use client";

import { useLocalization, type TranslationKey } from "./Localization";

export default function LocalizedText({ translationKey }: { translationKey: TranslationKey }) {
  const { t } = useLocalization();
  return <>{t(translationKey)}</>;
}
