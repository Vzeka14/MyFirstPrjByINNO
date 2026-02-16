// Страница результата расчёта
// PROPS:
//   t           — объект с переводами
//   calcType    — тип расчёта ('credit' или 'deposit')
//   rate        — годовая ставка (число)
//   term        — срок в месяцах (число)
//   amount      — сумма (число)
//   reinvest    — реинвестировать ли (true/false/null)
//   reinvestDays — частота реинвестирования в днях
//   onReset     — функция "начать заново"

function Result(props) {
  const { t } = props
  const isCredit = props.calcType === 'credit'
  const isStaking = props.calcType === 'deposit' && props.reinvest === true

  // Форматирование числа с 2 десятичными знаками
  const formatMoney = (num) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + ' ' + t.currency
  }

  // ========== РАСЧЁТ ДЛЯ КРЕДИТА (аннуитет) ==========
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

  // ========== РАСЧЁТ ДЛЯ ДЕПОЗИТА (простой процент) ==========
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

  // ========== РАСЧЁТ ДЛЯ СТЕЙКИНГА (сложный процент) ==========
  // Формула: A = P * (1 + r/n)^(n*t)
  // P — начальная сумма, r — годовая ставка, n — периоды в год, t — время в годах
  const calculateStaking = () => {
    const P = props.amount
    const r = props.rate / 100
    const periodsPerYear = 365 / props.reinvestDays
    const n = periodsPerYear
    const t = props.term / 12

    // Сложный процент
    const totalWithIncome = P * Math.pow(1 + r / n, n * t)
    const totalIncome = totalWithIncome - P
    const incomePerYear = totalIncome / t
    const incomePerMonth = incomePerYear / 12

    // Для сравнения: простой процент
    const simpleIncome = P * r * t

    return {
      totalIncome,
      incomePerYear,
      incomePerMonth,
      totalWithIncome,
      compoundBonus: totalIncome - simpleIncome,
    }
  }

  // Выбираем нужный расчёт
  let result
  if (isCredit) {
    result = calculateCredit()
  } else if (isStaking) {
    result = calculateStaking()
  } else {
    result = calculateDeposit()
  }

  // Определяем заголовок
  const getTitle = () => {
    if (isCredit) return t.loanCalculation
    if (isStaking) return t.stakingCalculation
    return t.depositCalculation
  }

  return (
    <div className="page">
      <h2>{getTitle()}</h2>

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
        {isStaking && (
          <div className="summary-row">
            <span>{t.reinvestFrequency}:</span>
            <span>{props.reinvestDays}</span>
          </div>
        )}
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
            {isStaking && result.compoundBonus > 0 && (
              <div className="result-item staking">
                <span className="result-label">{t.compoundIncome}</span>
                <span className="result-value">+{formatMoney(result.compoundBonus)}</span>
              </div>
            )}
            <div className="result-item main">
              <span className="result-label">{t.totalBalance}</span>
              <span className="result-value">{formatMoney(result.totalWithIncome)}</span>
            </div>
          </>
        )}
      </div>

      {/* Напоминание об инфляции */}
      <div className="inflation-note">
        <span className="inflation-icon">ℹ️</span>
        <span>{t.inflationNote}</span>
      </div>

      <button className="btn btn-reset" onClick={props.onReset}>
        {t.calculateAgain}
      </button>
    </div>
  )
}

export default Result
