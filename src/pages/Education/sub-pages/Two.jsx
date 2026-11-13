import { ChevronUp } from "lucide-react";
import { useState } from "react"


export default function Two() {
    const [isSelected, setIsSelected] = useState(0);

    const dataChain = [
        {title : "Gambut yang kering", content : "Kanal drainase dibuat untuk lahan pertanian atau kebun. Air gambut mengalir keluar sehingga lapisan atasnya mengering. Gambut basah jauh lebih sulit terbakar."},
        {title : "Pembukaan Lahan dengan api", content : "Membakar adalah cara yang murah dan cepat untuk membuka lahan. Tanpa penjagaan, api mudah lepas kendali."},
        {title : " Api masuk ke gambut kering", content : "Api yang sampai ke gambut kering tidak berhenti di permukaan. Ia merambat ke dalam tanah dan membara di sana."},
        {title : "Kemarau dan El Niño", content : "Musim kering yang panjang membuat lahan makin kering dan angin membantu api menyebar."},
        {title : "Asap Menyebar", content : "Asap terbawa angin ke permukiman, kota, bahkan melintasi batas negara."},
    ];

    const selectedData = isSelected !== null ? dataChain[isSelected] : null;

    const accordionData = [
        {
            title: "Pemicu :",
            items: [
            "Pembakaran untuk membuka dan membersihkan lahan, karena murah dan cepat",
            "Kelalaian: puntung rokok, api unggun, atau membakar sampah tanpa diawasi",
            "Penyebab alami seperti petir, sangat jarang",
            ],
        },
        {
            title: "Penghambat :",
            items: [
            "Kanal drainase yang mengeringkan gambut",
            "Kemarau panjang dan El Niño",
            "Lahan luas dan sulit dijangkau",
            ],
        },
    ];

    return(
        <>
            <div className="w-full max-w-7xl mx-auto">
                 <span className="font-inter block font-semibold text-xs text-red-300 tracking-widest mb-2">02 · PENYEBAB</span>
                 <h1 className="font-plusJktSans font-bold text-4xl mb-3 max-w-md">Mengapa karhutla terus berulang di Indonesia?</h1>
                 <p className="font-inter text-lg/8 font-light text-neutral-400 max-w-3xl">Api tidak muncul sendiri. Ada pemicu yang menyalakan, dan ada kondisi yang membuat api mudah menjalar. Klik tiap langkah untuk melihat rantainya.</p>

                 <div className="grid md:grid-cols-5 max-md:grid-rows-5 gap-4 my-4">
                    {dataChain.map((item, index) => {
                        const isActive = isSelected === index;

                        return(
                            <button key={index} onClick={() => {setIsSelected(index)}} className={`p-4  border rounded-lg text-left hover:border-neutral-600 cursor-pointer flex md:flex-col max-md:gap-4 max-md:items-center md:items-start ${isActive ? 'bg-red-400/5 border-red-500' : 'border-neutral-700 bg-neutral-800/60'}`}>
                                <span className="font-inter block font-semibold text-xs text-red-300 tracking-widest md:mb-2">0{index + 1}</span>
                                <h1 className="font-plusJktSans font-semibold text-sm md:max-w-32">{item.title}</h1>
                            </button>
                        )
                    })}
                 </div>

                
                 {selectedData && (
                 <div key={selectedData} className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2"><span>{isSelected + 1}.</span>{selectedData.title}</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400">{selectedData.content}</p>
                 </div>
                 )}

                 <div className="grid md:grid-cols-2 items-start gap-4 my-4">
                    {accordionData.map((item, index) => (
                        <AccordionCard key={index} title={item.title} children={item.items}/>
                    ))}
                </div>
            </div>
        </>
    )
}

function AccordionCard({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg transition-colors duration-200 hover:border-neutral-600">
      <h1 className="font-plusJktSans font-bold text-2xl">
        <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} className="flex w-full items-center justify-between text-left cursor-pointer focus:outline-none">
          <span>{title}</span>
          <ChevronUp className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`} size={20}/>
        </button>
      </h1>

      <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
        <div className="overflow-hidden">
            <ul className="list-disc pl-5 space-y-2 font-inter text-md/7 font-medium text-neutral-200 marker:text-red-500">
            {children.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
      </div>
    </div>
  );
}