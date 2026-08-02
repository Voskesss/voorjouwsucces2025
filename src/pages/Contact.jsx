import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Vertel me je vraagstuk</h1>
          <p>
            Een kennismakingsgesprek is gratis en vrijblijvend – en je krijgt
            altijd minstens één idee waar je meteen wat aan hebt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="card">
              <div className="info-item">
                <h3>E-mail</h3>
                <p><a href="mailto:josklijnhout@hotmail.com">josklijnhout@hotmail.com</a></p>
                <p className="note">Ik reageer binnen twee werkdagen</p>
              </div>
              <div className="info-item">
                <h3>Waar we afspreken</h3>
                <p>
                  Bij jou op locatie of online – wat jij prettig vindt.
                  Ik werk voor bedrijven in heel Nederland.
                </p>
              </div>
              <div className="info-item">
                <h3>Online</h3>
                <p>
                  <a href="https://aibackoffice.nl" target="_blank" rel="noreferrer">aibackoffice.nl</a>
                  {' · '}
                  <a href="https://linkedin.com/in/josklijnhout" target="_blank" rel="noreferrer">linkedin.com/in/josklijnhout</a>
                </p>
              </div>
              <div className="info-item">
                <h3>Voor wie</h3>
                <p>
                  Bedrijven, klein en groot, die vooruit willen in hun digitale
                  omgeving – en daar een meedenker bij willen in plaats van een
                  technisch verhaal.
                </p>
              </div>
            </div>

            <div className="card contact-card-cta">
              <h3>Zo begint het</h3>
              <p>
                Stuur me een mailtje met waar je tegenaan loopt – in je eigen
                woorden, het hoeft geen net verhaal te zijn. Ik lees het, denk
                mee en kom binnen twee werkdagen bij je terug.
              </p>
              <p>
                Handige startvragen: wat kost je nu de meeste tijd of energie?
                Welke systemen werken niet lekker (samen)? En waar wil je met je
                bedrijf naartoe?
              </p>
              <a
                href="mailto:josklijnhout@hotmail.com?subject=Mijn%20vraagstuk%20voor%20Voor%20Jouw%20Succes"
                className="btn btn-primary"
              >
                Mail je vraagstuk
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <h2>Wat kun je verwachten?</h2>
            <p>
              In het kennismakingsgesprek luister ik vooral: wat gaat goed, wat
              knelt, waar wil je naartoe? Ik denk direct met je mee en ben eerlijk
              over wat wél en niet zinvol is voor jouw bedrijf. Daarna beslis jij –
              geen verkooppraatje, geen verplichtingen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
