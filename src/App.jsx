import { useState } from 'react'
import './App.css'

// Импортируем переводы
import translations from './translations'

// Импортируем компоненты
import LanguageSwitcher from './components/LanguageSwitcher'
import ChooseType from './pages/ChooseType'
import EnterRate from './pages/EnterRate'
import EnterTerm from './pages/EnterTerm'
import EnterAmount from './pages/EnterAmount'
import Result from './pages/Result'

function App() {
  // ========== STATE (состояние) ==========
  // Текущий язык (английский по умолчанию)
  const [lang, setLang] = useState('en')

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

  // Получаем тексты для текущего языка
  const t = translations[lang]

  // ========== НАВИГАЦИЯ ==========
  const goNext = () => setStep(step + 1)
  const goBack = () => setStep(step - 1)

  const reset = () => {
    setStep(1)
    setCalcType('')
    setRate('')
    setTerm('')
    setAmount('')
  }

  // ========== РЕНДЕР ==========
  return (
    <div className="app">
      {/* Переключатель языка в правом верхнем углу */}
      <LanguageSwitcher currentLang={lang} onChangeLang={setLang} />

      <h1 className="app-title">{t.appTitle}</h1>

      <div className="app-card">
        {step === 1 && (
          <ChooseType
            t={t}
            onChoose={(type) => {
              setCalcType(type)
              goNext()
            }}
          />
        )}

        {step === 2 && (
          <EnterRate
            t={t}
            calcType={calcType}
            rate={rate}
            setRate={setRate}
            onNext={goNext}
            onBack={goBack}
          />
        )}

        {step === 3 && (
          <EnterTerm
            t={t}
            calcType={calcType}
            term={term}
            setTerm={setTerm}
            onNext={goNext}
            onBack={goBack}
          />
        )}

        {step === 4 && (
          <EnterAmount
            t={t}
            calcType={calcType}
            amount={amount}
            setAmount={setAmount}
            onNext={goNext}
            onBack={goBack}
          />
        )}

        {step === 5 && (
          <Result
            t={t}
            calcType={calcType}
            rate={Number(rate)}
            term={Number(term)}
            amount={Number(amount)}
            onReset={reset}
          />
        )}
      </div>

      {/* Индикатор шагов */}
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
