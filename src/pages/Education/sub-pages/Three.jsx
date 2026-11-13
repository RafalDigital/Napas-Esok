import { Info } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useState } from "react"

export default function Three() {
    const [impactCategory, setImpactCategory] = useState("health");

    const category = [
        { id: 'health', label: 'Kesehatan' },
        { id: 'economy', label: 'Ekonomi' },
        { id: 'clime', label: 'Lingkungan & iklim' },
        { id: 'daily', label: 'Aktivitas harian' },
    ];

    const renderCategory = {
        health: <HealthSection/>,
        economy: <EconomySection/>,
        clime: <ClimeSection/>,
        daily: <DailySection/>,
    }

    return(
        <>
            <div className="w-full max-w-7xl mx-auto">
                <span className="font-inter block font-semibold text-xs text-red-300 tracking-widest mb-2">03 · DAMPAK</span>
                <h1 className="font-plusJktSans font-bold text-4xl mb-3">Dampaknya menjalar ke mana saja?</h1>
                <p className="font-inter text-lg/8 font-light text-neutral-400 max-w-3xl">Karhutla bukan hanya soal pohon yang hangus. Pilih kategori untuk melihat ringkasannya.</p>

                <div className="flex items-center p-1 bg-neutral-800 rounded-xl md:w-fit my-4 overflow-x-auto no-scrollbar">
                    {category.map((item) => (
                        <button key={item.id} onClick={() => setImpactCategory(item.id)} className={`shrink-0 whitespace-nowrap px-4 py-2 text-sm font-semibold font-plusJktSans hover:text-neutral-200 rounded-lg border ${impactCategory === item.id ? 'border-neutral-700 bg-neutral-950 text-neutral-200' : 'bg-neutral-800 border-neutral-50/0 text-neutral-500'}  cursor-pointer`}>{item.label}</button>
                    ))}
                </div>

                <main>
                    {renderCategory[impactCategory]}
                </main>
            </div>
        </>
    )
}

const HealthSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className="grid md:grid-cols-2 max-md:grid-rows-2 gap-4 my-4">
                {/* Card 1 */}
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Asap yang masuk ke paru-paru</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl mb-3">Asap karhutla mengandung partikel sangat halus (PM2,5) yang dapat memicu atau memperburuk batuk, sesak napas, mengi, iritasi mata dan saluran napas, asma, serta PPOK.</p>
                    <div className="py-3 px-4 bg-neutral-900 border border-neutral-700 rounded-lg transition-colors duration-200 hover:border-neutral-600">
                        <h1 className="font-plusJktSans font-bold text-md">
                            <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} className="flex w-full items-center justify-between text-left cursor-pointer focus:outline-none">
                            <span>Paling rentan</span>
                            <ChevronUp className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`} size={20}/>
                            </button>
                        </h1>
                        
                        <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                            <div className="overflow-hidden">
                                <ul className="list-disc pl-5 space-y-2 font-inter text-md/7 font-medium text-neutral-200 marker:text-red-500">
                                    <li>Anak-anak</li>
                                    <li>Lansia</li>
                                    <li>Ibu hamil</li>
                                    <li>Pengidap penyakit kronis</li>
                                    <li>Pekerja luar ruangan</li>
                                </ul>
                            </div>
                        </div>
                        </div>

                </div>

                {/* Card 2 */}
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg h-fit">
                    <span className="bg-red-500/20 rounded-2xl py-1 px-3 font-bold text-xs text-red-200 font-plusJktSans w-fit mb-4">Kasus ISPA kumulatif, 63 - 68 kabupaten/kota</span>
                    <h1 className="font-plusJktSans font-bold text-5xl my-2 text-red-500">401.586</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl mb-4">Karhutla berdampak pada sekitar 10,67 juta penduduk di tujuh provinsi.</p>
                    <p className="font-inter text-xs font-light text-neutral-500 max-w-3xl">Sumber: Situation Report Kemenkes, 2 November 2026 (via kompas.com). Angka antar sumber bisa berbeda karena periode dan cakupan pelaporan.</p>
                </div>
            </div>

            <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                <h1 className="font-plusJktSans font-bold text-2xl mb-2">Baca tingkat bahayanya: ISPU</h1>
                <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl mb-6">ISPU (Indeks Standar Pencemaran Udara) membagi kualitas udara menjadi lima kategori. Makin tinggi angkanya, makin berbahaya.</p>
                <div className="grid md:grid-cols-5 max-md:grid-rows-5 gap-2">
                    {/* Baik */}
                    <div className="flex md:flex-col max-md:justify-between items-center max-md:bg-green-500 max-md:px-4 max-md:py-1.5 max-md:rounded-lg">
                        <div className="w-full h-2.5 bg-green-500 rounded-sm max-md:hidden"/>
                        <h1 className="font-inter font-bold text-sm md:mt-2">Baik</h1>
                        <p className="font-inter text-xs/7 font-light max-md:text-neutral-200 text-neutral-400 md:-mt-1">0-50</p>
                    </div>
                    {/* Sedang */}
                    <div className="flex md:flex-col max-md:justify-between items-center max-md:bg-blue-600 max-md:px-4 max-md:py-1.5 max-md:rounded-lg">
                        <div className="w-full h-2.5 bg-blue-600 rounded-sm max-md:hidden"/>
                        <h1 className="font-inter font-bold text-sm md:mt-2">Sedang</h1>
                        <p className="font-inter text-xs/7 font-light max-md:text-neutral-200 text-neutral-400 md:-mt-1">51-100</p>
                    </div>
                    {/* Tidak Sehat */}
                    <div className="flex md:flex-col max-md:justify-between items-center max-md:bg-yellow-600 max-md:px-4 max-md:py-1.5 max-md:rounded-lg">
                        <div className="w-full h-2.5 bg-yellow-500 rounded-sm max-md:hidden"/>
                        <h1 className="font-inter font-bold text-sm md:mt-2">Tidak sehat</h1>
                        <p className="font-inter text-xs/7 font-light max-md:text-neutral-200 text-neutral-400 md:-mt-1">101-200</p>
                    </div>
                    {/* Baik */}
                    <div className="flex md:flex-col max-md:justify-between items-center max-md:bg-red-500 max-md:px-4 max-md:py-1.5 max-md:rounded-lg">
                        <div className="w-full h-2.5 bg-red-500 rounded-sm max-md:hidden"/>
                        <h1 className="font-inter font-bold text-sm md:mt-2">Sangat tidak sehat</h1>
                        <p className="font-inter text-xs/7 font-light max-md:text-neutral-200 text-neutral-400 md:-mt-1">201-300</p>
                    </div>
                    {/* Baik */}
                    <div className="flex md:flex-col max-md:justify-between items-center max-md:bg-red-950 max-md:px-4 max-md:py-1.5 max-md:rounded-lg">
                        <div className="w-full h-2.5 bg-red-950 rounded-sm max-md:hidden"/>
                        <h1 className="font-inter font-bold text-sm md:mt-2">berbahaya</h1>
                        <p className="font-inter text-xs/7 font-light max-md:text-neutral-200 text-neutral-400 md:-mt-1"> &gt;300 </p>                        
                    </div>
                </div>
                <span className="font-inter block text-xs text-neutral-400 flex gap-2 mt-6">
                    <Info size={16}/>
                    <p>
                        Nama lima kategori sudah terverifikasi di Permen LHK No. 14 Tahun 2020. Baca lebih lanjut : <a className="text-neutral-200" target="_blank" href="https://peraturan.bpk.go.id/Read/156214/Permen%20LHK%20Nomor%2014%20Tahun%202020.pdf">peraturan.bpk.go.id</a>
                    </p>
                </span>
            </div>
            
        </>
    )
}

const EconomySection = () => {
    return(
        <>
            <div className="grid md:grid-cols-2 max-md:grid-rows-2 gap-4">
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg h-fit">
                    <span className="bg-red-500/20 rounded-2xl py-1 px-3 font-bold text-xs text-red-200 font-plusJktSans w-fit mb-4">Kerugian karhutla 2015 (catatan Bank Dunia)</span>
                    <h1 className="font-plusJktSans font-bold text-5xl my-2 text-red-500">Rp221 T</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl mb-4">Dari sekitar 2,6 juta hektare lahan yang terbakar, setara 4,5 kali luas Pulau Bali.</p>
                    <p className="font-inter text-xs font-light text-neutral-500 max-w-3xl">Sumber: Katadata, mengutip Bank Dunia (2015).</p>
                </div>

                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Dari mana kerugian itu datang?</h1>
                    <ul className="list-disc pl-5 space-y-2 font-inter text-md/7 font-medium text-neutral-200 marker:text-red-500">
                        <li>Biaya pengobatan dan hilangnya hari kerja</li>
                        <li>Gangguan transportasi dan pariwisata</li>
                        <li>Kerusakan kebun, hutan, dan hasil lahan</li>
                        <li>Biaya pemadaman dan pemulihan</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const ClimeSection = () => {
    return(
        <>
            <div className="grid md:grid-cols-2 max-md:grid-rows-2 gap-4">
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Karbon yang dilepas</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Gambut menyimpan karbon dalam jumlah besar. Saat terbakar, karbon itu terlepas ke udara dan ikut memperbesar emisi gas rumah kaca.</p>
                </div>
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Habitat yang hilang</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Hutan dan lahan gambut adalah rumah bagi banyak satwa dan tumbuhan. Setelah terbakar, pemulihannya membutuhkan waktu panjang.</p>
                </div>
            </div>
        </>
    )
}

const DailySection = () => {
    return(
        <>
            <div className="grid md:grid-cols-3 max-md:grid-rows-3 gap-4">
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Sekolah</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Kegiatan belajar di luar ruangan dibatasi, dan pada kondisi tertentu sekolah diliburkan.</p>
                </div>
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Perjalanan</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Jarak pandang menurun sehingga penerbangan dan transportasi darat dapat terganggu.</p>
                </div>
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Pekerjaan</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Pekerja luar ruang terpapar lebih lama dan butuh perlindungan serta pengaturan kerja.</p>
                </div>
            </div>
        </>
    )
}