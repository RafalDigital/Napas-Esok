import { Minimize } from "lucide-react";
import { Maximize } from "lucide-react";
import { useState } from "react";
import { useRef } from "react";


export default function Hotspot() {
    const siPongiContainer = useRef(null);
    const [isSiPongiFull, setIsSiPongiFull] = useState(false);

    const toggleSiPongiFull = () => {
        if(!document.fullscreenElement) {
            siPongiContainer.current?.requestFullscreen()
            setIsSiPongiFull(true)
        } else {
            document.exitFullscreen();
            setIsSiPongiFull(false)
        }
    }

    return(
        <>
            <div className="w-full max-w-7xl mx-auto">
                <span className="font-inter block font-semibold text-xs text-red-300 tracking-widest mb-2">01 · TITIK API</span>
                <h1 className="font-plusJktSans font-bold text-4xl mb-3">Titik api terkini</h1>
                <p className="font-inter text-lg/8 font-light text-neutral-400 max-w-3xl">Titik api di sini adalah titik panas yang dideteksi satelit. Itu tanda kemungkinan ada api, belum tentu kebakaran yang sudah dipastikan di lapangan.</p>
                <div ref={siPongiContainer} className={`bg-neutral-800/60 border border-neutral-700 ${isSiPongiFull ? 'rounded-none w-screen h-screen flex flex-col justify-center items-center bg-neutral-950 p-0 m-0 border-none' : 'rounded-lg'} overflow-clip my-6 relative`}>
                        
                        <button title="fullscreen" onClick={toggleSiPongiFull} className="absolute z-10 right-2 top-2 p-1.5 text-xs font-medium text-white bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer">
                            {isSiPongiFull ? <Minimize/> : <Maximize/>}
                        </button>

                    <SipongiMap isFull={isSiPongiFull}/>
                </div>
            </div>
        </>
    )
}

function SipongiMap({ isFull }) {
  return (
    <div className={`relative w-full overflow-hidden ${isFull ? 'h-full' : 'aspect-video'}`}>
      <iframe
        src="https://sipongi.gakkum.kehutanan.go.id/peta"
        className="absolute inset-0 size-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};