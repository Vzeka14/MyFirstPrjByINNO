import { useState } from 'react'
import './App.css'

// Импортируем наши страницы-компоненты
import ChooseType from './pages/ChooseType'
import EnterRate from './pages/EnterRate'
import EnterTerm from './pages/EnterTerm'
import EnterAmount from './pages/EnterAmount'
import Result from './pages/Result'

function App() {
  // ========== STATE (состояние) ==========
  // Какая страница сейчас показана (1, 2, 3, 4 или 5)
  const [step, setStep] = useState(1)

  // Тип расчёта: 'credit' или 'deposit'
  const [calcType, setCalcType] = useState('')

  // Годовая процентная ставка (число)
  const [rate, setRate] = useState('')

  // Срок в месяцах (число)
  const [term, setTerm] = useState('')

  // Сумма кредита или вклада (число)
  const [amount, setAmount] = useState('')

  // ========== НАВИГАЦИЯ ==========
  // Функция "перейти на следующую страницу"
  const goNext = () => setStep(step + 1)

  // Функция "вернуться назад"
  const goBack = () => setStep(step - 1)

  // Функция "начать заново"
  const reset = () => {
    setStep(1)
    setCalcType('')
    setRate('')
    setTerm('')
    setAmount('')
  }

  // ========== РЕНДЕР СТРАНИЦ ==========
  // В зависимости от шага показываем нужную страницу
  // Обрати внимание: мы ПЕРЕДАЁМ данные и функции через PROPS!
  return (
    <div className="app">
      <h1 className="app-title">Финансовый калькулятор</h1>

      <div className="app-card">
        {step === 1 && (
          <ChooseType
            onChoose={(type) => {
              setCalcType(type)
              goNext()
            }}
          />
        )}

        {step === 2 && (
          <EnterRate
            calcType={calcType}
            rate={rate}
            setRate={setRate}
            onNext={goNext}
            onBack={goBack}
          />
        )}

        {step === 3 && (
          <EnterTerm
            calcType={calcType}
            term={term}
            setTerm={setTerm}
            onNext={goNext}
            onBack={goBack}
          />
        )}

        {step === 4 && (
          <EnterAmount
            calcType={calcType}
            amount={amount}
            setAmount={setAmount}
            onNext={goNext}
            onBack={goBack}
          />
        )}

        {step === 5 && (
          <Result
            calcType={calcType}
            rate={Number(rate)}
            term={Number(term)}
            amount={Number(amount)}
            onReset={reset}
          />
        )}
      </div>

      {/* Индикатор шагов внизу */}
      <div className="steps-indicator">
        {[1, 2, 3, 4, 5].map((s) => (
          <div
            key={s}
            className={`step-dot ${s === step ? 'active' : ''} ${s < step ? 'done' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
