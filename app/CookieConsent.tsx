'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

type Consent = 'accepted' | 'rejected' | null
const STORAGE_KEY = 'webmaster-global-cookie-consent-v1'

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null)
  const [ready, setReady] = useState(false)
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    setConsent(saved === 'accepted' || saved === 'rejected' ? saved : null)
    setReady(true)
  }, [])

  const choose = (choice: Exclude<Consent, null>) => {
    window.localStorage.setItem(STORAGE_KEY, choice)
    setConsent(choice)
    setShowPanel(false)
    if (choice === 'rejected') {
      document.cookie.split(';').forEach((cookie) => {
        const name = cookie.split('=')[0]?.trim()
        if (name?.startsWith('_ga')) document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`
      })
    }
  }

  if (!ready) return null

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-G7D4MCPF69" strategy="afterInteractive" />
          <Script id="google-analytics-consented" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G7D4MCPF69', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {(consent === null || showPanel) && (
        <section className="cookie-banner" role="dialog" aria-modal="true" aria-label="Cookie preferences">
          <div>
            <span className="eyebrow">YOUR PRIVACY · YOUR CHOICE</span>
            <h2>May we use analytics cookies?</h2>
            <p>
              Essential storage keeps your privacy choice. Optional Google Analytics helps us understand visits and improve this website. It stays off unless you accept. Read our <a href="/cookies">Cookie Policy</a> and <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
          <div className="cookie-actions">
            <button type="button" className="button cookie-reject" onClick={() => choose('rejected')}>Reject optional</button>
            <button type="button" className="button dark" onClick={() => choose('accepted')}>Accept analytics</button>
          </div>
        </section>
      )}

      {consent !== null && !showPanel && (
        <button type="button" className="cookie-settings" onClick={() => setShowPanel(true)}>Cookie settings</button>
      )}
    </>
  )
}
