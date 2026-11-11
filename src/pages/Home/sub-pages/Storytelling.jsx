/* eslint-disable no-unused-vars */
// REACT
import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

// ASSET
import KalimantanMap from "../../../assets/vectors/KalimantanMap";
import { Info } from "lucide-react";
import { Stethoscope } from "lucide-react";
import { School } from "lucide-react";
import { Plane } from "lucide-react";
import { PawPrint } from "lucide-react";
import { MoveRight } from "lucide-react";

export default function StoryTelling() {
  const mainContainer = useRef(null);

  // Section 1
  const firstText = splitTextByWord('Setiap napas adalah hak, bukan risiko');

  // Saction 2
  const section2Text1 = splitTextByWord('Berawal dari satu titik');
  const section2Text2 = splitTextByWord('lahan gambut');

  // Section 3
  const section3Text1 = splitTextByWord('Bagaimana kalau kita bisa melihatnya sebelum terlambat?');
  
  
  useGSAP(() => {

    // Responsive GSAP
    const matchMedia = gsap.matchMedia(mainContainer.current)

    matchMedia.add({
      isDesktop: "(min-width: 1024px)",
      isTablet: "(min-width: 576px) and (max-width: 1023px)",
      isMobile: "(max-width: 576px)"
    }, (context) => {
      const { isDesktop, isTablet, isMobile } = context.conditions

      const mapSection2Scale = isDesktop ? 1.005 : isTablet ? 1.001 : 0.85
      const mapSection3Scale = isDesktop ? 0.8 : isTablet ? 0.65 : 0.45
      const mapSection3X = isDesktop ?  -300 : isTablet ? -190 : 0
      const mapSection3Y = isMobile ? -170 : 0
      const mapEndScale = isMobile ? 0.35 : 0.4
      const mapEndY = isMobile ? -190 : -150

    const introTl = gsap.timeline({
      defaults: { ease: "none" }
    });

    introTl
    .to({}, { duration: 0.2 })
    .fromTo(
      ".kalimantan-map",
      { scale: isMobile ? 0.6 : 0.8, clipPath: "ellipse(0% 0% at 50% 50%)", opacity: 0 },
      { clipPath: "ellipse(75% 75% at 50% 50%)", opacity: 1, duration: 1.5 }
    )
    .from(".first-text", {
      scale: 0.8,
      duration: 1.2,
      ease: "back.out(1.4)"
    })
    .fromTo(
      ".word",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out"
      },
      "<0.2"
    )
    .to('.text-section2', {
      scrollTrigger: {
          trigger: '.text-section2',
          pin: true,
          // markers: true,
          end: 'bottom bottom'
        } 
    })
    

    gsap.to('.first-text', {
      opacity: 0,
      y: -300,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.first-text',
        start: '-=200 top',
        end: '+=400',
        // markers: true,
        scrub: true,
      }
    });

    // Ngakalin dikit
    gsap.fromTo('.section2-1', 
      {y: 40, x: isMobile ? 16 : 40},
      {}
    )
    gsap.fromTo('.section2-2', 
      {y: isMobile ? 40 : -140, x: isMobile ? 16 : -40},
      {}
    )
    gsap.fromTo('.text-section5',
      {x: isDesktop ? 100 : 0},
      {}
    )
    gsap.fromTo('.text-section6',
      {y: 180},
      {}
    )
    gsap.fromTo('.section6-1',
      {y: -100},
      {}
    )
    gsap.fromTo('.qta-section',
      {y : -180},
      {}
    )

  //   gsap.fromTo(".first-text", 
  //   {     opacity: 1,}, 
  //   {
  //     // yPercent: -150,
  
  //     scale: 0, y : 20,
  //     scrollTrigger: {
  //       trigger: '.first-text',
  //       start: '-px 40%',
  //       end: '+=80', // Sesuaikan jarak scroll-nya
  //       markers: true,
  //     }
  //   }
  // );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.story-telling-hero',
        start: "top 40px",
        end: "+=4000",
        pin: true, 
        scrub: 1,   
      },
    });

    tl.to('.kalimantan-map', {scale: mapSection2Scale})
      .fromTo(
        ".section2word",
        { opacity: 0, y: 15,},
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
        '+=1'
      )
      .fromTo(
        ".red-dot",
        {opacity: 0, r: 0},
        {opacity: 1, r:4},
        "<"
      )
      .fromTo(
        ".section2word",
        { opacity: 1, y: 0,},
        {
          opacity: 0,
          y: -15,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
      )
      .to(
        ".red-dot",
        {r: 360},
      )
      .to('.kalimantan-map', {scale: mapSection3Scale, x: mapSection3X, y: mapSection3Y})
      // Section 3
      .fromTo(
        ".section3-item",
        { opacity: 0, y: 15,},
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
      )
      .fromTo(
        ".section3-item",
        { opacity: 1, y: 0,},
        {
          opacity: 0,
          y: -15,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
        '+=1'
      )
      // Section 4
      .fromTo(
        ".section4-item",
        { opacity: 0, y: 15,},
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
      )
      .fromTo(
        ".section4-item",
        { opacity: 1, y: 0,},
        {
          opacity: 0,
          y: -15,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
        '+=1'
      )
      // Section 5
      .fromTo(
        ".section5-item",
        { opacity: 0, y: 15,},
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
      )
      .fromTo(
        ".section5-item",
        { opacity: 1, y: 0,},
        {
          opacity: 0,
          y: -15,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
        '+=1'
      )
      .fromTo(
        ".kalimantan-map",
        { },
        {
          scale: mapEndScale, x: 0
        },
      )
      .to('.kalimantan-map', {y: -150})
      .fromTo(
        ".section6word",
        { opacity: 0, y: 15,},
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
      // "<0"
      )
      .fromTo(
        ".qta-item",
        { opacity: 0, y: 15,},
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
      // "<0"
      )

      })

      return () => matchMedia.revert();
  }, { scope : mainContainer })
  
  return(
    <>
      <div ref={mainContainer} id="StoryTelling" className="w-full max-w-7xl mx-auto text-zinc-50 py-10 px-4 mb-32">

      <div className="story-telling-hero">

        {/* Section 1 */}
        <div className="flex min-h-screen justify-center items-center">
          <div className="kalimantan-map absolute">
              <KalimantanMap/>
          </div>
          <div className="absolute font-plusJktSans max-w-4xl flex min-h-screen justify-center items-center text-center">
            <h1 className="first-text flex  flex-wrap justify-center items-center lg:text-[60px] sm:text-2xl text-xl [word-spacing:2rem] font-bold">
              {firstText.map((word, i) => (
                <span key={i} className="word mx-6">{word}</span>
              ))}
            </h1>
          </div>

        {/* Section 2 */}
          <div className="text-section2 top-0 absolute flex flex-col md:justify-between mx-auto h-dvh w-full max-w-3xl pt-28 md:text-xl text-md font-bold font-plusJktSans">
          <h1 className="section2-1 flex justify-start items-start">
            {section2Text1.map((word, i) => (
                <span key={i} className="section2word mx-1">{word}</span>
              ))}
          </h1>
          <h1 className="section2-2 flex md:justify-end md:items-end">
            {section2Text2.map((word, i) => (
                <span key={i} className="section2word mx-1">{word}</span>
              ))}
          </h1>
        </div>

                
        {/* Section 3 */}        
        <div className="text-section3 absolute flex flex-col h-dvh w-full max-w-3xl right-0 items-center justify-center gap-2 font-plusJktSans max-md:pt-40">
          <div className="flex flex-col gap-2 md:items-end items-center">
            <div className="section3-item text-7xl font-bold text-red-500">
              <h1 className="">1,6</h1>
            </div>
            <div className="section3-item text-5xl font-medium">
              <h1>juta hektar</h1>
            </div>
            <div className="section3-item text-lg font-light text-zinc-400">
              <h1>lahan terbakar pada tahun 2019</h1>
            </div>
            <div className="section3-item text-xl font-light text-red-400">
              <h1>Dalam hitungan minggu</h1>
            </div>
            <div className="section3-item flex flex-wrap gap-2 text-zinc-700 max-md:hidden">
              <h1>Sumber: KLHK (SiPongi). Verifikasi angka sebelum dipakai</h1>
              <Info/>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="text-section4 absolute flex flex-col h-dvh w-full max-w-3xl right-0 items-center justify-center gap-2 font-plusJktSans max-md:pt-40">
          <div className="flex flex-col md:items-end items-center">
            <div className="section4-item text-6xl max-md:text-4xl font-semibold mb-2">
              <h1>Api padam.</h1>
            </div>
            <div className="section4-item text-6xl max-md:text-4xl font-semibold text-red-300">
              <h1>Asapnya tidak.</h1>
            </div>
            <div className="section4-item text-lg max-md:text-md text-zinc-400 font-light mt-10">
              <h1>Terbawa angin ke kota kota,</h1>
            </div>
            <div className="section4-item text-lg max-md:text-md text-zinc-400 font-light">
              <h1>Bahkan melintasi batas negara.</h1>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="text-section5 absolute flex flex-col h-dvh w-full max-w-3xl right-0 items-center justify-center gap-2 font-plusJktSans max-md:pt-56">
          <div className="flex flex-col items-end gap-4 max-md:scale-75">
            {/* Item 1 */}
            <div className="section5-item border border-neutral-700 p-3 rounded-2xl bg-neutral-800 flex gap-4 w-full min-w-md">
              <div className="p-4 bg-red-500 rounded-xl">
                <Stethoscope/>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-xl"><h1>Kasus ISPA meningkat</h1></div>
                <p className="text-sm text-zinc-400">Anak-anak dan lansia paling rentan.</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="section5-item border border-neutral-700 p-3 rounded-2xl bg-neutral-800 flex gap-4 w-full">
              <div className="p-4 bg-red-500 rounded-xl">
                <School/>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-xl"><h1>Sekolah diliburkan</h1></div>
                <p className="text-sm text-zinc-400">Pembelajaran terganggu.</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="section5-item border border-neutral-700 p-3 rounded-2xl bg-neutral-800 flex gap-4 w-full">
              <div className="p-4 bg-red-500 rounded-xl">
                <Plane/>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-xl"><h1>Penerbangan tertunda</h1></div>
                <p className="text-sm text-zinc-400">Jarak pandang turun drastis.</p>
              </div>
            </div>
            {/* Item 4 */}
            <div className="section5-item border border-neutral-700 p-3 rounded-2xl bg-neutral-800 flex gap-4 w-full">
              <div className="p-4 bg-red-500 rounded-xl">
                <PawPrint/>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-xl"><h1>Satwa kehilangan rumah</h1></div>
                <p className="text-sm text-zinc-400">Orangutan dan banyak spesies lain.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}
          <div className="text-section6 top-0 absolute flex flex-col gap-28 justify-center items-center mx-auto h-dvh w-full max-w-3xl pt-28">
              <h1 className="section6-1 flex flex-wrap justify-center md:text-4xl text-2xl font-bold font-plusJktSans">
                {section3Text1.map((word, i) => (
                    <span key={i} className="section6word mx-4">{word}</span>
                  ))}
              </h1>
              <div className="qta-section flex max-md:flex-col gap-6 max-md:gap-4 max-md:items-center md:justify-center mx-auto h-fit w-full max-w-7xl font-plusJktSans">
                <button className="qta-item flex gap-2 rounded-2xl h-fit cursor-pointer border border-red-400 bg-red-500 hover:bg-transparent px-4 py-3 min-w-56 md:max-w-56 w-60 justify-center transition-all">Lihat titik api hari ini <MoveRight/></button>
                <button className="qta-item flex gap-2 rounded-2xl h-fit cursor-pointer border border-neutral-600 hover:border-neutral-700 px-4 py-3 min-w-56 md:max-w-56 w-60 justify-center transition-all">Pelajari masalahnya</button>
              </div>
        </div>


          
        </div>

        



      </div>
          
      </div>
    </>
  )
}

function SectionBerawal() {
  return(
    <>
    
    </>
  )
}

function splitTextByWord(text) {
  const splited = text.split(' ');
  return splited;
}