import React from 'react';

function Ervaringen() {
  return (
    <div className="ervaringen-page">
      <div className="decorative-flower-3 animate-float" style={{top: '120px', right: '10%'}}></div>
      <div className="decorative-heart-wood" style={{bottom: '20%', left: '5%'}}></div>
      <div className="decorative-water" style={{bottom: '10%', right: '8%'}}></div>

      <section className="page-header">
        <div className="container">
          <h1>Ervaringen van cliënten</h1>
          <p>Wat anderen zeggen over hun traject bij Praktijk basSIS</p>
        </div>
      </section>

      <section className="testimonials-full-section">
        <div className="container">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Bij jou voel ik me veilig en voel en weet ik dat het geen zin heeft mijn maskers te dragen, omdat je er toch wel door heen kijkt. Hierdoor ontstaat er een soort van rust, en vertrouwen waardoor ik mijn angst, boosheid en pijn aan durf te kijken."</p>
                <div className="testimonial-author">- Een cliënt</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Siska is een warme, zachte vrouw, die niet oordeelt, waardoor ik me open durf te stellen."</p>
                <div className="testimonial-author">- Esther</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Ik heb me nog nooit zo begrepen gevoeld. Dat doet veel. Ik was niet voorbereid op zoveel begrip. Jij durft duidelijk te zijn en daardoor voel ik me gezien."</p>
                <div className="testimonial-author">- Een cliënt</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"De inzichten die ik kreeg van Siska over mijzelf dat was best heftig af en toe maar het heeft mij wel de ogen open gedaan. Siska heeft heel vaak gezegd dat ik het zelf doe maar ik blijf er toch bij zonder jou Siska had ik dit niet kunnen doen. Het is voor mij een ervaring die ik nodig had om tot mijzelf te komen. Siska is een warme vrouw met altijd een glimlach op haar gezicht."</p>
                <div className="testimonial-author">- Gerrit</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Mijn sessie bij jou was voor mij een grote verrassing. De rust en lichtheid die jij uitstraalt, de manier van benaderen, met zoveel respect en uitnodigend, maakte dat ik bij verdriet uitkwam wat al heel lang in de wacht stond. Het voelde enorm bevrijdend en openend en geeft me handvatten om verder mee te gaan. De liefdevolle en precieze vragen raakten mij diep. Ik merk dat jij zo voelend reageert in het moment, met dat wat dan klopt. Daardoor durfde ik te vertrouwen en mezelf te laten zien, omdat het veilig voelt. Jij hebt me met heel veel liefde door veel pijn heen geloodst en gaf daar ook humor en lichtheid bij. Dat maakte het zo heel. En zo bijzonder! Dankjewel Siska!"</p>
                <div className="testimonial-author">- Marjon Bruijn</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Siska heeft voor mij veel betekend. Ik voelde me gelijk op mijn gemak waardoor het heel makkelijk praat en ik mij makkelijker open kon stellen. Het gevoel wat ik krijg als ik aan Siska en de therapiesessies denk, is vertrouwen en rust. Die twee vind ik ook gelijk het meest belangrijk. Kortom ik zou haar aanraden."</p>
                <div className="testimonial-author">- Esther</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Dichter bij mezelf, inzicht in mijn patronen en hoe ik die kan doorbreken door te omarmen en te voelen. Dichter bij jezelf door je te realiseren dat je herkend wanneer je in je hoofd zit of dat je het echt voelt. Aandacht geven aan onderDelen die van mij zijn maar te weinig aandacht hebben gekregen. Jezelf geruststellen. De reis met Siska kwam voor mij op het juiste moment, ondanks dat ik al een eind op weg was, voor mijn gevoel dan, de weg naar bewustwording en echt voelen waar het 'leven' om draait. Proberen afstand te doen van angsten en onzekerheden die, verdere groei in de weg staan."</p>
                <div className="testimonial-author">- J</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ook jouw verhaal delen?</h2>
            <p>Heb je een ervaring die je wilt delen? Ik hoor graag van je.</p>
            <a href="mailto:info@praktijkbasis.nl" className="cta-button">Stuur je ervaring</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ervaringen;
