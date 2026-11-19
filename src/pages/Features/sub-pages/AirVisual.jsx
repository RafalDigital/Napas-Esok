import { Minimize } from "lucide-react";
import { Maximize } from "lucide-react";
import { useState } from "react";
import { useRef } from "react";


export default function AirVisual() {
    const AirVisualContainer = useRef(null);
    const [isAirVisualFull, setIsAirVisualFull] = useState(false);
    const [isAirVisualIntractive, setIsAirVisualIntractive] = useState(false);


    const toggleAirVisualFull = () => {
        if(!document.fullscreenElement) {
            AirVisualContainer.current?.requestFullscreen()
            setIsAirVisualFull(true)
        } else {
            document.exitFullscreen();
            setIsAirVisualFull(false)
        }
    }

    return(
        <>
            <div className="w-full max-w-7xl mx-auto">
                <span className="font-inter block font-semibold text-xs text-red-300 tracking-widest mb-2">02 · KUALITAS UDARA</span>
                <h1 className="font-plusJktSans font-bold text-4xl mb-3">Udara tiap kota</h1>
                <p className="font-inter text-lg/8 font-light text-neutral-400 max-w-3xl">Angka dan warna menunjukkan indeks kualitas udara (AQI). Klik sebuah kota untuk melihat rinciannya..</p>

                <div ref={AirVisualContainer} onMouseLeave={() => setIsAirVisualIntractive(false)} className={`bg-neutral-800/60 border border-neutral-700 ${isAirVisualFull ? 'rounded-none w-screen h-screen flex flex-col justify-center items-center bg-neutral-950 p-0 m-0 border-none' : 'rounded-lg'} overflow-clip my-6 relative`}>
                    <button title="fullscreen" onClick={toggleAirVisualFull} className="absolute z-10 right-2 top-2 p-1.5 text-xs font-medium text-white bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer">
                        {isAirVisualFull ? <Minimize/> : <Maximize/>}
                    </button>
                    {!isAirVisualIntractive && (
                        <div onClick={() => setIsAirVisualIntractive(true)} className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity">
                        <span className="bg-neutral-900/90 text-white text-xs px-3 py-2 rounded-lg border border-neutral-700 shadow-md">
                            Klik untuk mengaktifkan peta
                        </span>
                        </div>
                    )}
                    <AirVisualMap isFull={isAirVisualFull}/>
                </div>

            </div>
        </>
    )
}

function AirVisualMap({ isFull }) {

  return (
    <div className={`relative w-full overflow-hidden ${isFull ? 'h-full' : 'h-[calc(100vh-150px)] min-h-[400px]'}`}> 
      <iframe
        src="https://www.iqair.com/id/embeddable-map"
        data-city="indonesia"
        className="absolute inset-0 size-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};