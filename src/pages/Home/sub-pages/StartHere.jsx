// REACT
import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function StartHere() {
    const shRef = useRef(null)
    
        useGSAP(() => {
            gsap.from(".sh-items", {
                y: 20,
                opacity: 0,
                duration: 0.2,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: shRef.current,
                    start: 'top 50%',
                    end: 'bottom top',
                    toggleActions: "play none none none"
                }
            })
        }, {scope : shRef})

    return(
        <>
            <div ref={shRef} className="w-full mx-auto max-w-7xl flex flex-col gap-4 md:px-[5.2rem] px-4 pb-10">
                <div>
                    <span className="sh-items block max-md:text-center font-inter text-sm font-bold text-red-300">Mulai Dari Sini</span>
                    <h1 className="sh-items max-md:text-center font-plusJktSans text-3xl font-bold mt-2">Tiga langkah nyata, hari ini.</h1>
                </div>
                <div className="grid md:grid-cols-3 max-md:grid-rows-3 gap-6 py-2 mt-6">
                    {/* Content 1 */}
                    <div className="sh-items p-8 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3 h-80">
                        <span className="flex items-center justify-center bg-red-500 rounded-lg w-10 h-10 text-xl font-inter font-bold">1</span>
                        <h1 className="font-plusJktSans text-2xl font-medium">Laporkan titik api</h1>
                        <p className="font-inter text-md text-neutral-400">Lihat asap atau api di sekitarmu? Segera hubungi BPBD atau Manggala Agni setempat.</p>
                        <button className="px-4 py-2 border border-neutral-400 w-fit mt-auto rounded-xl font-inter font-semibold text-sm cursor-pointer hover:border-neutral-400/40 transition-all">Cara melapor</button>
                    </div>
                    {/* Content 2 */}
                    <div className="sh-items p-8 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3">
                        <span className="flex items-center justify-center bg-red-500 rounded-lg w-10 h-10 text-xl font-inter font-bold">2</span>
                        <h1 className="font-plusJktSans text-2xl font-medium">Cek udara sebelum keluar</h1>
                        <p className="font-inter text-md text-neutral-400">Lihat kualitas udara di kotamu dan gunakan masker saat udara tidak sehat.</p>
                        <button className="px-4 py-2 border border-neutral-400 w-fit mt-auto rounded-xl font-inter font-semibold text-sm cursor-pointer hover:border-neutral-400/40 transition-all">Cek kualitas udara</button>

                    </div>
                    {/* Content 3 */}
                    <div className="sh-items p-8 bg-neutral-800/60 border border-neutral-700 rounded-2xl flex flex-col gap-3">
                        <span className="flex items-center justify-center bg-red-500 rounded-lg w-10 h-10 text-xl font-inter font-bold">3</span>
                        <h1 className="font-plusJktSans text-2xl font-medium">Bagikan Napas Esok</h1>
                        <p className="font-inter text-md text-neutral-400">Semakin banyak yang tahu, semakin cepat api terdeteksi dan dicegah.</p>
                        <button className="px-4 py-2 border border-red-400 bg-red-500 w-fit mt-auto rounded-xl font-inter font-semibold text-sm cursor-pointer hover:bg-red-500/40 transition-all">Bagikan website</button>
                    </div>
                </div>
            </div>
        </>
    )
}