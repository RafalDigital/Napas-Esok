// REACT
import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

import { RiArrowRightLongLine } from "@remixicon/react";
import { RiCrosshair2Line } from "@remixicon/react";
import { ShieldCheck } from "lucide-react";
import { SquareText } from "lucide-react";


export default function Features() {
    const featuresRef = useRef(null)
    
        useGSAP(() => {
            gsap.from(".feature-items", {
                y: 20,
                opacity: 0,
                duration: 0.2,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: featuresRef.current,
                    start: 'top 50%',
                    end: 'bottom top',
                    toggleActions: "play reverse restart reverse"
                }
            })
        }, {scope : featuresRef})


    return(
        <>
            <div ref={featuresRef} className="w-full mx-auto max-w-7xl flex flex-col gap-4 md:px-[5.2rem] px-4 pb-10">
                <div className="mb-6">
                    <h1 className="feature-items max-md:text-center font-plusJktSans text-[40px] font-bold mt-2">Solusi Menyeluruh untuk Lingkungan Kita</h1>
                    <span className="feature-items max-md:text-center block font-plusJktSans text-lg font-medium text-neutral-400">Dari melihat, memahami, sampai bertindak, semuanya dalam satu tempat.</span>
                </div>
                <div className="grid md:grid-cols-2 max-md:grid-rows-2 gap-8 items-center">

                    <div className="feature-items grid grid-rows-3 gap-6 w-full">
                        {/* Content 1 */}
                        <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3 group hover:bg-red-400/5 hover:border-red-500 transition-all cursor-pointer">
                            <div className="flex gap-4">
                                <span className="flex items-center justify-center bg-red-500 rounded-lg w-10 h-10 text-xl font-inter font-bold"><RiCrosshair2Line/></span>
                                <h1 className="font-plusJktSans text-[28px] font-medium">Pantau</h1>
                            </div>
                            <p className="font-inter text-sm text-neutral-400">Lihat titik api, kualitas udara, dan arah angin pada peta interaktif.</p>
                            <button className="flex gap-2 w-fit mt-auto rounded-xl font-plusJktSans font-semibold text-sm text-red-400">Buka Pantauan <RiArrowRightLongLine className="group-hover:translate-x-1.5 transition-all"/></button>
                        </div>

                        {/* Content 1 */}
                        <div className=" p-6 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3 group hover:bg-red-400/5 hover:border-red-500 transition-all cursor-pointer">
                            <div className="flex gap-4">
                                <span className="flex items-center justify-center bg-red-500 rounded-lg w-10 h-10 text-xl font-inter font-bold"><SquareText/></span>
                                <h1 className="font-plusJktSans text-[28px] font-medium">Pahami</h1>
                            </div>
                            <p className="font-inter text-sm text-neutral-400">Kenali penyebab, dan dampaknya bagi kita semua.</p>
                            <button className="flex gap-2 w-fit mt-auto rounded-xl font-plusJktSans font-semibold text-sm text-red-400">Pelajari <RiArrowRightLongLine className="group-hover:translate-x-1.5 transition-all"/></button>
                        </div>

                        {/* Content 1 */}
                        <div className=" p-6 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3 group hover:bg-red-400/5 hover:border-red-500 transition-all cursor-pointer">
                            <div className="flex gap-4">
                                <span className="flex items-center justify-center bg-red-500 rounded-lg w-10 h-10 text-xl font-inter font-bold"><ShieldCheck/></span>
                                <h1 className="font-plusJktSans text-[28px] font-medium">Cegah</h1>
                            </div>
                            <p className="font-inter text-sm text-neutral-400">Cek risiko di lokasimu dan temukan langkah nyata yang bisa dilakukan.</p>
                            <button className="flex gap-2 w-fit mt-auto rounded-xl font-plusJktSans font-semibold text-sm text-red-400">Cek Risiko <RiArrowRightLongLine className="group-hover:translate-x-1.5 transition-all"/></button>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="feature-items w-full h-full bg-neutral-800/60 border border-neutral-700 rounded-2xl"></div>
                </div>
            </div>
        </>
    )
}