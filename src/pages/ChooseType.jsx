// Страница 1: Выбор типа расчёта
// PROPS: onChoose — функция, которую мы вызываем при выборе

function ChooseType(props) {
  return (
    <div className="page">
      <h2>Что считаем?</h2>
      <p className="page-description">Выберите тип финансового расчёта</p>

      <div className="choice-buttons">
        <button
          className="choice-btn credit-btn"
          onClick={() => props.onChoose('credit')}
        >
          <span className="choice-icon">&#128179;</span>
          <span className="choice-label">Кредит</span>
          <span className="choice-hint">Рассчитать ежемесячный платёж и переплату</span>
        </button>

        <button
          className="choice-btn deposit-btn"
          onClick={() => props.onChoose('deposit')}
        >
          <span className="choice-icon">&#128176;</span>
          <span className="choice-label">Вклад</span>
          <span className="choice-hint">Рассчитать доход по депозиту</span>
        </button>
      </div>
    </div>
  )
}

export default ChooseType
