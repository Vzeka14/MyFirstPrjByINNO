import { useState } from 'react'

// Секция поддержки проекта
// PROPS:
//   t — объект с переводами

function SupportSection(props) {
  const { t } = props
  const [copied, setCopied] = useState(false)

  const usdtAddress = 'THHNLDw1tmhbRBeu8dzwmFwsiHZyDC56RA'
  const paypalUrl = 'https://www.paypal.com/donate/?hosted_button_id=RWGE6R7B94M4W'

  const copyAddress = () => {
    navigator.clipboard.writeText(usdtAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="support-section">
      <h3 className="support-title">{t.supportProject}</h3>
      <p className="support-text">{t.supportText}</p>

      <a
        href={paypalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-donate"
      >
        💙 {t.donatePayPal}
      </a>

      <div className="crypto-section">
        <span className="crypto-label">{t.orCrypto} USDT (TRC-20):</span>
        <div className="crypto-address">
          <code className="address-text">{usdtAddress}</code>
          <button className="btn-copy" onClick={copyAddress}>
            {copied ? t.copied : t.copyAddress}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SupportSection
