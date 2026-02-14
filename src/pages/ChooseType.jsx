// Страница 1: Выбор типа расчёта
// PROPS:
//   t — объект с переводами
//   onChoose — функция, которую вызываем при выборе

function ChooseType(props) {
  const { t } = props

  return (
    <div className="page">
      <h2>{t.whatToCalculate}</h2>

      <div className="choice-buttons">
        <button
          className="choice-btn credit-btn"
          onClick={() => props.onChoose('credit')}
        >
          <span className="choice-icon">💳</span>
          <span className="choice-label">{t.credit}</span>
          <span className="choice-hint">{t.creditDesc}</span>
        </button>

        <button
          className="choice-btn deposit-btn"
          onClick={() => props.onChoose('deposit')}
        >
          <span className="choice-icon">💰</span>
          <span className="choice-label">{t.deposit}</span>
          <span className="choice-hint">{t.depositDesc}</span>
        </button>
      </div>
    </div>
  )
}

export default ChooseType
