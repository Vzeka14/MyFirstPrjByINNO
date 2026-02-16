import { useState, useEffect } from 'react'

// Бегущая строка с рыночными котировками
// Использует бесплатный API CoinGecko для крипто и демо-данные для акций

function MarketTicker() {
  const [prices, setPrices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // Получаем крипто цены из CoinGecko (бесплатный API)
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,ripple,dogecoin&vs_currencies=usd&include_24hr_change=true'
        )
        const data = await response.json()

        const cryptoPrices = [
          { symbol: 'BTC', price: data.bitcoin?.usd || 0, change: data.bitcoin?.usd_24h_change || 0 },
          { symbol: 'ETH', price: data.ethereum?.usd || 0, change: data.ethereum?.usd_24h_change || 0 },
          { symbol: 'SOL', price: data.solana?.usd || 0, change: data.solana?.usd_24h_change || 0 },
          { symbol: 'ADA', price: data.cardano?.usd || 0, change: data.cardano?.usd_24h_change || 0 },
          { symbol: 'XRP', price: data.ripple?.usd || 0, change: data.ripple?.usd_24h_change || 0 },
          { symbol: 'DOGE', price: data.dogecoin?.usd || 0, change: data.dogecoin?.usd_24h_change || 0 },
        ]

        // Добавляем демо-данные для акций/индексов (API для них обычно платные)
        const stockPrices = [
          { symbol: 'S&P500', price: 5234.18, change: 0.45 },
          { symbol: 'GOLD', price: 2178.50, change: -0.12 },
          { symbol: 'OIL', price: 78.45, change: 1.23 },
        ]

        setPrices([...cryptoPrices, ...stockPrices])
        setLoading(false)
      } catch (error) {
        // Если API недоступен, показываем демо-данные
        setPrices([
          { symbol: 'BTC', price: 67500, change: 2.34 },
          { symbol: 'ETH', price: 3450, change: 1.56 },
          { symbol: 'SOL', price: 145, change: -0.89 },
          { symbol: 'S&P500', price: 5234, change: 0.45 },
          { symbol: 'GOLD', price: 2178, change: -0.12 },
          { symbol: 'OIL', price: 78.45, change: 1.23 },
        ])
        setLoading(false)
      }
    }

    fetchPrices()
    // Обновляем каждые 60 секунд
    const interval = setInterval(fetchPrices, 60000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price) => {
    if (price >= 1000) {
      return price.toLocaleString('en-US', { maximumFractionDigits: 0 })
    }
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  if (loading) {
    return <div className="ticker-wrapper"><div className="ticker">Loading market data...</div></div>
  }

  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        <div className="ticker-content">
          {/* Дублируем контент для бесконечной прокрутки */}
          {[...prices, ...prices].map((item, index) => (
            <span key={index} className="ticker-item">
              <span className="ticker-symbol">{item.symbol}</span>
              <span className="ticker-price">${formatPrice(item.price)}</span>
              <span className={`ticker-change ${item.change >= 0 ? 'up' : 'down'}`}>
                {item.change >= 0 ? '↑' : '↓'} {Math.abs(item.change).toFixed(2)}%
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketTicker
