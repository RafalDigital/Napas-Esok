import { Info } from "lucide-react";

export default function Footer() {
    return(
        <>
            <footer className="w-full mt-32 px-32 py-12 bg-footer border-t border-neutral-700">
                <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {/* Section 1 */}
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold font-plusJktSans text-2xl mb-1">Napas Esok</h1>
                        <p className="text-neutral-400 text-sm font-inter">Memantau, memahami, dan mencegah karhutla, agar napas kita tidak lagi jadi risiko.</p>
                        <span className="text-xs flex items-center gap-2 text-neutral-500 font-inter"> <Info size={12}/> Data Diupdate : 10/11/2026</span>
                    </div>
                    {/* Section 2 */}
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold font-plusJktSans mb-1">Jelajahi</h1>
                            <a href="" className="text-neutral-400 hover:text-neutral-300 text-sm font-inter">Beranda</a>
                            <a href="" className="text-neutral-400 hover:text-neutral-300 text-sm font-inter">Edukasi</a>
                            <a href="" className="text-neutral-400 hover:text-neutral-300 text-sm font-inter">Fitur</a>
                            <a href="" className="text-neutral-400 hover:text-neutral-300 text-sm font-inter">FAQ</a>
                        </div>
                    </div>
                    {/* Section 3 */}
                    <div className="flex flex-col items-center">
                        content 3
                        
                    </div>
                </div>
                <div className="w-full max-w-7xl mx-auto h-[1px] bg-neutral-700 rounded-full mt-12 mb-6"></div>
                <div className="w-full max-w-7xl mx-auto text-xs text-neutral-500 text-center font-inter">Copyright © 2026, Napas Esok, All Rights Reserved</div>
            </footer>
        </>
    )
}