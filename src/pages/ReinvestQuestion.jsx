// Страница вопроса о реинвестировании (для депозитов)
// PROPS:
//   t — объект с переводами
//   reinvest — текущее значение (true/false/null)
//   setReinvest — функция для изменения
//   reinvestDays — частота реинвестирования в днях
//   setReinvestDays — функция для изменения частоты
//   onNext — перейти дальше
//   onBack — вернуться назад

function ReinvestQuestion(props) {
  const { t } = props

  const handleChoice = (value) => {
    props.setReinvest(value)
    if (!value) {
      // Если нет реинвестирования, сразу идём дальше
      props.onNext()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.reinvestDays && Number(props.reinvestDays) > 0) {
      props.onNext()
    }
  }

  return (
    <div className="page">
      <h2>{t.reinvestQuestion}</h2>

      {props.reinvest === null && (
        <div className="choice-buttons">
          <button
            className="choice-btn deposit-btn"
            onClick={() => handleChoice(true)}
          >
            <span className="choice-icon">📈</span>
            <span className="choice-label">{t.reinvestYes}</span>
          </button>

          <button
            className="choice-btn"
            onClick={() => handleChoice(false)}
          >
            <span className="choice-icon">📊</span>
            <span className="choice-label">{t.reinvestNo}</span>
          </button>
        </div>
      )}

      {props.reinvest === true && (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">{t.reinvestFrequency}</label>
            <input
              type="number"
              min="1"
              max="365"
              placeholder={t.reinvestFrequencyExample}
              value={props.reinvestDays}
              onChange={(e) => props.setReinvestDays(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="nav-buttons">
            <button
              type="button"
              className="btn btn-back"
              onClick={() => {
                props.setReinvest(null)
                props.setReinvestDays('')
              }}
            >
              {t.back}
            </button>
            <button
              type="submit"
              className="btn btn-next"
              disabled={!props.reinvestDays || Number(props.reinvestDays) <= 0}
            >
              {t.next}
            </button>
          </div>
        </form>
      )}

      {props.reinvest === null && (
        <div className="nav-buttons" style={{ marginTop: '1.5rem' }}>
          <button type="button" className="btn btn-back" onClick={props.onBack}>
            {t.back}
          </button>
        </div>
      )}
    </div>
  )
}

export default ReinvestQuestion
