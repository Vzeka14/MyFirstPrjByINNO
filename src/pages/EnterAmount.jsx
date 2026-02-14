// Страница 4: Ввод суммы
// PROPS:
//   t         — объект с переводами
//   calcType  — тип расчёта
//   amount    — текущая сумма
//   setAmount — функция для изменения суммы
//   onNext    — перейти дальше
//   onBack    — вернуться назад

function EnterAmount(props) {
  const { t } = props
  const isCredit = props.calcType === 'credit'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.amount && Number(props.amount) > 0) {
      props.onNext()
    }
  }

  return (
    <div className="page">
      <h2>{t.enterAmount}</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">
            {isCredit ? t.loanAmount : t.depositAmount}
          </label>
          <input
            type="number"
            min="1"
            placeholder={t.amountExample}
            value={props.amount}
            onChange={(e) => props.setAmount(e.target.value)}
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
            disabled={!props.amount || Number(props.amount) <= 0}
          >
            {t.next}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EnterAmount
