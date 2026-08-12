'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const projectTypes = ['Website', 'Web app', 'E-commerce', 'Product rescue', 'Something else']
const budgets = ['Starting small', 'Under $2k', '$2k–$5k', '$5k–$10k', '$10k+']

type ProjectInquiryProps = {
  label?: string
  variant?: 'light' | 'dark' | 'availability'
}

export default function ProjectInquiry({ label = 'Tell me about your project', variant = 'light' }: ProjectInquiryProps) {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [startedAt, setStartedAt] = useState(0)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    dialogRef.current?.querySelector<HTMLInputElement>('input')?.focus()
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', closeOnEscape)
    document.body.classList.add('inquiry-open')
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('inquiry-open')
    }
  }, [open])

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    const form = new FormData(event.currentTarget)
    try {
      const response = await fetch('https://vdikfwakcdmjnaegivzq.supabase.co/functions/v1/portfolio-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || ''}`,
        },
        body: JSON.stringify({
          name: form.get('name'), email: form.get('email'), company: form.get('company'),
          projectType: form.get('projectType'), budget: form.get('budget'), timeline: form.get('timeline'),
          details: form.get('details'), website: form.get('website'), startedAt,
        }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.error || 'Could not send your inquiry. Please try again.')
      setSent(true)
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Could not send your inquiry. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <button className={variant === 'availability' ? 'availability inquiry-trigger' : `button ${variant} inquiry-trigger`} type="button" onClick={() => { setSent(false); setError(''); setStartedAt(Date.now()); setOpen(true) }}>
        {variant === 'availability' && <i />} {label} {variant !== 'availability' && <span aria-hidden="true">↗</span>}
      </button>

      {open && createPortal(
        <div className="inquiry-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <div className="inquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="inquiry-title" ref={dialogRef}>
            <div className="inquiry-topbar">
              <span><i /> New project inquiry</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close project inquiry">×</button>
            </div>

            {sent ? (
              <div className="inquiry-success">
                <span aria-hidden="true">↗</span>
                <p className="eyebrow">ONE LAST STEP</p>
                <h3>Your inquiry<br/>is safely received.</h3>
                <p>Thanks for sharing the details. I usually reply within one business day.</p>
                <button type="button" className="button dark" onClick={() => setOpen(false)}>Done</button>
              </div>
            ) : (
              <form onSubmit={submitInquiry}>
                <div className="inquiry-heading">
                  <span className="eyebrow">LET’S BUILD SOMETHING USEFUL</span>
                  <h3 id="inquiry-title">What are you<br/><em>working on?</em></h3>
                  <p>A few details will help me understand the scope before we talk.</p>
                </div>

                <div className="form-grid">
                  <label className="form-honeypot" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
                  <label><span>Your name</span><input name="name" autoComplete="name" placeholder="Jane Smith" minLength={2} maxLength={100} required /></label>
                  <label><span>Work email</span><input name="email" type="email" autoComplete="email" placeholder="jane@company.com" maxLength={254} required /></label>
                  <label className="full"><span>Company <small>optional</small></span><input name="company" autoComplete="organization" placeholder="Company or product name" maxLength={150} /></label>

                  <fieldset className="full">
                    <legend>What do you need?</legend>
                    <div className="choice-row">{projectTypes.map((type, index) => <label key={type}><input type="radio" name="projectType" value={type} defaultChecked={index === 0}/><span>{type}</span></label>)}</div>
                  </fieldset>

                  <fieldset className="full">
                    <legend>Estimated budget</legend>
                    <div className="choice-row">{budgets.map((budget, index) => <label key={budget}><input type="radio" name="budget" value={budget} defaultChecked={index === 1}/><span>{budget}</span></label>)}</div>
                  </fieldset>

                  <label><span>Ideal timeline</span><select name="timeline" defaultValue="1–2 months"><option>ASAP</option><option>2–4 weeks</option><option>1–2 months</option><option>3+ months</option><option>Flexible</option></select></label>
                  <label className="full"><span>Tell me about the project <small>minimum 20 characters</small></span><textarea name="details" rows={4} placeholder="The problem, your goals, and what success looks like…" minLength={20} maxLength={5000} required /></label>
                </div>

                <div className="form-submit">
                  <div><p>Your details stay private and are stored securely.</p>{error && <p className="form-error" role="alert">{error}</p>}</div>
                  <button className="button dark" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send inquiry'} <span aria-hidden="true">↗</span></button>
                </div>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
