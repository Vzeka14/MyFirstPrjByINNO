// Страница 2: Ввод процентной ставки
// PROPS:
//   t        — объект с переводами
//   calcType — тип расчёта ('credit' или 'deposit')
//   rate     — текущее значение ставки
//   setRate  — функция для изменения ставки
//   onNext   — перейти на следующую страницу
//   onBack   — вернуться назад

function EnterRate(props) {
  const { t } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.rate && Number(props.rate) > 0) {
      props.onNext()
    }
  }

  return (
    <div className="page">
      <h2>{t.enterRate}</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">{t.annualRate}</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            max="100"
            placeholder={t.rateExample}
            value={props.rate}
            onChange={(e) => props.setRate(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="nav-buttons">
          <button type="button" className="btn btn-back" onClick={props.onBack}>
            {t.back}
          </button>
          <button
            type="submit"
            className="btn btn-next"
            disabled={!props.rate || Number(props.rate) <= 0}
          >
            {t.next}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EnterRate
