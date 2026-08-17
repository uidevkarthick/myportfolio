import type { Metadata } from 'next'
import LegalShell from '../LegalShell'

export const metadata: Metadata = { title: 'Terms of Use', description: 'Terms governing use of the Webmaster Global portfolio website.', alternates: { canonical: '/terms' } }

export default function TermsPage() {
  return <LegalShell eyebrow="WEBSITE TERMS" title="Terms of Use">
    <section><h2>Acceptance</h2><p>By using this website, you agree to these terms. If you do not agree, please stop using the site. These terms govern the public portfolio only; any paid project will be governed by a separate written proposal, statement of work, or contract.</p></section>
    <section><h2>Information and proposals</h2><p>Portfolio information, availability, service descriptions, estimates, promotional statements, and the “$1” starting concept are invitations to discuss—not binding offers or guaranteed prices. Scope, timing, deliverables, ownership, fees, support, and responsibilities must be agreed in writing for each project.</p></section>
    <section><h2>Acceptable use</h2><p>You must not attack, scrape abusively, overload, reverse engineer, bypass security, submit spam or unlawful content, impersonate another person, or use the website in a way that harms the service or others.</p></section>
    <section><h2>Intellectual property</h2><p>The site design, original copy, graphics, and code are protected to the extent allowed by law. Product names, logos, and third-party technologies belong to their respective owners. Displaying them describes capabilities and does not imply endorsement or partnership.</p></section>
    <section><h2>No warranties</h2><p>The website is provided on an “as available” basis. While reasonable care is taken, we do not promise uninterrupted access, error-free content, search rankings, AI recommendations, traffic, leads, revenue, or business success.</p></section>
    <section><h2>Liability</h2><p>To the extent permitted by applicable law, Webmaster Global is not liable for indirect, incidental, special, consequential, or lost-profit damages arising from use of this public website. Nothing here excludes rights or liability that cannot legally be excluded.</p></section>
    <section><h2>Third-party services</h2><p>The site may rely on or link to third-party services. Their availability, content, security, and privacy practices are governed by their own terms and are outside our control.</p></section>
    <section><h2>Applicable rights and changes</h2><p>Mandatory consumer and privacy protections in your country continue to apply. Cross-border disputes and governing law should be specified in an executed project agreement. We may update these website terms prospectively by publishing a new effective date.</p></section>
  </LegalShell>
}
