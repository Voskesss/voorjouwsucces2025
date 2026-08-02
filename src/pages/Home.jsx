import React from 'react';
import { Link } from 'react-router-dom';
import Faq from '../components/Faq';
import Voorbeelden from '../components/Voorbeelden';
import Icon from '../components/Icons';

const problemChips = [
  { label: 'Systemen werken niet samen', to: '/oplossingen#koppelen' },
  { label: 'Te veel handwerk', to: '/oplossingen#automatiseren' },
  { label: 'Geen overzicht', to: '/oplossingen#inzicht' },
  { label: 'Wat moet ik met AI?', to: '/oplossingen#ai' },
  { label: 'Website is verouderd', to: '/oplossingen#website' },
  { label: 'Niemand om mee te sparren', to: '/oplossingen#sparren' },
];

const rollen = [
  {
    icon: 'chat',
    title: 'Sparringpartner',
    sub: 'Eerst de goede vraag',
    text: 'Meedenken met directie, management en teams. Wat is realistisch, wat is hype, wat levert het op. Ik ben eerlijk over wat niet gaat werken.',
  },
  {
    icon: 'bulb',
    title: 'Innovator',
    sub: 'Kansen die er nog niet liggen',
    text: 'Nieuwe diensten, nieuwe manieren van werken, nieuwe proposities richting klanten. Van idee naar prototype in dagen, niet in maanden.',
  },
  {
    icon: 'sparkles',
    title: 'AI Engineer',
    sub: 'Wat zetten we waarvoor in',
    text: 'Bepalen welke techniek waarvoor geschikt is en hoe je die veilig opzet. Modellen, prompts, datastructuren, hosting, privacy en beveiliging.',
  },
  {
    icon: 'grid',
    title: 'Toolbouwer',
    sub: 'Volgende week werkend',
    text: 'Zelf kleine applicaties bouwen die één concreet probleem oplossen. Geen IT-traject van een jaar, maar iets dat je meteen gebruikt.',
  },
  {
    icon: 'link',
    title: 'Bruggenbouwer',
    sub: 'Tussen systemen en tussen mensen',
    text: "Applicaties aan elkaar knopen via API's. En net zo belangrijk: de brug tussen mensen en software, zodat het ook echt gebruikt wordt.",
  },
  {
    icon: 'workflow',
    title: 'Workflowbouwer',
    sub: 'Van handwerk naar stroom',
    text: 'Processen doorlichten en automatiseren, met de mens op de plek waar die het verschil maakt in plaats van waar het toevallig zo gegroeid is.',
  },
  {
    icon: 'bot',
    title: 'Agentbouwer',
    sub: 'Werk dat zichzelf oppakt',
    text: 'AI-agents die zelfstandig taken uitvoeren binnen kaders die jij bepaalt. Van intake tot opvolging, van vraag tot antwoord.',
  },
];

const stack = [
  {
    title: 'Toepassingen',
    text: 'Chatbots en assistenten · Generatieve AI voor tekst en beeld · Korte video · Agents · Kennisontsluiting met RAG',
  },
  {
    title: 'Data en kennis',
    text: 'Vector databases · PostgreSQL en Neon · Supabase · Datastructuren voor AI-zoekopdrachten',
  },
  {
    title: 'Bouwen',
    text: "Python · React en Next.js · Electron · API-koppelingen tussen systemen · PHP en WordPress",
  },
  {
    title: 'Platform',
    text: 'Azure · Vercel · Clerk en Kinde voor authenticatie · Stripe · WhatsApp Business',
  },
  {
    title: 'Randvoorwaarden',
    text: 'Beveiliging en toegangsbeheer · Privacy en AVG · Code signing · Hosting en deployment',
  },
  {
    title: 'Vindbaarheid',
    text: 'SEO · Structured data · llms.txt en MCP, zodat AI je organisatie ook vindt',
  },
];

function Home() {
  return (
    <div className="home-page">

      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <span className="eyebrow">Jos Klijnhout · Oosterbeek</span>
            <h1>
              AI in de praktijk,<br />
              <span className="accent">niet in een presentatie.</span>
            </h1>
            <p className="hero-lede">
              Oplossingen bedenken is mijn ding, mensen helpen is mijn drive.
              Bijna elk bedrijf weet inmiddels dat er iets met AI moet – waar
              je begint en wie het gaat bouwen, weet vrijwel niemand. Daar
              help ik.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Vertel wat er knelt</Link>
              <Link to="/oplossingen" className="btn btn-ghost">Bekijk wat ik oplos</Link>
            </div>
            <div className="chip-row" aria-label="Veelvoorkomende problemen">
              {problemChips.map((chip) => (
                <Link key={chip.label} to={chip.to} className="chip">
                  {chip.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame photo-frame--hero">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
                alt="In gesprek aan tafel over wat er beter kan in het bedrijf"
                loading="eager"
              />
            </div>
            <div className="float-chat" aria-hidden="true">
              <div className="bubble bubble--them">
                <span className="who">Ondernemer</span>
                Onze systemen praten niet met elkaar…
              </div>
              <div className="bubble bubble--us">
                <span className="who">Jos</span>
                Herkenbaar – en oplosbaar. Zal ik laten zien hoe?
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="narrative">
            <span className="eyebrow">Ik werk andersom</span>
            <h2>Eerst het werk, dan pas de techniek</h2>
            <p>
              Bij de meeste organisaties loopt AI vast op dezelfde plek: een
              pilot, een chatbot, een rapport – en daarna gebeurt er niets meer.
            </p>
            <p>
              Ik werk andersom. Eerst het werk zelf: waar loopt het vast, wat
              kost onnodig tijd, waar zit de irritatie. Daarna pas de techniek.
              <strong> En dan bouw ik het.</strong> Ik ben geen adviseur die een
              rapport achterlaat en geen developer die alleen code oplevert. Ik
              zit ertussenin – en dat is precies waar het misgaat bij de meeste
              organisaties.
            </p>
            <p>
              Waar het uiteindelijk om draait is simpel: samen kijken waar tijd
              en geld te besparen valt. Dat is voor de meeste ondernemers de
              kern, en daar beginnen we dan ook.
            </p>
          </div>

          <div className="grid-2 outcome-grid">
            <div className="card outcome-card">
              <h3>Tijd terug</h3>
              <p>Repetitief werk dat zichzelf gaat doen</p>
            </div>
            <div className="card outcome-card">
              <h3>Kennis ontsloten</h3>
              <p>Uit mappen en hoofden, naar de werkvloer</p>
            </div>
            <div className="card outcome-card">
              <h3>Systemen die praten</h3>
              <p>Data die stroomt in plaats van stilstaat</p>
            </div>
            <div className="card outcome-card">
              <h3>Mensen die meegaan</h3>
              <p>Omdat het aansluit op hun eigen werk</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Zeven rollen</span>
            <h2>Eén duizendpoot, zeven rollen</h2>
            <p>
              Meestal een combinatie, afhankelijk van waar jouw organisatie staat.
            </p>
          </div>
          <div className="grid-3">
            {rollen.map((r) => (
              <div className="card cap-card" key={r.title}>
                <span className="icon-chip"><Icon name={r.icon} /></span>
                <h3>{r.title}</h3>
                <p className="cap-sub">{r.sub}</p>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Herken je dit?</span>
            <h2>Dit los ik op</h2>
            <p>Klik op wat jij herkent en zie meteen hoe we het aanpakken.</p>
          </div>

          <div className="grid-3">
            <Link to="/oplossingen#koppelen" className="card problem-card">
              <h3>"Onze systemen praten niet met elkaar"</h3>
              <p>Alles dubbel invoeren, fouten overal.</p>
              <span className="solves">Ik laat je systemen samenwerken →</span>
            </Link>
            <Link to="/oplossingen#automatiseren" className="card problem-card">
              <h3>"We doen zóveel met de hand"</h3>
              <p>Offertes, facturen, mailtjes – elke week hetzelfde.</p>
              <span className="solves">Ik laat dat werk vanzelf lopen →</span>
            </Link>
            <Link to="/oplossingen#ai" className="card problem-card">
              <h3>"Iedereen roept AI, maar wat heb ík eraan?"</h3>
              <p>Kansen zat, maar wat is nuttig en wat is hype?</p>
              <span className="solves">Ik laat zien wat AI jou oplevert →</span>
            </Link>
            <Link to="/oplossingen#inzicht" className="card problem-card">
              <h3>"We beslissen op onderbuikgevoel"</h3>
              <p>De cijfers zitten in je systemen, maar niemand ziet ze.</p>
              <span className="solves">Ik maak je cijfers zichtbaar →</span>
            </Link>
            <Link to="/oplossingen#website" className="card problem-card">
              <h3>"Onze website is verouderd"</h3>
              <p>Klanten zoeken via Google én AI – en vinden jou niet.</p>
              <span className="solves">Ik maak je weer vindbaar →</span>
            </Link>
            <Link to="/oplossingen#sparren" className="card problem-card">
              <h3>"Ik mis iemand die meedenkt"</h3>
              <p>Digitaal moet er iets gebeuren, maar wat eerst?</p>
              <span className="solves">Ik denk en werk met je mee →</span>
            </Link>
          </div>
        </div>
      </section>

      <Voorbeelden />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Waar ik mee werk</span>
            <h2>Niet om indruk te maken, maar zodat je weet wat er kan</h2>
          </div>
          <div className="grid-3">
            {stack.map((s) => (
              <div className="card tech-card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft about-band">
        <div className="container">
          <div className="about-text">
            <span className="eyebrow">Wie ik ben</span>
            <h2>Even zonder cv</h2>
            <p>
              Ik ben Jos, en woon in Oosterbeek met mijn vrouw en twee kinderen
              van 16 en 14. Ik weet hoe een bedrijf van binnenuit werkt, van
              strategie tot werkvloer, omdat ik aan beide kanten heb gestaan.
            </p>
            <p>
              Ik ben nieuwsgierig, direct en niet te beroerd om zelf de mouwen
              op te stropen. <strong>Als ik ergens in duik, laat ik het niet
              los tot het werkt.</strong>
            </p>
            <p className="signature">— Jos</p>
            <Link to="/over-mij" className="read-more">Lees mijn hele verhaal →</Link>
          </div>
          <div className="about-side">
            <div className="facts-grid">
              <div className="card fact-card">
                <span className="fact-num">20 jr</span>
                <p>Ondernemer. Met twee compagnons een landelijke facilitaire organisatie opgebouwd van 14 naar 350 medewerkers. In 2018 verkocht.</p>
              </div>
              <div className="card fact-card">
                <span className="fact-num">30 jr</span>
                <p>Techniek als rode draad. Vanaf de begintijd van internet bezig met websites, SEO en programmeren. In 2007 zelf een webbased urenregistratie gebouwd.</p>
              </div>
              <div className="card fact-card">
                <span className="fact-num">5 jr</span>
                <p>AI, dagelijks. Drie eigen platforms live: The Last Farewell, FacilityFinder en AiBackoffice. Zelf bedacht, zelf gebouwd, zelf uitgerold.</p>
              </div>
              <div className="card fact-card">
                <span className="fact-num">+</span>
                <p>Coachopleiding. Omdat techniek pas werkt als mensen meegaan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <section className="cta-band">
        <div className="container">
          <h2>Waar loop jij tegenaan?</h2>
          <p>
            Mail me wat er knelt – in je eigen woorden, het hoeft geen net
            verhaal te zijn. Je krijgt altijd minstens één idee waar je meteen
            wat aan hebt.
          </p>
          <Link to="/contact" className="btn btn-light">Plan een gratis kennismaking</Link>
          <p className="cta-note">
            Geen verkooppraatje. Als ik denk dat je iets niet nodig hebt, zeg ik dat gewoon.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;
