import { RiInstagramLine } from "@remixicon/react";
import { RiTelegram2Line } from "@remixicon/react";
import { RiMailLine } from "@remixicon/react";
import { Info } from "lucide-react";

export default function Footer() {
    return(
        <>
            <footer className="w-full mt-32 md:px-32 px-20 py-12 bg-footer border-t border-neutral-700">
                <div className="grid md:grid-cols-3 max-md:grid-rows-3 gap-10 max-w-7xl mx-auto">
                    {/* Section 1 */}
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold font-plusJktSans text-2xl mb-1">Napas Esok</h1>
                        <p className="text-neutral-400 text-sm font-inter">Memantau, memahami, dan mencegah karhutla, agar napas kita tidak lagi jadi risiko.</p>
                        <span className="text-xs flex items-center gap-2 text-neutral-500 font-inter"> <Info size={12}/> Data Diupdate : 10/11/2026</span>
                    </div>
                    {/* Section 2 */}
                    <div className="flex flex-col md:items-center">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold font-plusJktSans mb-1">Jelajahi</h1>
                            <a href="" className="text-neutral-400 hover:text-neutral-300 text-sm font-inter">Beranda</a>
                            <a href="" className="text-neutral-400 hover:text-neutral-300 text-sm font-inter">Edukasi</a>
                            <a href="" className="text-neutral-400 hover:text-neutral-300 text-sm font-inter">Fitur</a>
                            <a href="" className="text-neutral-400 hover:text-neutral-300 text-sm font-inter">FAQ</a>
                        </div>
                    </div>
                    {/* Section 3 */}
                    <div className="flex flex-col md:items-center">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold font-plusJktSans mb-1">Hubungi Kami</h1>
                            <a href="" className="flex gap-1.5 items-center text-neutral-400 hover:text-neutral-300 text-sm font-inter"><RiMailLine size={16}/> kontak@napasesok.id</a>
                            <a href="" className="flex gap-1.5 items-center text-neutral-400 hover:text-neutral-300 text-sm font-inter"><RiInstagramLine size={16}/> @napasesok.id</a>
                            <a href="" className="flex gap-1.5 items-center text-neutral-400 hover:text-neutral-300 text-sm font-inter"><RiTelegram2Line size={16}/> @napasesok_id</a>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-7xl mx-auto h-[1px] bg-neutral-700 rounded-full mt-12 mb-6"></div>
                <div className="w-full max-w-7xl mx-auto text-xs text-neutral-500 text-center font-inter">Copyright © 2026, Napas Esok, All Rights Reserved</div>
            </footer>
        </>
    )
}