import './legal.css'

export default function LegalShell({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return <>
    <header className="legal-header"><a className="legal-brand" href="/"><span>WG</span><strong>Webmaster Global</strong></a><a href="/">Return to portfolio</a></header>
    <main className="legal-main">
      <span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p className="legal-updated">Effective and last updated: 13 August 2026</p>
      {children}
      <nav className="legal-nav" aria-label="Legal pages"><a href="/privacy">Privacy Policy</a><a href="/cookies">Cookie Policy</a><a href="/terms">Terms of Use</a><a href="/">Portfolio</a></nav>
    </main>
  </>
}
