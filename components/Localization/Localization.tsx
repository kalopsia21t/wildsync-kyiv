"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "uk";

type TranslationKey =
  | "home"
  | "events"
  | "media"
  | "mixes"
  | "about"
  | "aboutTitle"
  | "eventsIntro"
  | "mediaTitle"
  | "photoReport"
  | "mediaIntro"
  | "mixLatest"
  | "mixArchive"
  | "mixSet"
  | "viewPhotos"
  | "backToEvents"
  | "location"
  | "lineup"
  | "openPhoto"
  | "closePhoto"
  | "posterAuthor";

type TranslationMap = Record<TranslationKey, string>;

const translations: Record<Language, TranslationMap> = {
  en: {
    home: "Home",
    events: "Events",
    media: "Media",
    mixes: "Mixes",
    about: "About Us",
    aboutTitle: "About Us",
    eventsIntro: "Check out our upcoming and past events!",
    mediaTitle: "Media",
    photoReport: "Photo Report",
    mediaIntro: "Check out our archive for photos!",
    mixLatest: "Latest release",
    mixArchive: "Archive",
    mixSet: "Mix / Set",
    viewPhotos: "View photos",
    backToEvents: "Back to events",
    location: "Location",
    lineup: "Lineup",
    openPhoto: "Open photo",
    closePhoto: "Close photo",
    posterAuthor: "Poster",
  },
  uk: {
    home: "Головна",
    events: "Події",
    media: "Медіа",
    mixes: "Мікси",
    about: "Про нас",
    aboutTitle: "Про нас",
    eventsIntro: "Перегляньте майбутні та минулі події!",
    mediaTitle: "Медіа",
    photoReport: "Фото Звіт",
    mediaIntro: "Перегляньте наш фотоархів!",
    mixLatest: "Останній реліз",
    mixArchive: "Архів",
    mixSet: "Мікс / Сет",
    viewPhotos: "Переглянути фото",
    backToEvents: "Назад до подій",
    location: "Місце",
    lineup: "Лайнап",
    openPhoto: "Відкрити фото",
    closePhoto: "Закрити фото",
    posterAuthor: "Постер",
  },
};

type LocalizationContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LocalizationContext = createContext<LocalizationContextValue | null>(null);

export function LocalizationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("wildsync-language");
    if (savedLanguage === "en" || savedLanguage === "uk") {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("wildsync-language", nextLanguage);
    document.documentElement.lang = nextLanguage === "uk" ? "uk" : "en";
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t: (key) => translations[language][key] }}>
      {children}
    </LocalizationContext.Provider>
  );
}

export function useLocalization() {
  const context = useContext(LocalizationContext);
  if (!context) throw new Error("useLocalization must be used within LocalizationProvider");
  return context;
}

export type { Language, TranslationKey };
