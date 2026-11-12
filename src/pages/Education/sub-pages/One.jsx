import { Wind } from "lucide-react";
import { SunSnow } from "lucide-react";
import { Flame } from "lucide-react";
import { useState } from "react"


export default function One() {
    const [isSurface, setIsSurface] = useState(true);

    return(
        <>
            <div className="w-full max-w-7xl mx-auto">
                <span className="font-inter block font-semibold text-xs text-red-300 tracking-widest mb-2">01 · DEFINISI</span>
                <h1 className="font-plusJktSans font-bold text-4xl mb-3">Apa itu karhutla?</h1>
                <p className="font-inter text-lg/8 font-light text-neutral-400 max-w-3xl">Karhutla adalah singkatan dari <span className="font-bold text-neutral-200">kebakaran hutan dan lahan</span>. Yaitu, terbakarnya hutan, kebun, dan lahan terbuka secara tidak terkendali. Di Indonesia, yang paling sulit ditangani adalah kebakaran di lahan <span className="font-bold text-neutral-200">gambut</span>. Gambut adalah tanah berlapis sisa tumbuhan yang tertimbun ribuan tahun.</p>

                <div className="p-1 bg-neutral-800 rounded-xl w-fit my-4">
                    <button onClick={() => setIsSurface(true)} className={`px-4 py-2 text-sm font-semibold font-plusJktSans hover:text-neutral-200 rounded-lg border ${isSurface ? 'border-neutral-700 bg-neutral-950 text-neutral-200' : 'bg-neutral-800 border-neutral-50/0 text-neutral-500'}  cursor-pointer`}>Di Permukaan</button>
                    <button onClick={() => setIsSurface(false)} className={`px-4 py-2 text-sm font-semibold font-plusJktSans hover:text-neutral-200 rounded-lg border ${isSurface ? 'bg-neutral-800 border-neutral-50/0 text-neutral-500' : 'border-neutral-700 bg-neutral-950 text-neutral-200'}  cursor-pointer`}>Di Bawah Permukaan</button>
                </div>

                <div className="grid md:grid-cols-2 max-md:grid-rows-2 gap-4">
                    <div className="bg-neutral-800/60 border border-neutral-700 rounded-lg"></div>
                    <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                        <span className="bg-red-500/20 rounded-2xl py-1 px-3 font-bold text-xs text-red-200 font-plusJktSans w-fit mb-4">{isSurface ? "Di permukaan" : "Di bawah permukaan"}</span>
                        <h1 className="font-plusJktSans font-bold text-2xl my-2 max-w-60">{isSurface ? "Membakar daun, semak, dan ranting" : "Membara di dalam lapisan gambut"}</h1>
                        <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">{isSurface ? "Api menjalar di atas tanah. Terlihat jelas dan dapat dipadamkan dengan tim darat serta air dari udara." : "Panas merambat di dalam tanah tanpa nyala yang terlihat. Asapnya tipis tapi terus keluar, dan api bisa muncul lagi di tempat lain. Inilah yang membuatnya sulit dipadamkan."}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 max-md:grid-rows-3 gap-4 mt-4">
                    <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                        <span className="flex items-center justify-center bg-neutral-700 rounded-lg p-2.5 w-fit"><Flame size={20}/></span>
                        <h1 className="font-plusJktSans font-bold text-2xl my-2 max-w-60">Butuh tiga hal</h1>
                        <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Bahan bakar, oksigen, dan panas. Lahan gambut yang kering adalah bahan bakar yang sangat baik.</p>
                    </div>

                    <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                        <span className="flex items-center justify-center bg-neutral-700 rounded-lg p-2.5 w-fit"><Wind size={20}/></span>
                        <h1 className="font-plusJktSans font-bold text-2xl my-2 max-w-60">Asap ikut bepergian</h1>
                        <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Bahan Terbawa angin, asap menempuh jarak jauh. Satuan titik api yang terpantau satelit disebut titik panas (hotspot).</p>
                    </div>

                    <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                        <span className="flex items-center justify-center bg-neutral-700 rounded-lg p-2.5 w-fit"><SunSnow size={20}/></span>
                        <h1 className="font-plusJktSans font-bold text-2xl my-2 max-w-60">Musim memperparah</h1>
                        <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Bahan Kemarau panjang dan El Niño membuat lahan makin kering dan mudah terbakar.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

            // <div className="w-full max-w-7xl mx-auto">
            //     <span className="font-inter block font-semibold text-xs text-red-300 tracking-widest mb-2">01 · DEFINISI</span>
            //     <h1 className="font-plusJktSans font-bold text-4xl mb-3">Apa itu karhutla?</h1>
            //     <p className="font-inter text-lg/8 font-light text-neutral-400 max-w-3xl">Karhutla adalah singkatan dari <span className="font-bold text-neutral-200">kebakaran hutan dan lahan</span>. Yaitu, terbakarnya hutan, kebun, dan lahan terbuka secara tidak terkendali. Di Indonesia, yang paling sulit ditangani adalah kebakaran di lahan <span className="font-bold text-neutral-200">gambut</span>. Gambut adalah tanah berlapis sisa tumbuhan yang tertimbun ribuan tahun.</p>
            // </div>