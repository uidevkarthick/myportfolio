import ProjectInquiry from './ProjectInquiry'

const projects = [
  {
    number: '01',
    title: 'StatementIQ',
    eyebrow: 'FINTECH · AI PRODUCT',
    description: 'An AI-powered workflow that turns bank statement PDFs into clean Excel data across 100+ global banks—with 97% extraction accuracy.',
    impact: ['100+ banks', '97% accuracy', 'PDF → Excel'],
    stack: ['React', 'TypeScript', 'AI/ML', 'SaaS'],
    href: 'https://ynotfinance.com',
    theme: 'lime',
    status: 'Ongoing product',
  },
  {
    number: '02',
    title: 'DropSetu',
    eyebrow: 'COMMERCE · PLATFORM',
    description: 'A trusted dropshipping connector built for Indian suppliers and resellers, with verified partners, a 48-hour SLA, and store integrations.',
    impact: ['48h SLA', 'Verified supply', 'Multi-store'],
    stack: ['Next.js', 'APIs', 'E-commerce', 'Real-time'],
    href: 'https://dropsetu.com',
    theme: 'coral',
    status: 'Ongoing product',
  },
  {
    number: '03',
    title: 'indihomes',
    eyebrow: 'D2C · E-COMMERCE',
    description: 'A conversion-minded home goods storefront with AI-assisted product discovery and a streamlined Shopify buying experience.',
    impact: ['Live D2C store', 'AI discovery', 'SEO ready'],
    stack: ['Shopify', 'Claude AI', 'MCP', 'E-commerce'],
    href: 'https://inidhomes.store',
    theme: 'violet',
    status: 'Ongoing product',
  },
]

const services = [
  ['01', 'Complete product development', 'One accountable technical partner from idea and architecture through frontend, backend, integrations, launch, and ongoing support.'],
  ['02', 'Frontend development', 'Scalable React and Next.js interfaces, design systems, dashboards, and complex workflows that stay fast and maintainable.'],
  ['03', 'E-commerce', 'Conversion-focused Shopify and custom commerce experiences, integrations, performance work, and operational support.'],
]

const problemScenarios = [
  ['LAUNCH', 'From idea to a working product', 'For startups that need someone to own the technical journey end to end, make sensible trade-offs, and keep momentum through launch.'],
  ['RESCUE', 'A critical product needs stabilising', 'For agencies or founders facing a fragile release, integration failure, or delivery bottleneck across frontend, Node.js, Python, or cloud services.'],
  ['GROW', 'Commerce has outgrown its setup', 'For brands that need a faster storefront, cleaner customer journey, dependable integrations, and engineering support after launch.'],
]

const feedbackScenarios = [
  {
    quote: 'We needed more than a frontend hand. We needed someone who could understand the product, make the technical calls, and support the team all the way through delivery.',
    profile: 'Startup founder',
    market: 'India',
    highlight: 'End-to-end ownership',
  },
  {
    quote: 'A release was at risk and the issues crossed frontend, Node.js, and Python services. The calm diagnosis and practical recovery plan helped the team regain control.',
    profile: 'Agency delivery lead',
    market: 'United States',
    highlight: 'Product rescue',
  },
  {
    quote: 'Our commerce workflow had become fragile at the worst possible time. The focus stayed on business continuity first, then on building a cleaner system for future growth.',
    profile: 'E-commerce operator',
    market: 'India',
    highlight: 'Commerce stability',
  },
]

const skills = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Redux', 'GraphQL', 'Shopify', 'Design systems', 'Performance', 'AI integrations', 'Technical leadership']

const platforms = [
  ['/icons/react.svg', 'React'], ['/icons/nextjs.svg', 'Next.js'], ['/icons/typescript.svg', 'TypeScript'], ['/icons/javascript.svg', 'JavaScript'],
  ['/icons/nodejs.svg', 'Node.js'], ['/icons/python.svg', 'Python'], ['/icons/shopify.svg', 'Shopify'], ['/icons/graphql.svg', 'GraphQL'],
]

const aiPowers = [
  ['/icons/claude.svg', 'Claude', 'AI workflows'],
  ['/icons/antigravity-symbol.svg', 'Google Antigravity', 'Agent-first building'],
  ['/icons/codex.svg', 'Codex', 'Engineering agents'],
  ['/icons/mcp.svg', 'MCP connectivity', 'Tools + data'],
  ['/icons/skills.svg', 'AI Skills', 'Custom capability'],
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://karthickdev.com/#person',
        name: 'Karthick Kumar',
        url: 'https://karthickdev.com',
        jobTitle: 'Freelance Product Developer',
        address: { '@type': 'PostalAddress', addressLocality: 'Chennai', addressCountry: 'IN' },
        knowsAbout: ['Web development', 'Product development', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Shopify', 'E-commerce', 'AI integration', 'Model Context Protocol'],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://karthickdev.com/#service',
        name: 'Karthick Kumar Digital Product Development',
        url: 'https://karthickdev.com',
        email: 'webtechkarthik@gmail.com',
        priceRange: '$',
        areaServed: 'Worldwide',
        founder: { '@id': 'https://karthickdev.com/#person' },
        serviceType: ['Website development', 'Web application development', 'Frontend development', 'E-commerce development', 'AI integration', 'Digital product development'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://karthickdev.com/#website',
        url: 'https://karthickdev.com',
        name: 'Karthick Kumar — Freelance Product Developer',
        inLanguage: 'en',
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Karthick home"><span>KK</span><strong>Karthick Kumar</strong></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </nav>
        <ProjectInquiry label="Available for work" variant="availability" />
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span>For startups and agencies</span><span>Chennai · Working worldwide</span></div>
        <h1>I turn ambitious ideas into <em>fast, useful</em> digital products.</h1>
        <div className="hero-bottom">
          <p>Lead developer offering end-to-end product delivery for startups and agencies—from the first technical decision to launch and support.</p>
          <div className="hero-actions">
            <ProjectInquiry label="Start a project" variant="dark" />
            <a className="text-link" href="#work">See selected work <span>↓</span></a>
          </div>
        </div>
        <div className="orbit" aria-hidden="true"><span className="orbit-ring"/><span className="orbit-dot"/><span className="orbit-code">&lt;/&gt;</span></div>
      </section>

      <section className="platforms" aria-labelledby="platforms-title">
        <div className="platform-heading">
          <div><span className="eyebrow">PLATFORMS I BUILD WITH</span><h2 id="platforms-title">The right tools.<br/><em>One accountable partner.</em></h2></div>
          <p>Modern product engineering across frontend, backend, commerce, and intelligent automation.</p>
        </div>
        <div className="platform-grid">
          {platforms.map(([icon, name]) => <div className="platform-chip" key={name}><span><img src={icon} alt="" /></span><strong>{name}</strong></div>)}
        </div>
        <div className="ai-band">
          <div className="ai-intro"><span>AI SUPERPOWERS</span><p>Connect AI to your product, data, and daily workflows—not as a gimmick, but as useful capability.</p></div>
          <div className="ai-grid">
            {aiPowers.map(([icon, name, detail]) => <div className="ai-chip" key={name}><span><img src={icon} alt="" /></span><p><strong>{name}</strong><small>{detail}</small></p></div>)}
          </div>
          <p className="connect-note"><span>↳</span> Need MCP servers, reusable Skills, AI agents, or tool connectivity inside your product? We’re happy to help design and build it.</p>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <div><span className="eyebrow">SELECTED WORK</span><h2>Built to work<br/>in the real world.</h2></div>
          <p>Selected products where engineering decisions meet customer needs and measurable outcomes.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project ${project.theme}`} key={project.title}>
              <div className="project-meta"><span>{project.number}</span><span>{project.eyebrow}</span></div>
              <div className="project-main">
                <span className="project-status"><i /> {project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-role"><strong>Role:</strong> Lead developer · End-to-end development</p>
                <div className="impact-row">{project.impact.map(item => <span key={item}>{item}</span>)}</div>
              </div>
              <div className="project-footer">
                <div>{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}><Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scenarios section" aria-labelledby="scenarios-title">
        <div className="section-heading">
          <div><span className="eyebrow">WHERE I ADD VALUE</span><h2 id="scenarios-title">Bring me in when<br/>the stakes are real.</h2></div>
          <p>These are common engagement scenarios—not customer testimonials. They show the kinds of problems I am equipped to own.</p>
        </div>
        <div className="scenario-grid">
          {problemScenarios.map(([label, title, description]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="pricing section" id="pricing">
        <div className="pricing-copy">
          <span className="eyebrow">FLEXIBLE ENGAGEMENTS</span>
          <h2>Start small.<br/><em>Grow together.</em></h2>
          <p>Fixed scope, hourly support, retainers, or a remote engagement—I recommend the model that fits the work, not the other way around.</p>
          <div className="pricing-note"><span>Your first commitment</span><strong>$1</strong><small>If you are serious about building your business, start the conversation for one dollar. We’ll agree the real scope, delivery plan, and any third-party costs transparently before development begins.</small></div>
        </div>
        <aside className="founder-offer">
          <span className="offer-label">A SMALL WAY TO GIVE BACK</span>
          <h3>Women founders:<br/>your first five-page static website can be free.</h3>
          <p>If you are validating a new business and budget is the blocker, tell me your story. I reserve limited availability for eligible founder-led projects. Hosting, domains, third-party fees, and advanced functionality are separate.</p>
          <ProjectInquiry label="Share your idea" variant="dark" />
        </aside>
      </section>

      <section className="feedback section" aria-labelledby="feedback-title">
        <div className="feedback-heading">
          <div><span className="eyebrow">THE EXPERIENCE I AIM TO DELIVER</span><h2 id="feedback-title">Support that feels<br/><em>fully invested.</em></h2></div>
          <p><strong>Representative scenarios, not published endorsements.</strong> These examples illustrate the feedback I work to earn. They will be replaced with verified client quotes as approvals become available.</p>
        </div>
        <div className="feedback-grid">
          {feedbackScenarios.map((item, index) => (
            <article key={item.highlight}>
              <div className="quote-mark" aria-hidden="true">“</div>
              <blockquote>{item.quote}</blockquote>
              <div className="feedback-profile">
                <span className={`profile-avatar avatar-${index + 1}`}>{item.profile.split(' ').map(word => word[0]).join('')}</span>
                <p><strong>{item.profile}</strong><small>{item.market} · Representative persona</small></p>
                <span>{item.highlight}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading inverse">
          <div><span className="eyebrow">HOW I CAN HELP</span><h2>Senior thinking.<br/><em>Hands-on delivery.</em></h2></div>
          <p>I join ambitious teams at the point where clarity, craft, and momentum matter most.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, description]) => (
            <div className="service" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-intro">
          <span className="eyebrow">ABOUT</span>
          <blockquote>“I care about the whole product—not just the part inside the code editor.”</blockquote>
        </div>
        <div className="about-grid">
          <div className="portrait-mark" aria-hidden="true"><span>10+</span><small>YEARS<br/>BUILDING</small></div>
          <div className="bio">
            <h2>Hello, I’m Karthick.</h2>
            <p>I’m a lead developer who has spent the last decade turning complex business requirements into clear, dependable product experiences.</p>
            <p>I partner with startups and agencies to lead products end to end: planning the architecture, building frontend and backend systems, connecting commerce and AI tools, launching confidently, and supporting what happens next.</p>
            <div className="facts"><span><strong>3</strong> products shipped</span><span><strong>10+</strong> years experience</span><span><strong>UTC+5:30</strong> remote friendly</span></div>
          </div>
        </div>
        <div className="skill-marquee">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="contact" id="contact">
        <span className="eyebrow">HAVE A PROJECT IN MIND? · REPLY WITHIN 24 HOURS</span>
        <h2>Let’s make something<br/><em>worth using.</em></h2>
        <ProjectInquiry />
        <div className="contact-meta"><a href="mailto:webtechkarthik@gmail.com">webtechkarthik@gmail.com</a><span>Chennai, India · Remote worldwide</span></div>
      </section>

      <footer><span>© {new Date().getFullYear()} Karthick Kumar</span><span>Frontend engineer · Product builder</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
