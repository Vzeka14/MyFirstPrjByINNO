// Страница 4: Ввод суммы
// PROPS:
//   calcType  — тип расчёта
//   amount    — текущая сумма
//   setAmount — функция для изменения суммы
//   onNext    — перейти дальше
//   onBack    — вернуться назад

function EnterAmount(props) {
  const isCredit = props.calcType === 'credit'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.amount && Number(props.amount) > 0) {
      props.onNext()
    }
  }

  return (
    <div className="page">
      <h2>
        {isCredit ? 'Сумма кредита' : 'Сумма вклада'}
      </h2>
      <p className="page-description">
        {isCredit
          ? 'Какую сумму вы хотите взять в кредит?'
          : 'Какую сумму вы хотите положить на депозит?'}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="number"
            min="1"
            placeholder="Например, 500000"
            value={props.amount}
            onChange={(e) => props.setAmount(e.target.value)}
            className="input-field"
          />
          <span className="input-suffix">SEK</span>
        </div>

        <div className="nav-buttons">
          <button type="button" className="btn btn-back" onClick={props.onBack}>
            Назад
          </button>
          <button
            type="submit"
            className="btn btn-next"
            disabled={!props.amount || Number(props.amount) <= 0}
          >
            Рассчитать
          </button>
        </div>
      </form>
    </div>
  )
}

export default EnterAmount
