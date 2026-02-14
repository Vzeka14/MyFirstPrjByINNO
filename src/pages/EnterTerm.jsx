// Страница 3: Ввод срока
// PROPS:
//   calcType — тип расчёта
//   term     — текущее значение срока (в месяцах)
//   setTerm  — функция для изменения срока
//   onNext   — перейти дальше
//   onBack   — вернуться назад

function EnterTerm(props) {
  const isCredit = props.calcType === 'credit'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.term && Number(props.term) > 0) {
      props.onNext()
    }
  }

  return (
    <div className="page">
      <h2>
        {isCredit ? 'Срок кредита' : 'Срок вклада'}
      </h2>
      <p className="page-description">Укажите срок в месяцах</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="number"
            min="1"
            max="600"
            placeholder="Например, 12"
            value={props.term}
            onChange={(e) => props.setTerm(e.target.value)}
            className="input-field"
          />
          <span className="input-suffix">месяцев</span>
        </div>

        <p className="input-hint">
          {props.term && Number(props.term) > 0
            ? `Это ${(Number(props.term) / 12).toFixed(1)} лет`
            : ''}
        </p>

        <div className="nav-buttons">
          <button type="button" className="btn btn-back" onClick={props.onBack}>
            Назад
          </button>
          <button
            type="submit"
            className="btn btn-next"
            disabled={!props.term || Number(props.term) <= 0}
          >
            Далее
          </button>
        </div>
      </form>
    </div>
  )
}

export default EnterTerm
