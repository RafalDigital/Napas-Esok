import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Monitoring() {
    return(
        <>
            <Navbar/>
            <div className="min-h-[100dvh] bg-background flex items-start">
                <main className="flex-1 overflow-auto max-lg:pt-40 pt-32 px-6 md:px-12">
                    <div className="bg-neutral-800/60 border border-neutral-700 rounded-lg overflow-clip mb-4">
                        <SipongiMap/>
                    </div>
                </main>
            </div>
            <Footer/>
        </>
    )
}

function SipongiMap() {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
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