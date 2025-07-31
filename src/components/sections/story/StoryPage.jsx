"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'; // Next.js Image komponens az optimalizált képekhez
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // ScrollTrigger plugin importálása

gsap.registerPlugin(ScrollTrigger); // Regisztráljuk a ScrollTrigger plugint

const timelineEvents = [
  {
    year: '1995',
    title: 'A Kezdetek',
    image: 'https://via.placeholder.com/300x200?text=1995', // Helyettesítsd valós képekkel
    description: 'Egy kis garázscégként indultunk, hatalmas álmokkal és rengeteg szenvedéllyel. Az első termékünk egy innovatív megoldás volt, ami forradalmasította a piacot.'
  },
  {
    year: '2005',
    title: 'Első Irodánk',
    image: 'https://via.placeholder.com/300x200?text=2005',
    description: 'A növekedésünk felgyorsult, így elköltöztünk az első igazi irodánkba. Ekkor már 10 fős csapatunk volt, és elkezdtünk nemzetközi partnereket keresni.'
  },
  {
    year: '2015',
    title: 'Nemzetközi Terjeszkedés',
    image: 'https://via.placeholder.com/300x200?text=2015',
    description: 'Beléptünk az európai piacra, és megnyitottuk első külföldi képviseletünket. A termékeinket már világszerte használták, ami óriási mérföldkő volt számunkra.'
  },
  {
    year: '2020',
    title: 'Digitális Átállás',
    image: 'https://via.placeholder.com/300x200?text=2020',
    description: 'Teljesen digitalizáltuk működésünket, bevezetve az online platformokat és a távoli munkavégzést. Ez biztosította a rugalmasságot és a folyamatos fejlődést.'
  },
  {
    year: '2025',
    title: 'A Jelen és a Jövő',
    image: 'https://via.placeholder.com/300x200?text=2025',
    description: 'Ma már piacvezetők vagyunk a szektorban, folyamatosan kutatjuk az új technológiákat és bővítjük szolgáltatásainkat. Célunk a fenntartható növekedés és az innováció.'
  },
  // További történeti elemek adhatók hozzá
];

const TimelineScroll = () => {
  const sectionRef = useRef(null); // A teljes függőleges szekció, ami görgetéskor aktiválódik
  const timelineRef = useRef(null); // A vízszintesen görgethető konténer
  const proxy = useRef({ x: 0 }); // Proxy objektum a GSAP animációhoz

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const timelineContainer = timelineRef.current;
    // A teljes szélesség, amit görgetni kell (tartalom szélessége - viewport szélessége)
    const scrollWidth = timelineContainer.scrollWidth - timelineContainer.clientWidth;

    // A ScrollTrigger beállítása
    ScrollTrigger.create({
      trigger: sectionRef.current, // Amikor ez a szekció belép a viewportba
      pin: true, // Beragasztja a szekciót a képernyő tetejére, amíg a vízszintes görgetés tart
      start: "top top", // Amikor a szekció teteje eléri a viewport tetejét
      end: () => `+=${scrollWidth}`, // A görgetés addig tart, amíg a vízszintes tartalom végére nem érünk
      scrub: 1, // Simán követi a görgetést (1 másodperc késleltetés a simább érzésért)
      onUpdate: self => {
        // A proxy.x értékét frissítjük a görgetés progressziója alapján
        proxy.current.x = self.progress * scrollWidth;
        // Ezt az értéket használva mozgatjuk a vízszintes konténert
        timelineContainer.scrollLeft = proxy.current.x;
      }
    });

    // Ha a felhasználó manuálisan görgetné a vízszintes konténert, szinkronizáljuk a proxy.x-et
    // Ezzel elkerüljük, hogy a görgetés "ugráljon"
    const onScroll = () => {
      proxy.current.x = timelineContainer.scrollLeft;
    };
    timelineContainer.addEventListener('scroll', onScroll);

    return () => {
      // Cleanup a komponens lecsatolásakor
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      timelineContainer.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    // A teljes magasság, amit görgetni kell, hogy a vízszintes görgetés végig fusson.
    // A 200vh-t a tartalom szélességéhez kell igazítani, ha a tartalom szélesebb,
    // akkor nagyobb 'hosszúságú' függőleges görgetést kell adni.
    // Az 1.5 a görgetési tartomány "sűrűségét" adja meg.
    // A `scrollWidth` hozzáadása biztosítja, hogy a pinning pontosan addig tartson, amíg a görgetés véget ér.
    <section ref={sectionRef} style={{ height: `calc(100vh + ${timelineEvents.length * 300}px)` }} className="position-relative d-flex align-items-center justify-content-center bg-light">
      {/* Ez a div lesz a sticky eleme, ami a képernyőn marad a görgetés alatt */}
      <div className="timeline-scroll-wrapper position-sticky top-0 d-flex flex-nowrap align-items-center">
        <div ref={timelineRef} className="timeline-content-container">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item card shadow-sm border-0">
              <Image
                src={event.image}
                alt={event.title}
                width={300} // A képek fix szélessége
                height={200} // A képek fix magassága
                className="card-img-top"
                priority={index < 3} // Az első néhány kép prioritással betöltése
              />
              <div className="card-body">
                <h3 className="card-title h5">{event.year} - {event.title}</h3>
                <p className="card-text text-muted">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineScroll;