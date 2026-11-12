// REACT
import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
                    <div className="flex items-end">
                        <h1 className="text-4xl max-md:text-3xl font-plusJktSans font-bold">24.791.463,27 </h1>
                        <span className="text-xl font-plusJktSans">He</span>
                    </div>
                        <h1 className="font-plusJktSans text-2xl font-medium">Tanah Terbakar</h1>
                        <p className="font-inter text-md text-neutral-400">Lihat asap atau api di sekitarmu? Segera hubungi BPBD atau Manggala Agni setempat.</p>
                    </div>
                    {/* Content 1 */}
                    <div className="impact-items max-md:p-6 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3">
                        <span className="text-3xl font-plusJktSans font-bold">261.000.000.000 m2</span>
                        <h1 className="font-plusJktSans text-2xl font-medium">Tanah Terbakar</h1>
                        <p className="font-inter text-md text-neutral-400">Lihat asap atau api di sekitarmu? Segera hubungi BPBD atau Manggala Agni setempat.</p>
                    </div>
                    {/* Content 1 */}
                    <div className="impact-items max-md:p-6 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3">
                        <span className="text-3xl font-plusJktSans font-bold">261.000.000.000 m2</span>
                        <h1 className="font-plusJktSans text-2xl font-medium">Tanah Terbakar</h1>
                        <p className="font-inter text-md text-neutral-400">Lihat asap atau api di sekitarmu? Segera hubungi BPBD atau Manggala Agni setempat.</p>
                    </div>
                </div>
            </div>
        </>
    )
}