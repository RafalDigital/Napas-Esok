import { Info } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useState } from "react"


export default function Four() {
    const [handlingStep, setHandlingStep] = useState("Pencegahan");

    const steps = [
        {
            label: "Pencegahan",
            contents: [
                {
                    title: "Jaga gambut tetap basah", 
                    content: [
                        "Tetapkan batas: muka air gambut tidak boleh lebih dalam dari 40 cm dari permukaan tanah.",
                        "Pasang sensor muka air dan baca rutin. Kalau mendekati batas, tahan air dengan sekat kanal atau timbun kanal.",
                        "Jaga permukaan gambut tetap tertutup vegetasi, karena permukaan terbuka mempercepat penguapan."
                    ], 
                    subContent: "BRGM membangun sekat kanal, menimbun kanal, dan membuat sumur bor di lahan gambut yang rawan terbakar."
                },
                {
                    title: "Pantau lebih dini", 
                    content: [
                        "Pantau lima hal: cuaca kering dan angin, muka air dan kelembapan gambut, titik panas dari satelit, dan kondisi bahan bakar (semak dan serasah kering).",
                        "Lihat langsung dengan menara pantau, patroli darat, dan drone.",
                        "Cek tiap titik panas di lapangan. Tidak semua titik panas adalah kebakaran, dan api di bawah gambut bisa luput dari satelit."
                    ], 
                    subContent: "BRGM menyediakan peringatan dini SIPALAGA dan FDRS Gambut yang bisa dibuka publik. Manggala Agni mengecek titik panas di lapangan."
                },
                {
                    title: "Hentikan pembakaran dari akarnya", 
                    content: [
                        "Larang dan tegakkan: UU 32/2009 Pasal 69 melarang membuka lahan dengan membakar. Pelaku diancam penjara 3-10 tahun dan denda Rp3-10 miliar (Pasal 108).",
                        "Sediakan jalan keluar: ajarkan pembukaan lahan tanpa bakar dan beri penghasilan dari lahan yang terjaga.",
                        "Bentuk kelompok warga terlatih yang berpatroli dan melapor dini."
                    ], 
                    subContent: "Kementerian Kehutanan bekerja dengan 14.040 anggota Masyarakat Peduli Api di 34 provinsi. BRGM mendorong peralihan ke pembukaan lahan tanpa bakar."
                },
            ]
        },

        {
            label: "Pemadaman",
            contents: [
                {
                    title: "Pemadaman api di darat", 
                    content: [
                        "Datangi lokasi secepatnya, karena makin lama api tidak diketahui, makin mudah ia meluas.",
                        "Padamkan dengan pompa, selang, dan peralatan manual.",
                        "Di gambut, periksa tanah yang berasap, lalu basahi dan dinginkan berulang. Bongkar material terbakar hati-hati agar air sampai ke bara.",
                        "Pastikan area tidak lagi berasap atau menghangat sebelum ditinggalkan, karena api bisa merambat di bawah tanah tanpa kobaran besar."
                    ], 
                    subContent: "Manggala Agni, BPBD, TNI, Polri, dan masyarakat bekerja dalam tim gabungan. Pada Oktober 2026, BNPB mencatat 51.057 personel Satgas Darat di empat provinsi prioritas."
                },
                {
                    title: "Pastikan air sampai ke bara", 
                    content: [
                        "Menyiram permukaan tidak cukup: bara bertahan di bawah tanah dan asap bisa muncul lagi.",
                        "Suntik gambut: pipa panjang berujung tajam disambung pompa, air disuntikkan langsung ke lapisan gambut.",
                        "Atau bor dangkal lalu pompa portabel, dengan jangkauan sekitar 200 meter dari titik bor.",
                        "Siapkan sumber air. Muka air yang turun menyulitkan sumur bor dan kanal."
                    ], 
                    subContent: "BNPB menerapkan suntik gambut di Rasau Jaya Tiga, Kubu Raya, Kalimantan Barat (September 2026)."
                },
                {
                    title: "Gunakan udara sebagai pendukung", 
                    content: [
                        "Water bombing: untuk api kecil atau lokasi yang sulit dijangkau regu darat. Hasilnya dipengaruhi angin, luas api, dan sumber air. Di gambut harus disusul pendinginan di darat.",
                        "Modifikasi cuaca: menyemai awan berpotensi hujan agar membasahi lahan. Butuh awan yang sesuai, dan bukan pengganti pemadaman langsung."
                    ], 
                    subContent: "BNPB mengoperasikan 61 armada udara. Pada 27 Oktober 2026, modifikasi cuaca berjalan di tiga provinsi dengan 18 sorti. Kata Kepala BNPB, water bombing hanya efektif saat api masih kecil."
                },
            ]
        },  

        {
            label: "Pemulihan",
            contents: [
                {
                    title: "Basahi kembali gambut", 
                    content: [
                        "Restorasi gambut memakai 3R. Langkah pertamanya rewetting, yaitu pembasahan kembali gambut yang kering.",
                        "Caranya: sekat kanal, timbun kanal, dan sumur bor.",
                        "Rawat bangunan air itu agar tetap berfungsi."
                    ], 
                    subContent: "BRGM menjalankan 3R. Judul berita Kompas (Juni 2024) menyebut BRGM mengklaim telah merestorasi 1,8 juta hektare gambut pada 2016-2023."
                },
                {
                    title: "Tanam kembali dan beri warga penghasilan", 
                    content: [
                        "Revegetasi (langkah ke 2 dari 3R): buat persemaian, siapkan bibit, dan rawat. Ukur keberhasilan dari tanaman yang bertahan hidup, bukan jumlah yang ditanam.",
                        "Revitalisasi (langkah ke 3 dari 3R): kembangkan usaha dari lahan gambut yang terjaga agar warga punya alasan ekonomi untuk tidak membakar.",
                        "Posisikan warga sebagai pelaku restorasi, bukan objek."
                    ], 
                    subContent: "Contoh usaha warga di program BRGM: kopi di Tanjung Jabung Barat, sagu di Sungai Tohor (Riau), dan buah naga di Pulang Pisau (Kalimantan Tengah)."
                },
                {
                    title: "Cari penyebab, cegah berulang", 
                    content: [
                        "Periksa tiap kejadian: titik awal api, arah angin, jenis tanah, riwayat penggunaan lahan, kondisi vegetasi, dan rekaman patroli. Jangan menyimpulkan dari satu informasi saja.",
                        "Tegakkan hukum agar pembakaran tidak berulang.",
                        "Evaluasi kesiapan personel, peralatan, dan anggaran."
                    ], 
                    subContent: "Pada Juli 2026, Menteri Kehutanan mengevaluasi standar personel dan peralatan Manggala Agni, termasuk modifikasi cuaca, pemantauan muka air tanah, dan penggunaan anggaran pemadaman."
                },
            ]
        },  
    ]

    const filteredandFindIndexDataLabel = steps.findIndex((item) => item.label === handlingStep)
    const selectedData = filteredandFindIndexDataLabel !== null ? steps[filteredandFindIndexDataLabel] : null;

    return(
        <>
            <div className="w-full max-w-7xl mx-auto">
                <span className="font-inter block font-semibold text-xs text-red-300 tracking-widest mb-2">04 · PENANGANAN</span>
                <h1 className="font-plusJktSans font-bold text-4xl mb-3">Bagaimana karhutla ditangani?</h1>
                <p className="font-inter text-lg/8 font-light text-neutral-400 max-w-3xl">Penanganan efektif bukan hanya memadamkan api. Ada tiga tahap: mencegah, memadamkan, dan memulihkan.</p>

                <div className="flex self-center p-1 bg-neutral-800 rounded-xl md:w-fit my-4">
                {steps.map((item) => {
                    const isActive = handlingStep === item.label

                    return(
                        <button key={item.label} onClick={() => setHandlingStep(item.label)} className={`px-4 py-2 max-md:w-full text-sm font-semibold font-plusJktSans hover:text-neutral-200 rounded-lg border ${isActive ? 'border-neutral-700 bg-neutral-950 text-neutral-200' : 'bg-neutral-800 border-neutral-50/0 text-neutral-500'}  cursor-pointer`}>{item.label}</button>
                    )
                    }
                )}
                </div>

                {selectedData && (
                 <div key={selectedData} className="grid md:grid-cols-3 max-md:grid-rows-3 gap-4">
                    {selectedData.contents.map((items, index) => (
                        <div key={index} className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                            <h1 className="font-plusJktSans font-bold text-2xl mb-2">{items.title}</h1>
                             <ul className="list-disc pl-5 mb-4 space-y-2 font-inter text-sm/6 font-light text-neutral-200 marker:text-red-500">
                                {items.content.map((li, index) => (
                                    <li key={index}>{li}</li>
                                ))}
                            </ul>
                            <AccordionCard content={items.subContent}/>
                        </div>
                    ))}
                 </div>
                 )}

                 <span className="font-inter block text-xs text-neutral-400 flex gap-2 mt-6 max-w-xl">
                    <Info size={12} className="shrink-0"/>
                    <p>
                        Sumber: detikInet (29 Agu 2026), NU Online (25 Sep 2026), RCTI+/Sindonews (25 Agu 2026), GNFI, Metro TV (5 Sep dan 14 Jul 2026), Katadata (10 Sep 2026), Okezone/RCTI+ (29 Okt 2026), InfoPublik (21 Okt 2026), ANTARA (BRGM, 2022), Hukumonline (2020), Setkab (2018). Tautan lengkap ada di bagian Referensi.
                    </p>
                </span>
            </div>
        </>
    )
}

function AccordionCard({ content, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="py-3 px-4 bg-neutral-900 border border-neutral-700 rounded-lg transition-colors duration-200 hover:border-neutral-600">
      <h1 className="font-plusJktSans font-bold text-md">
        <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} className="flex w-full items-center justify-between text-left cursor-pointer focus:outline-none">
          <span>Aksi nyata</span>
          <ChevronUp className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`} size={20}/>
        </button>
      </h1>

      <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
        <div className="overflow-hidden">
            <p className="font-inter text-sm/7 font-light text-neutral-400 max-w-3xl mb-3">{content}</p>
        </div>
      </div>
    </div>
  );
}