import type { Metadata } from 'next'
import LegalShell from '../LegalShell'

export const metadata: Metadata = { title: 'Cookie Policy', description: 'Cookie and analytics choices for visitors to Webmaster Global worldwide.', alternates: { canonical: '/cookies' } }

export default function CookiesPage() {
  return <LegalShell eyebrow="COOKIE CONSENT · WORLDWIDE" title="Cookie Policy">
    <section><h2>Our approach</h2><p>We apply a privacy-first choice worldwide. Optional analytics does not load until you select “Accept analytics.” Rejecting optional cookies does not prevent you from using the portfolio or submitting a project inquiry.</p></section>
    <section><h2>Storage we use</h2><h3>Essential preference storage</h3><p><strong>webmaster-global-cookie-consent-v1</strong> is stored in your browser’s local storage to remember whether you accepted or rejected analytics. It is necessary to respect and retain your choice and does not track activity across websites.</p><h3>Optional Google Analytics</h3><p>After consent, Google Analytics may set cookies beginning with <strong>_ga</strong> to distinguish visits and understand aggregated website usage. The configured measurement property is G-G7D4MCPF69, with IP anonymization requested. Google controls its cookie durations and processing practices.</p></section>
    <section><h2>Choose or withdraw</h2><p>The first-visit banner provides equally available acceptance and rejection controls. After choosing, use the persistent “Cookie settings” button to change your preference. Rejecting removes accessible Google Analytics cookies for this site and prevents the analytics script from loading again unless you later accept.</p></section>
    <section><h2>Regional framework</h2><p>This consent design is intended to support requirements and expectations found in the EU/EEA ePrivacy and GDPR framework, German requirements, UK PECR and UK GDPR, Canadian privacy law, US state privacy laws, India’s data-protection framework, Russian data-protection rules, and other applicable jurisdictions. Laws differ and change; this policy does not represent a guarantee of compliance in every country.</p></section>
    <section><h2>Browser controls and Do Not Track</h2><p>You can also delete or block cookies and site storage through your browser. Browser-level Global Privacy Control or Do Not Track signals are not a replacement for the visible preference control; optional analytics remains off until you affirmatively accept.</p></section>
    <section><h2>Changes</h2><p>We will update this page if the cookies, analytics configuration, or service providers change. This policy is general information and not legal advice.</p></section>
  </LegalShell>
}
