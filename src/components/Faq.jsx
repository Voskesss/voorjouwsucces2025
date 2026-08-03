import React from 'react';

// Vragen en antwoorden staan in één lijst: de zichtbare FAQ en de
// structured data (FAQPage) voor zoekmachines en AI-assistenten blijven
// zo altijd gelijk.
const faqItems = [
  {
    q: 'Wat doe je precies, Jos?',
    a: 'Zie mij als de AI-duizendpoot die jouw bedrijf mist. Systemen die niet samenwerken, te veel handwerk, geen overzicht, een verouderde website of vragen over AI: jij vertelt wat er knelt, ik bedenk en bouw de oplossing. In gewone taal, zonder technisch verhaal.',
  },
  {
    q: 'Zit ik daarna aan je vast?',
    a: 'Nee, juist niet. Ik maak mezelf misbaar: ik help je op weg en zorg dat jij en je team er zelfstandig mee verder kunnen. Wil je liever dat ik betrokken blijf als vaste partner op de achtergrond? Dat kan ook. Jij kiest, niet ik.',
  },
  {
    q: 'Voor wie werk je?',
    a: 'Voor bedrijven in heel Nederland, klein en groot. Van zzp\'er tot MKB-organisatie met tientallen mensen. Op locatie of online, wat jij prettig vindt.',
  },
  {
    q: 'Moet ik verstand hebben van techniek?',
    a: 'Nee, helemaal niet. Dat is precies mijn werk. We hebben het over jouw probleem en de oplossing; de techniek regel ik achter de schermen. Je krijgt alles uitgelegd in gewone taal.',
  },
  {
    q: 'Moet ik nieuwe systemen of software kopen?',
    a: 'Meestal niet. Ik bouw zoveel mogelijk op wat je al hebt: bestaande pakketten laat ik samenwerken via koppelingen. Alleen als iets echt niet meer voldoet, adviseer ik iets anders - en dat zeg ik dan eerlijk.',
  },
  {
    q: 'Wat kost het?',
    a: 'Kennismaken is altijd gratis en vrijblijvend. Daarna maken we vooraf heldere afspraken, zonder verrassingen. We beginnen klein, zodat je snel ziet wat het oplevert voordat je verder investeert.',
  },
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'We werken in kleine stappen met snel resultaat: de eerste verbetering staat er vaak al binnen een paar weken. Geen trajecten van een half jaar, geen dikke rapporten.',
  },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqItems.map((item) => ({
    '@type': 'Question',
    'name': item.q,
    'acceptedAnswer': { '@type': 'Answer', 'text': item.a },
  })),
});

function Faq() {
  return (
    <section className="section faq-section" id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Veelgestelde vragen</span>
          <h2>Gewoon even helder</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
