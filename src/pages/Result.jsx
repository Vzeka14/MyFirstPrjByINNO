// Страница 5: Результат расчёта
// PROPS:
//   calcType — тип расчёта ('credit' или 'deposit')
//   rate     — годовая ставка (число, например 12.5)
//   term     — срок в месяцах (число)
//   amount   — сумма (число)
//   onReset  — функция "начать заново"

function Result(props) {
  const isCredit = props.calcType === 'credit'

  // Форматирование числа с пробелами (1000000 -> 1 000 000)
  const formatMoney = (num) => {
    return Math.round(num).toLocaleString('sv-SE')
  }

  // ========== РАСЧЁТ ДЛЯ КРЕДИТА ==========
  // Формула аннуитетного платежа:
  // M = P * [r * (1+r)^n] / [(1+r)^n - 1]
  // Где: P — сумма кредита, r — месячная ставка, n — кол-во месяцев
  const calculateCredit = () => {
    const monthlyRate = props.rate / 100 / 12  // годовая ставка -> месячная
    const n = props.term

    if (monthlyRate === 0) {
      const monthlyPayment = props.amount / n
      return {
        monthlyPayment,
        totalPayment: props.amount,
        overpayment: 0,
        overpaymentPerYear: 0,
        overpaymentPerMonth: 0,
      }
    }

    const monthlyPayment =
      props.amount *
      (monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1)

    const totalPayment = monthlyPayment * n
    const overpayment = totalPayment - props.amount
    const years = n / 12

    return {
      monthlyPayment,
      totalPayment,
      overpayment,
      overpaymentPerYear: overpayment / years,
      overpaymentPerMonth: overpayment / n,
    }
  }

  // ========== РАСЧЁТ ДЛЯ ВКЛАДА ==========
  // Простой процент (без капитализации):
  // Доход = P * r * t
  // Где: P — сумма вклада, r — годовая ставка, t — срок в годах
  const calculateDeposit = () => {
    const yearlyRate = props.rate / 100
    const years = props.term / 12

    const totalIncome = props.amount * yearlyRate * years
    const incomePerYear = props.amount * yearlyRate
    const incomePerMonth = incomePerYear / 12
    const totalWithIncome = props.amount + totalIncome

    return {
      totalIncome,
      incomePerYear,
      incomePerMonth,
      totalWithIncome,
    }
  }

  // Вызываем нужный расчёт
  const result = isCredit ? calculateCredit() : calculateDeposit()

  return (
    <div className="page">
      <h2>{isCredit ? 'Расчёт кредита' : 'Расчёт вклада'}</h2>

      {/* Исходные данные */}
      <div className="result-summary">
        <div className="summary-row">
          <span>Сумма:</span>
          <span>{formatMoney(props.amount)} SEK</span>
        </div>
        <div className="summary-row">
          <span>Ставка:</span>
          <span>{props.rate}% годовых</span>
        </div>
        <div className="summary-row">
          <span>Срок:</span>
          <span>{props.term} мес. ({(props.term / 12).toFixed(1)} лет)</span>
        </div>
      </div>

      {/* Результаты */}
      <div className="result-details">
        {isCredit ? (
          <>
            <div className="result-item main">
              <span className="result-label">Ежемесячный платёж</span>
              <span className="result-value">{formatMoney(result.monthlyPayment)} SEK</span>
            </div>
            <div className="result-item">
              <span className="result-label">Общая сумма выплат</span>
              <span className="result-value">{formatMoney(result.totalPayment)} SEK</span>
            </div>
            <div className="result-item warning">
              <span className="result-label">Переплата за весь срок</span>
              <span className="result-value">{formatMoney(result.overpayment)} SEK</span>
            </div>
            <div className="result-item">
              <span className="result-label">Переплата в год</span>
              <span className="result-value">{formatMoney(result.overpaymentPerYear)} SEK</span>
            </div>
            <div className="result-item">
              <span className="result-label">Переплата в месяц</span>
              <span className="result-value">{formatMoney(result.overpaymentPerMonth)} SEK</span>
            </div>
          </>
        ) : (
          <>
            <div className="result-item main">
              <span className="result-label">Доход в месяц</span>
              <span className="result-value">{formatMoney(result.incomePerMonth)} SEK</span>
            </div>
            <div className="result-item">
              <span className="result-label">Доход в год</span>
              <span className="result-value">{formatMoney(result.incomePerYear)} SEK</span>
            </div>
            <div className="result-item success">
              <span className="result-label">Общий доход за весь срок</span>
              <span className="result-value">{formatMoney(result.totalIncome)} SEK</span>
            </div>
            <div className="result-item main">
              <span className="result-label">Итого на счёте</span>
              <span className="result-value">{formatMoney(result.totalWithIncome)} SEK</span>
            </div>
          </>
        )}
      </div>

      <button className="btn btn-reset" onClick={props.onReset}>
        Рассчитать заново
      </button>
    </div>
  )
}

export default Result
