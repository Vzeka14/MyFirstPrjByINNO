// Страница приветствия
// PROPS:
//   t — объект с переводами
//   onStart — функция для начала работы

function Welcome(props) {
  const { t } = props

  return (
    <div className="page welcome-page">
      <div className="welcome-icon">📊</div>
      <h2>{t.welcomeTitle}</h2>
      <p className="welcome-description">{t.welcomeDescription}</p>

      <ul className="welcome-features">
        <li>💳 {t.welcomeFeature1}</li>
        <li>💰 {t.welcomeFeature2}</li>
        <li>📈 {t.welcomeFeature3}</li>
      </ul>

      <button className="btn btn-next btn-start" onClick={props.onStart}>
        {t.getStarted}
      </button>
    </div>
  )
}

export default Welcome
