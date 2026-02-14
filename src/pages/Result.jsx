// Страница 5: Результат расчёта
// PROPS:
//   t        — объект с переводами
//   calcType — тип расчёта ('credit' или 'deposit')
//   rate     — годовая ставка (число)
//   term     — срок в месяцах (число)
//   amount   — сумма (число)
//   onReset  — функция "начать заново"

function Result(props) {
  const { t } = props
  const isCredit = props.calcType === 'credit'

  // Форматирование числа с пробелами (1000000 -> 1 000 000)
  const formatMoney = (num) => {
    return Math.round(num).toLocaleString('en-US')
  }

  // ========== РАСЧЁТ ДЛЯ КРЕДИТА ==========
  const calculateCredit = () => {
    const monthlyRate = props.rate / 100 / 12
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

  const result = isCredit ? calculateCredit() : calculateDeposit()

  return (
    <div className="page">
      <h2>{isCredit ? t.loanCalculation : t.depositCalculation}</h2>

      {/* Исходные данные */}
      <div className="result-summary">
        <div className="summary-row">
          <span>{t.amount}:</span>
          <span>{formatMoney(props.amount)}</span>
        </div>
        <div className="summary-row">
          <span>{t.rate}:</span>
          <span>{props.rate}% {t.perYear}</span>
        </div>
        <div className="summary-row">
          <span>{t.term}:</span>
          <span>{props.term} {t.months} ({(props.term / 12).toFixed(1)} {t.years})</span>
        </div>
      </div>

      {/* Результаты */}
      <div className="result-details">
        {isCredit ? (
          <>
            <div className="result-item main">
              <span className="result-label">{t.monthlyPayment}</span>
              <span className="result-value">{formatMoney(result.monthlyPayment)}</span>
            </div>
            <div className="result-item">
              <span className="result-label">{t.totalPayment}</span>
              <span className="result-value">{formatMoney(result.totalPayment)}</span>
            </div>
            <div className="result-item warning">
              <span className="result-label">{t.totalOverpayment}</span>
              <span className="result-value">{formatMoney(result.overpayment)}</span>
            </div>
            <div className="result-item">
              <span className="result-label">{t.overpaymentPerYear}</span>
              <span className="result-value">{formatMoney(result.overpaymentPerYear)}</span>
            </div>
            <div className="result-item">
              <span className="result-label">{t.overpaymentPerMonth}</span>
              <span className="result-value">{formatMoney(result.overpaymentPerMonth)}</span>
            </div>
          </>
        ) : (
          <>
            <div className="result-item main">
              <span className="result-label">{t.monthlyIncome}</span>
              <span className="result-value">{formatMoney(result.incomePerMonth)}</span>
            </div>
            <div className="result-item">
              <span className="result-label">{t.yearlyIncome}</span>
              <span className="result-value">{formatMoney(result.incomePerYear)}</span>
            </div>
            <div className="result-item success">
              <span className="result-label">{t.totalIncome}</span>
              <span className="result-value">{formatMoney(result.totalIncome)}</span>
            </div>
            <div className="result-item main">
              <span className="result-label">{t.totalBalance}</span>
              <span className="result-value">{formatMoney(result.totalWithIncome)}</span>
            </div>
          </>
        )}
      </div>

      <button className="btn btn-reset" onClick={props.onReset}>
        {t.calculateAgain}
      </button>
    </div>
  )
}

export default Result
