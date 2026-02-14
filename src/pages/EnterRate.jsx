// Страница 2: Ввод процентной ставки
// PROPS:
//   calcType — тип расчёта ('credit' или 'deposit')
//   rate     — текущее значение ставки
//   setRate  — функция для изменения ставки
//   onNext   — перейти на следующую страницу
//   onBack   — вернуться назад

function EnterRate(props) {
  const isCredit = props.calcType === 'credit'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.rate && Number(props.rate) > 0) {
      props.onNext()
    }
  }

  return (
    <div className="page">
      <h2>
        {isCredit
          ? 'Процентная ставка по кредиту'
          : 'Процентная ставка по вкладу'}
      </h2>
      <p className="page-description">
        {isCredit
          ? 'Укажите годовую процентную ставку (APR)'
          : 'Укажите годовую процентную ставку без капитализации'}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="number"
            step="0.01"
            min="0.01"
            max="100"
            placeholder="Например, 12.5"
            value={props.rate}
            onChange={(e) => props.setRate(e.target.value)}
            className="input-field"
          />
          <span className="input-suffix">% годовых</span>
        </div>

        <div className="nav-buttons">
          <button type="button" className="btn btn-back" onClick={props.onBack}>
            Назад
          </button>
          <button
            type="submit"
            className="btn btn-next"
            disabled={!props.rate || Number(props.rate) <= 0}
          >
            Далее
          </button>
        </div>
      </form>
    </div>
  )
}

export default EnterRate
