// Все переводы приложения
// Ключ — код языка, значение — объект с текстами

const translations = {
  en: {
    // Заголовок
    appTitle: 'Financial Calculator',

    // Страница приветствия
    welcomeTitle: 'Welcome!',
    welcomeDescription: 'This app helps you make smart financial decisions by calculating loan overpayments and forecasting income from deposits or staking.',
    welcomeFeature1: 'Calculate loan payments and overpayments',
    welcomeFeature2: 'Forecast deposit income',
    welcomeFeature3: 'Compound interest for staking',
    getStarted: 'Get Started',

    // Страница 1: Выбор типа
    whatToCalculate: 'What would you like to calculate?',
    credit: 'Loan',
    creditDesc: 'Calculate monthly payment and overpayment',
    deposit: 'Deposit',
    depositDesc: 'Calculate income from your savings',

    // Страница 2: Ставка
    enterRate: 'Enter interest rate',
    annualRate: 'Annual interest rate (%)',
    rateExample: 'For example: 5.5',

    // Страница 3: Срок
    enterTerm: 'Enter term',
    termMonths: 'Term in months',
    termExample: 'For example: 12, 24, 36...',

    // Страница 4: Сумма
    enterAmount: 'Enter amount',
    loanAmount: 'Loan amount',
    depositAmount: 'Deposit amount',
    amountExample: 'For example: 10000',

    // Страница 5: Результат
    loanCalculation: 'Loan Calculation',
    depositCalculation: 'Deposit Calculation',
    amount: 'Amount',
    rate: 'Rate',
    perYear: 'per year',
    term: 'Term',
    months: 'months',
    years: 'years',
    monthlyPayment: 'Monthly Payment',
    totalPayment: 'Total Payment',
    totalOverpayment: 'Total Overpayment',
    overpaymentPerYear: 'Overpayment per Year',
    overpaymentPerMonth: 'Overpayment per Month',
    monthlyIncome: 'Monthly Income',
    yearlyIncome: 'Yearly Income',
    totalIncome: 'Total Income',
    totalBalance: 'Total Balance',
    calculateAgain: 'Calculate Again',
    currency: 'c.u.',

    // Напоминание об инфляции
    inflationNote: 'Note: Average global inflation is ~3-4% per year. The real value of money may change over time.',

    // Кнопки
    back: 'Back',
    next: 'Next',

    // Стейкинг
    reinvestQuestion: 'Will you reinvest your dividends?',
    reinvestYes: 'Yes (Compound Interest)',
    reinvestNo: 'No (Simple Interest)',
    reinvestFrequency: 'Reinvest every (days)',
    reinvestFrequencyExample: 'For example: 30, 90, 365...',
    stakingCalculation: 'Staking Calculation',
    compoundIncome: 'Compound Income',

    // Секция поддержки
    supportProject: 'Support the Project',
    supportText: 'Thanks to your donations, this site remains ad-free. Your kindness helps the developer continue improving the app.',
    donatePayPal: 'Donate via PayPal',
    orCrypto: 'or via crypto',
    copyAddress: 'Copy',
    copied: 'Copied!',

    // Контакт
    contactEmail: 'Contact',
  },

  es: {
    // Título
    appTitle: 'Calculadora Financiera',

    // Página de bienvenida
    welcomeTitle: '¡Bienvenido!',
    welcomeDescription: 'Esta aplicación le ayuda a tomar decisiones financieras inteligentes calculando los sobrepagos de préstamos y pronosticando ingresos de depósitos o staking.',
    welcomeFeature1: 'Calcular pagos y sobrepagos de préstamos',
    welcomeFeature2: 'Pronosticar ingresos de depósitos',
    welcomeFeature3: 'Interés compuesto para staking',
    getStarted: 'Comenzar',

    // Página 1: Selección de tipo
    whatToCalculate: '¿Qué desea calcular?',
    credit: 'Préstamo',
    creditDesc: 'Calcular pago mensual y sobrepago',
    deposit: 'Depósito',
    depositDesc: 'Calcular ingresos de sus ahorros',

    // Página 2: Tasa
    enterRate: 'Ingrese la tasa de interés',
    annualRate: 'Tasa de interés anual (%)',
    rateExample: 'Por ejemplo: 5.5',

    // Página 3: Plazo
    enterTerm: 'Ingrese el plazo',
    termMonths: 'Plazo en meses',
    termExample: 'Por ejemplo: 12, 24, 36...',

    // Página 4: Monto
    enterAmount: 'Ingrese el monto',
    loanAmount: 'Monto del préstamo',
    depositAmount: 'Monto del depósito',
    amountExample: 'Por ejemplo: 10000',

    // Página 5: Resultado
    loanCalculation: 'Cálculo del Préstamo',
    depositCalculation: 'Cálculo del Depósito',
    amount: 'Monto',
    rate: 'Tasa',
    perYear: 'por año',
    term: 'Plazo',
    months: 'meses',
    years: 'años',
    monthlyPayment: 'Pago Mensual',
    totalPayment: 'Pago Total',
    totalOverpayment: 'Sobrepago Total',
    overpaymentPerYear: 'Sobrepago por Año',
    overpaymentPerMonth: 'Sobrepago por Mes',
    monthlyIncome: 'Ingreso Mensual',
    yearlyIncome: 'Ingreso Anual',
    totalIncome: 'Ingreso Total',
    totalBalance: 'Saldo Total',
    calculateAgain: 'Calcular de Nuevo',
    currency: 'u.c.',

    // Nota sobre inflación
    inflationNote: 'Nota: La inflación mundial promedio es ~3-4% anual. El valor real del dinero puede cambiar con el tiempo.',

    // Botones
    back: 'Atrás',
    next: 'Siguiente',

    // Staking
    reinvestQuestion: '¿Reinvertirá sus dividendos?',
    reinvestYes: 'Sí (Interés Compuesto)',
    reinvestNo: 'No (Interés Simple)',
    reinvestFrequency: 'Reinvertir cada (días)',
    reinvestFrequencyExample: 'Por ejemplo: 30, 90, 365...',
    stakingCalculation: 'Cálculo de Staking',
    compoundIncome: 'Ingreso Compuesto',

    // Sección de apoyo
    supportProject: 'Apoyar el Proyecto',
    supportText: 'Gracias a sus donaciones, este sitio permanece sin publicidad. Su generosidad ayuda al desarrollador a seguir mejorando la aplicación.',
    donatePayPal: 'Donar vía PayPal',
    orCrypto: 'o vía cripto',
    copyAddress: 'Copiar',
    copied: '¡Copiado!',

    // Contacto
    contactEmail: 'Contacto',
  },

  ru: {
    // Заголовок
    appTitle: 'Финансовый калькулятор',

    // Страница приветствия
    welcomeTitle: 'Добро пожаловать!',
    welcomeDescription: 'Это приложение помогает принимать разумные финансовые решения, рассчитывая переплаты по кредитам и прогнозируя доход от депозитов или стейкинга.',
    welcomeFeature1: 'Расчёт платежей и переплат по кредитам',
    welcomeFeature2: 'Прогноз дохода от депозитов',
    welcomeFeature3: 'Сложный процент для стейкинга',
    getStarted: 'Начать',

    // Страница 1: Выбор типа
    whatToCalculate: 'Что будем считать?',
    credit: 'Кредит',
    creditDesc: 'Рассчитать ежемесячный платёж и переплату',
    deposit: 'Вклад',
    depositDesc: 'Рассчитать доход от сбережений',

    // Страница 2: Ставка
    enterRate: 'Введите процентную ставку',
    annualRate: 'Годовая процентная ставка (%)',
    rateExample: 'Например: 5.5',

    // Страница 3: Срок
    enterTerm: 'Введите срок',
    termMonths: 'Срок в месяцах',
    termExample: 'Например: 12, 24, 36...',

    // Страница 4: Сумма
    enterAmount: 'Введите сумму',
    loanAmount: 'Сумма кредита',
    depositAmount: 'Сумма вклада',
    amountExample: 'Например: 10000',

    // Страница 5: Результат
    loanCalculation: 'Расчёт кредита',
    depositCalculation: 'Расчёт вклада',
    amount: 'Сумма',
    rate: 'Ставка',
    perYear: 'в год',
    term: 'Срок',
    months: 'мес.',
    years: 'лет',
    monthlyPayment: 'Ежемесячный платёж',
    totalPayment: 'Общая сумма выплат',
    totalOverpayment: 'Переплата за весь срок',
    overpaymentPerYear: 'Переплата в год',
    overpaymentPerMonth: 'Переплата в месяц',
    monthlyIncome: 'Доход в месяц',
    yearlyIncome: 'Доход в год',
    totalIncome: 'Общий доход за весь срок',
    totalBalance: 'Итого на счёте',
    calculateAgain: 'Рассчитать заново',
    currency: 'у.е.',

    // Напоминание об инфляции
    inflationNote: 'Примечание: Средняя мировая инфляция ~3-4% в год. Реальная ценность денег может меняться со временем.',

    // Кнопки
    back: 'Назад',
    next: 'Далее',

    // Стейкинг
    reinvestQuestion: 'Будете ли вы реинвестировать дивиденды?',
    reinvestYes: 'Да (Сложный процент)',
    reinvestNo: 'Нет (Простой процент)',
    reinvestFrequency: 'Реинвестировать каждые (дней)',
    reinvestFrequencyExample: 'Например: 30, 90, 365...',
    stakingCalculation: 'Расчёт стейкинга',
    compoundIncome: 'Сложный доход',

    // Секция поддержки
    supportProject: 'Поддержать проект',
    supportText: 'Благодаря вашим пожертвованиям на сайте нет рекламы. Ваша доброта помогает разработчику продолжать улучшать приложение.',
    donatePayPal: 'Поддержать через PayPal',
    orCrypto: 'или криптой',
    copyAddress: 'Копировать',
    copied: 'Скопировано!',

    // Контакт
    contactEmail: 'Контакт',
  },
}

export default translations
