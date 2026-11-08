/* eslint-disable no-unused-vars */
// REACT
import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

// ASSET
import KalimantanMap from "../../assets/vectors/KalimantanMap";

export default function StoryTelling() {
  const mainContainer = useRef(null);

  // Section 1
  const firstText = splitTextByWord('Setiap napas adalah hak, bukan risiko');

  // Saction 2
  const section2Text1 = splitTextByWord('Berawal dari satu titik');
  const section2Text2 = splitTextByWord('lahan gambut');
  
  
  useGSAP(() => {
    const introTl = gsap.timeline({
      defaults: { ease: "none" }
    });

    introTl
    .to({}, { duration: 0.2 })
    .fromTo(
      ".kalimantan-map",
      { animationDelayS: 1,y: -200, scale: 0.8, clipPath: "ellipse(0% 0% at 50% 50%)", opacity: 0 },
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
          trigger: 'text-section2',
          markers: true,
          pin: true
        } 
    })
    

    gsap.to('.first-text', {
      opacity: 0,
      y: -50,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.first-text',
        start: 'top 40%',
        end: '+=250',
        // markers: true,
        scrub: true,
      }
    });

    // Ngakalin dikit
    gsap.fromTo('.section2-1', 
      {y: 40, x: 40},
      {}
    )
    gsap.fromTo('.section2-2', 
      {y: -140, x: -40},
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
        trigger: '.kalimantan-map',
        start: "top 15%",
        end: "+=3000",
        pin: true, 
        scrub: 1,   
        // markers: true,
      },
    });

    tl.to('.kalimantan-map', {scale: 1.05})
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
      "<0.5"
    );

    const tlSection2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.text-section2',
        start: 'top top',
        end: '+=2500',
        pin: true,
        scrub: 1,
        markers: true,
      }
    });

  }, { scope : mainContainer })
  
  return(
    <>
      <div ref={mainContainer} id="StoryTelling" className="w-full max-w-7xl mx-auto text-zinc-50 py-10 px-4">

      {/* Section 1 */}
      <div className="flex min-h-screen justify-center items-center">
        <div className="kalimantan-map absolute">
            <KalimantanMap/>
        </div>
        <div className="absolute font-notoEmoji max-w-2xl flex min-h-screen justify-center items-center text-center text-[50px] [word-spacing:2rem] font-bold">
          <h1 className="first-text flex  flex-wrap justify-center items-center">
            {firstText.map((word) => (
              <span className="word mx-6">{word}</span>
            ))}
          </h1>
        </div>

        <div className="text-section2 top-0 absolute flex flex-col justify-between mx-auto h-dvh w-full max-w-3xl pt-28 text-xl font-bold font-notoSans">
        <h1 className="section2-1 flex justify-start items-start">
          {section2Text1.map((word) => (
              <span className="section2word mx-1">{word}</span>
            ))}
        </h1>
        <h1 className="section2-2 flex justify-end items-end">
          {section2Text2.map((word) => (
              <span className="section2word mx-1">{word}</span>
            ))}
        </h1>
      </div>
      </div>

      {/* Section 2 */}
      

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