// Компонент выбора языка с флажками
// PROPS:
//   currentLang — текущий язык ('en', 'es', 'ru')
//   onChangeLang — функция для смены языка

function LanguageSwitcher(props) {
  const languages = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  ]

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${props.currentLang === lang.code ? 'active' : ''}`}
          onClick={() => props.onChangeLang(lang.code)}
          title={lang.name}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
