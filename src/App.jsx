import { useState } from 'react'
import './App.css'

// Импортируем переводы
import translations from './translations'

// Импортируем компоненты
import LanguageSwitcher from './components/LanguageSwitcher'
import SupportSection from './components/SupportSection'
import MarketTicker from './components/MarketTicker'
import Welcome from './pages/Welcome'
import ChooseType from './pages/ChooseType'
import EnterRate from './pages/EnterRate'
import EnterTerm from './pages/EnterTerm'
import EnterAmount from './pages/EnterAmount'
import ReinvestQuestion from './pages/ReinvestQuestion'
import Result from './pages/Result'

function App() {
  // ========== STATE (состояние) ==========
  const [lang, setLang] = useState('en')
  const [step, setStep] = useState(0) // Начинаем с 0 (приветствие)
  const [calcType, setCalcType] = useState('')
  const [rate, setRate] = useState('')
  const [term, setTerm] = useState('')
  const [amount, setAmount] = useState('')

  // Стейкинг/реинвестирование
  const [reinvest, setReinvest] = useState(null) // null = не выбрано, true/false
  const [reinvestDays, setReinvestDays] = useState('')

  const t = translations[lang]

  // ========== НАВИГАЦИЯ ==========
  const goNext = () => setStep(step + 1)
  const goBack = () => setStep(step - 1)

  // Подсчет общего количества шагов (зависит от типа)
  const getTotalSteps = () => {
    if (calcType === 'deposit') return 7 // 0-6 с вопросом о реинвестировании
    return 6 // 0-5 без вопроса о реинвестировании
  }

  // Навигация после ввода суммы
  const handleAfterAmount = () => {
    if (calcType === 'deposit') {
      goNext() // Идём на вопрос о реинвестировании
    } else {
      setStep(6) // Сразу на результат
    }
  }

  const reset = () => {
    setStep(0)
    setCalcType('')
    setRate('')
    setTerm('')
    setAmount('')
    setReinvest(null)
    setReinvestDays('')
  }

  // Индикатор шагов (сколько точек показывать)
  const getStepDots = () => {
    const total = getTotalSteps()
    return Array.from({ length: total }, (_, i) => i)
  }

  // ========== РЕНДЕР ==========
  return (
    <div className="app">
      {/* Бегущая строка с котировками */}
      <MarketTicker />

      {/* Заголовок с флажками */}
      <div className="header-row">
        <h1 className="app-title">{t.appTitle}</h1>
        <LanguageSwitcher currentLang={lang} onChangeLang={setLang} />
      </div>

      <div className="app-card">
        {step === 0 && (
          <Welcome t={t} onStart={goNext} />
        )}

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
            onNext={handleAfterAmount}
            onBack={goBack}
          />
        )}

        {step === 5 && calcType === 'deposit' && (
          <ReinvestQuestion
            t={t}
            reinvest={reinvest}
            setReinvest={setReinvest}
            reinvestDays={reinvestDays}
            setReinvestDays={setReinvestDays}
            onNext={goNext}
            onBack={goBack}
          />
        )}

        {step === 6 && (
          <Result
            t={t}
            calcType={calcType}
            rate={Number(rate)}
            term={Number(term)}
            amount={Number(amount)}
            reinvest={reinvest}
            reinvestDays={Number(reinvestDays) || 0}
            onReset={reset}
          />
        )}
      </div>

      {/* Индикатор шагов */}
      {step > 0 && (
        <div className="steps-indicator">
          {getStepDots().map((s) => (
            <div
              key={s}
              className={`step-dot ${s === step ? 'active' : ''} ${s < step ? 'done' : ''}`}
            />
          ))}
        </div>
      )}

      {/* Секция поддержки */}
      <SupportSection t={t} />

      {/* Email контакт */}
      <div className="contact-email">
        <span>{t.contactEmail}: </span>
        <a href="mailto:vzeka14@gmail.com">vzeka14@gmail.com</a>
      </div>
    </div>
  )
}

export default App
