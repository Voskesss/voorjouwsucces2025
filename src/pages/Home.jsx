import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">

      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <span className="eyebrow">Digitale oplossingen voor bedrijven, klein én groot</span>
            <h1>
              Jouw probleem eerst.<br />
              <span className="accent">De techniek volgt.</span>
            </h1>
            <p className="hero-lede">
              Oplossingen bedenken is mijn ding, mensen helpen is mijn drive.
              Ik help bedrijven vooruit in hun digitale omgeving – van slimme
              AI-oplossingen tot systemen die eindelijk met elkaar praten.
              Zonder technisch verhaal, gewoon vanuit jouw vraag.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Vertel je vraagstuk</Link>
              <Link to="/oplossingen" className="btn btn-ghost">Bekijk de oplossingen</Link>
            </div>
            <p className="hero-note">
              Kennismaken is gratis – en je krijgt altijd minstens één idee waar je meteen wat aan hebt.
            </p>
          </div>

          <div className="chat-card" aria-hidden="true">
            <span className="chat-title">Zo begint het meestal</span>
            <div className="bubble bubble--them">
              <span className="who">Ondernemer</span>
              Onze systemen praten niet met elkaar. We typen alles twee keer over
              en niemand heeft het complete overzicht…
            </div>
            <div className="bubble bubble--us">
              <span className="who">Jos</span>
              Herkenbaar – en oplosbaar. We laten je systemen samenwerken,
              zonder alles te hoeven vervangen. Zal ik laten zien hoe?
            </div>
            <div className="bubble bubble--them">
              <span className="who">Ondernemer</span>
              Graag. Maar ik ben geen techneut hè.
            </div>
            <div className="bubble bubble--us">
              <span className="who">Jos</span>
              Hoeft ook niet. Dat ben ik voor jou. 😉
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Herken je dit?</span>
            <h2>Elke oplossing begint bij een vraag</h2>
            <p>
              Ik denk niet vanuit producten of techniek, maar vanuit wat er bij
              jou knelt. Dit zijn de vragen waarmee bedrijven bij me aankloppen.
            </p>
          </div>

          <div className="grid-3">
            <div className="card problem-card">
              <h3>"Onze systemen praten niet met elkaar"</h3>
              <p>
                Je boekhoudpakket, planning, webshop en CRM zijn allemaal eilandjes.
                Gegevens worden dubbel ingevoerd en fouten sluipen erin.
              </p>
              <span className="solves">→ Koppelingen die je systemen laten samenwerken</span>
            </div>
            <div className="card problem-card">
              <h3>"We doen zóveel werk dubbel of met de hand"</h3>
              <p>
                Offertes, facturen, planningen, mailtjes: elke week dezelfde
                handelingen die stiekem uren opslokken.
              </p>
              <span className="solves">→ Automatisering en agents die werk uit handen nemen</span>
            </div>
            <div className="card problem-card">
              <h3>"Iedereen roept AI, maar wat heb ík eraan?"</h3>
              <p>
                Je voelt dat er kansen liggen, maar je hebt geen idee wat voor
                jouw bedrijf nuttig is – en wat gewoon hype is.
              </p>
              <span className="solves">→ AI-oplossingen die bij jouw bedrijf passen</span>
            </div>
            <div className="card problem-card">
              <h3>"Er zit van alles in onze systemen, maar we zien niks"</h3>
              <p>
                De informatie is er wel, maar niemand kan er iets mee.
                Beslissingen neem je op gevoel in plaats van op feiten.
              </p>
              <span className="solves">→ Systemen uitlezen en vertalen naar overzicht</span>
            </div>
            <div className="card problem-card">
              <h3>"Onze digitale omgeving is verouderd"</h3>
              <p>
                De website, het klantportaal of de interne tools stammen uit een
                andere tijd. Het remt je mensen én je uitstraling.
              </p>
              <span className="solves">→ Bestaand verbeteren of nieuw bouwen – wat past</span>
            </div>
            <div className="card problem-card">
              <h3>"Klanten verwachten sneller antwoord dan we aankunnen"</h3>
              <p>
                Dezelfde vragen, elke dag opnieuw. Jij of je team beantwoordt ze
                braaf – ook 's avonds en in het weekend.
              </p>
              <span className="solves">→ Slimme assistenten die antwoorden zoals jij dat zou doen</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Werkwijze</span>
            <h2>Van vraagstuk naar werkende oplossing</h2>
            <p>
              Jij hoeft geen verstand van techniek te hebben. Jij kent je bedrijf,
              ik bedenk en bouw de oplossing.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step-num">1</span>
              <h3>Jouw vraagstuk op tafel</h3>
              <p>
                We beginnen bij jouw verhaal: wat knelt er, wat kost tijd of geld,
                waar wil je naartoe? Gratis en vrijblijvend.
              </p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>Oplossing in gewone taal</h3>
              <p>
                Ik bedenk een oplossing die past bij jouw bedrijf en leg precies
                uit wat we gaan doen en wat het oplevert. Geen jargon.
              </p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>Bouwen en koppelen</h3>
              <p>
                Ik bouw, koppel en test – in kleine stappen met snel resultaat.
                De techniek gebeurt achter de schermen.
              </p>
            </div>
            <div className="step">
              <span className="step-num">4</span>
              <h3>Jij verder, met grip</h3>
              <p>
                Jij en je team snappen wat er draait en kunnen er zelf mee verder.
                Geen afhankelijkheid, wel een aanspreekpunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Wat ik voor je kan doen</span>
            <h2>Alles voor jouw digitale omgeving</h2>
            <p>
              Bestaand verbeteren of nieuw bouwen – het middel volgt uit jouw vraag,
              nooit andersom.
            </p>
          </div>

          <div className="grid-3">
            <div className="card cap-card">
              <div className="cap-icon">💡</div>
              <h3>AI-oplossingen bedenken</h3>
              <p>Samen ontdekken waar AI jouw bedrijf écht helpt – en dat vertalen naar iets wat morgen werkt.</p>
            </div>
            <div className="card cap-card">
              <div className="cap-icon">🔗</div>
              <h3>Systemen koppelen</h3>
              <p>Via slimme koppelingen (API's) laat ik je pakketten samenwerken, zodat gegevens vanzelf op de juiste plek komen.</p>
            </div>
            <div className="card cap-card">
              <div className="cap-icon">📊</div>
              <h3>Systemen uitlezen</h3>
              <p>De informatie die al in je systemen zit, zichtbaar maken: overzichten en inzichten waar je op kunt sturen.</p>
            </div>
            <div className="card cap-card">
              <div className="cap-icon">🤖</div>
              <h3>Agents bouwen</h3>
              <p>Digitale hulpjes die zelfstandig taken uitvoeren: vragen beantwoorden, gegevens verwerken, acties uitzetten.</p>
            </div>
            <div className="card cap-card">
              <div className="cap-icon">🌐</div>
              <h3>Digitale omgeving vernieuwen</h3>
              <p>Van website tot klantportaal: bestaand moderniseren of nieuw neerzetten, mét vindbaarheid in het AI-tijdperk.</p>
            </div>
            <div className="card cap-card">
              <div className="cap-icon">🧭</div>
              <h3>Meedenken en vooruitkijken</h3>
              <p>Een sparringpartner met twintig jaar ondernemerservaring, die eerlijk zegt wat wél en niet slim is.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-band">
        <div className="container">
          <div className="about-text">
            <span className="eyebrow">Wie je aan tafel krijgt</span>
            <h2>Ik ben Jos. Oplossingen bedenken is mijn vak.</h2>
            <p>
              Ruim twintig jaar ondernemer, en al net zo lang de persoon die mensen
              bellen als er iets opgelost moet worden. Ik ken de praktijk van
              binnenuit: personeel, klanten, processen – en aan het eind van de
              maand moet het kloppen.
            </p>
            <p>
              De afgelopen jaren heb ik me volledig gestort op wat er nu mogelijk
              is met AI en slimme koppelingen. Niet als hype, maar als gereedschap
              om échte problemen op te lossen.
            </p>
            <p>
              <strong>Mijn belofte:</strong> we hebben het over jouw vraagstuk en
              de oplossing. Het technische werk doe ik achter de schermen.
            </p>
            <Link to="/over-mij" className="read-more">Lees mijn verhaal →</Link>
          </div>
          <ul className="value-list">
            <li>
              <span className="v-icon">💡</span>
              <div>
                <h3>Oplossingen bedenken is mijn ding</h3>
                <p>Een probleem horen en de oplossing zien – dat is wat ik al mijn hele leven doe.</p>
              </div>
            </li>
            <li>
              <span className="v-icon">❤️</span>
              <div>
                <h3>Mensen helpen is mijn drive</h3>
                <p>Het gaat om jou, je team en je klanten. Techniek is alleen het gereedschap.</p>
              </div>
            </li>
            <li>
              <span className="v-icon">🗣️</span>
              <div>
                <h3>Gewone taal, eerlijk advies</h3>
                <p>Als iets niet slim of niet nodig is, zeg ik dat gewoon.</p>
              </div>
            </li>
            <li>
              <span className="v-icon">🪜</span>
              <div>
                <h3>Behapbare stappen</h3>
                <p>Klein beginnen, snel resultaat, in jouw tempo verder bouwen.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Waar loop jij tegenaan?</h2>
          <p>
            Vertel me je vraagstuk – in je eigen woorden, het hoeft geen net
            verhaal te zijn. Ik luister, denk mee en je krijgt altijd minstens
            één idee waar je meteen wat aan hebt.
          </p>
          <Link to="/contact" className="btn btn-light">Plan een gratis kennismaking</Link>
          <p className="cta-note">
            Geen verkooppraatje: als ik denk dat je iets niet nodig hebt, zeg ik dat gewoon.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;
