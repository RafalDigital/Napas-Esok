import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AirVisual from "./sub-pages/AirVisual";
import Hotspot from "./sub-pages/Hotspot";

export default function Monitoring() {
    return(
        <>
            <Navbar/>
            <div className="min-h-[100dvh] bg-background flex items-start">
                <main className="flex-1 overflow-auto max-lg:pt-40 pt-32 px-6 md:px-12">
                    <header className="mb-12 border-b border-neutral-800 pb-12">
                        <span className="block text-xs w-fit px-3 py-1 font-plusJktSans font-bold border border-neutral-600 rounded-2xl mb-4">Pantau</span>
                        <h1 className="text-6xl/18 font-plusJktSans font-bold mb-4">Pantau udara di sekitarmu</h1>
                        <p className="text-lg text-neutral-400 font-inter max-w-2xl">Lihat kualitas udara tiap provinsi, wilayah yang pernah tertutup asap, dan di mana titik api terdeteksi.</p>
                    </header>
                    <section className="pb-20"><Hotspot/></section>    
                    <section className="pb-20"><AirVisual/></section>    
                </main>
            </div>
            <Footer/>
        </>
    )
}

