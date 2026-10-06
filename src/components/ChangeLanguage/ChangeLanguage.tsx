import React from 'react'
import { useTranslation } from 'react-i18next'

const ChangeLanguage = () => {
    
    const {t, i18n} = useTranslation()
    const changeLanguage = () => {
        i18n.changeLanguage("en")
    }
  return (
    <button onClick={()=> {
        changeLanguage()
    }}>{t("Русский")}</button>
  )
}

export default ChangeLanguage