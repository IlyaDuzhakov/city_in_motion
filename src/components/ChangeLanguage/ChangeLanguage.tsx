import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    if (i18n.language === 'ru') {
      i18n.changeLanguage("en");
    }
    else {
        i18n.changeLanguage("ru");
    }
  };
  return (
    <button
      onClick={() => {
        changeLanguage();
      }}
    >
      {t("Русский")}
    </button>
  );
};

export default ChangeLanguage;
