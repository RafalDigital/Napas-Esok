// REACT
import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Info } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Impact() {
    const impactRef = useRef(null)

    useGSAP(() => {
        gsap.from(".impact-items", {
            y: 20,
            opacity: 0,
            duration: 0.2,
            stagger: 0.1,
            scrollTrigger: {
                trigger: impactRef.current,
                start: 'top 50%',
                end: 'bottom top',
                toggleActions: "play none none none"
            }
        })
    }, {scope : impactRef})

    return(
        <>
            <div ref={impactRef} className="w-full mx-auto max-w-7xl flex flex-col gap-4 md:px-[5.2rem] px-4 pb-10">
                <h1 className="impact-items font-plusJktSans text-4xl max-md:text-3xl font-bold text-center">Realita yang terjadi</h1>
                <div className="grid md:grid-cols-3 max-md:grid-rows-3 gap-6 py-2 mt-6">
                    {/* Content 1 */}
                    <div className="impact-items max-md:p-6 p-8 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3">
                        <div className="flex flex-col gap-0">
                            <span className="bg-red-500/20 rounded-2xl py-1 px-3 font-bold text-xs text-red-200 font-plusJktSans w-fit mb-4">2018 - 2026</span>
                            <h1 className="text-5xl max-md:text-3xl font-plusJktSans font-bold text-red-500">4,79 </h1>
                            <span className="text-xl font-plusJktSans">Juta Hektar</span>
                        </div>
                        <h1 className="font-plusJktSans text-2xl font-medium">Lahan Terbakar</h1>
                        <p className="font-inter text-md text-neutral-400">Hampir setara dengan luas daratan provinsi jawa timur.</p>
                        <p className="font-inter text-xs text-red-400/40 flex gap-2"><Info size={16}/> KLHK · SiPongi</p>
                    </div>
                    
                    {/* Content 1 */}
                    <div className="impact-items max-md:p-6 p-8 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3">
                        <div className="flex flex-col gap-0">
                            <span className="bg-red-500/20 rounded-2xl py-1 px-3 font-bold text-xs text-red-200 font-plusJktSans w-fit mb-4">2026</span>
                            <h1 className="text-5xl max-md:text-3xl font-plusJktSans font-bold text-red-500">401.586</h1>
                            <span className="text-xl font-plusJktSans">Kasus</span>
                        </div>
                        <h1 className="font-plusJktSans text-2xl font-medium">ISPA Tercatat</h1>
                        <p className="font-inter text-md text-neutral-400">Lonjakan kasus ISPA akibat paparan kabut asap karhutla.</p>
                        <p className="font-inter text-xs text-red-400/40 flex gap-2"><Info size={16}/> Kemenkes</p>
                    </div>

                    {/* Content 1 */}
                    <div className="impact-items max-md:p-6 p-8 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3">
                        <div className="flex flex-col gap-0">
                            <span className="bg-red-500/20 rounded-2xl py-1 px-3 font-bold text-xs text-red-200 font-plusJktSans w-fit mb-4">2018 - 2026</span>
                            <h1 className="text-5xl max-md:text-3xl font-plusJktSans font-bold text-red-500">1,23 </h1>
                            <span className="text-xl font-plusJktSans">Miliar Ton CO₂</span>
                        </div>
                        <h1 className="font-plusJktSans text-2xl font-medium">Terlepas ke Udara</h1>
                        <p className="font-inter text-md text-neutral-400">Kebakaran lahan gambut melepaskan emisi gas rumah kaca secara masif.</p>
                        <p className="font-inter text-xs text-red-400/40 flex gap-2"><Info size={16}/> KLHK · SiPongi</p>
                    </div>
                </div>
            </div>
        </>
    )
}