// Страница 3: Ввод срока
// PROPS:
//   t        — объект с переводами
//   calcType — тип расчёта
//   term     — текущее значение срока (в месяцах)
//   setTerm  — функция для изменения срока
//   onNext   — перейти дальше
//   onBack   — вернуться назад

function EnterTerm(props) {
  const { t } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.term && Number(props.term) > 0) {
      props.onNext()
    }
  }

  return (
    <div className="page">
      <h2>{t.enterTerm}</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">{t.termMonths}</label>
          <input
            type="number"
            min="1"
            max="600"
            placeholder={t.termExample}
            value={props.term}
            onChange={(e) => props.setTerm(e.target.value)}
            className="input-field"
          />
        </div>

        <p className="input-hint">
          {props.term && Number(props.term) > 0
            ? `= ${(Number(props.term) / 12).toFixed(1)} ${t.years}`
            : ''}
        </p>

        <div className="nav-buttons">
          <button type="button" className="btn btn-back" onClick={props.onBack}>
            {t.back}
          </button>
          <button
            type="submit"
            className="btn btn-next"
            disabled={!props.term || Number(props.term) <= 0}
          >
            {t.next}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EnterTerm
