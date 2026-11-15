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

                {/* <main> */}
                    {renderCategory[impactCategory]}
                {/* </main> */}
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
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
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
            <div className="grid md:grid-cols-3 max-md:grid-rows-3 gap-4">
                

                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <span className="bg-red-500/20 rounded-2xl py-1.5 px-3 font-bold text-xs text-red-200 font-plusJktSans w-fit mb-4">Warga dan keluarga</span>
                    <h1 className="font-plusJktSans font-bold text-2xl my-2">Uang keluar, penghasilan berkurang</h1>
                    <ul className="list-disc pl-5 mt-4 space-y-2 font-inter text-md/7 font-light text-neutral-200 marker:text-red-500">
                        <li>Biaya berobat dan membeli masker bertambah.</li>
                        <li>Pekerja luar ruang dan pekerja harian sulit bekerja saat asap tebal.</li>
                        <li>Orang tua harus menyesuaikan pekerjaan saat sekolah anak libur.</li>
                    </ul>
                    <p className="p-3 bg-neutral-800 text-xs/4 text-neutral-400 max-w-3xl mt-2 rounded-lg border border-neutral-700/60">Contoh nyata: di Kota Jambi, kasus ISPA naik sekitar 15% menjadi 1.955 kasus dan penjualan masker ikut naik. Pada 2019, lebih dari 900 ribu orang di Indonesia mengalami gangguan pernapasan. 
                    <span className="mt-2 block">CNA Indonesia (25 Agu 2026); Mongabay Indonesia (16 Des 2019), mengutip Bank Dunia.</span></p>
                </div>

                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <span className="bg-red-500/20 rounded-2xl py-1.5 px-3 font-bold text-xs text-red-200 font-plusJktSans w-fit mb-4">Pelaku usaha</span>
                    <h1 className="font-plusJktSans font-bold text-2xl my-2">Produksi dan perjalanan terhenti</h1>
                    <ul className="list-disc pl-5 mt-4 space-y-2 font-inter text-md/7 font-light text-neutral-200 marker:text-red-500">
                        <li>Kebun, hutan tanaman, dan lahan yang terbakar berhenti berproduksi.</li>
                        <li>Penerbangan batal sehingga maskapai dan penumpang sama-sama rugi.</li>
                        <li>Usaha yang bergantung pada pengunjung, seperti warung dan wisata, sepi saat orang menghindari luar rumah.</li>
                    </ul>
                    <p className="p-3 bg-neutral-800 text-xs/4 text-neutral-400 max-w-3xl mt-2 rounded-lg border border-neutral-700/60">Contoh nyata: Agustus 2026, penumpang penerbangan Jakarta-Singkawang yang batal mendapat pengembalian dana penuh atau ganti jadwal gratis. Pada 2019, 12 bandara nasional berhenti beroperasi.
                    <span className="mt-2 block">CNBC Indonesia (21 Agu 2026); Mongabay Indonesia (16 Des 2019).</span></p>
                </div>

                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <span className="bg-red-500/20 rounded-2xl py-1.5 px-3 font-bold text-xs text-red-200 font-plusJktSans w-fit mb-4">Negara</span>
                    <h1 className="font-plusJktSans font-bold text-2xl my-2">Biaya penanganan dan pertumbuhan</h1>
                    <ul className="list-disc pl-5 mt-4 space-y-2 font-inter text-md/7 font-light text-neutral-200 marker:text-red-500">
                        <li>Pemadaman api dan pemulihan lahan membutuhkan dana besar.</li>
                        <li>Layanan kesehatan menanggung lonjakan pasien.</li>
                        <li>Ekonomi tumbuh lebih lambat karena kegiatan usaha terganggu.</li>
                    </ul>
                    <p className="p-3 bg-neutral-800 text-xs/4 text-neutral-400 max-w-3xl mt-2 rounded-lg border border-neutral-700/60">Contoh nyata: karhutla 2019 menekan pertumbuhan ekonomi sebesar 0,09% (2019) dan 0,05% (2020).
                    <span className="mt-2 block">Mongabay Indonesia (16 Des 2019), mengutip Bank Dunia.</span></p>
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
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Iklim memanas</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Gambut menyimpan karbon dalam jumlah sangat besar, menumpuk selama ribuan tahun. Saat terbakar, karbon itu terlepas ke udara dan menambah gas rumah kaca penyebab pemanasan global.</p>
                </div>
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Habitat satwa hilang</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Hutan dan lahan gambut adalah rumah bagi banyak satwa dan tumbuhan. Saat terbakar, habitat itu rusak, dan pemulihannya membutuhkan waktu panjang..</p>
                </div>
            </div>
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg mt-4">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Jadi urusan antarnegara</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Asap sampai ke negara tetangga, sehingga karhutla tidak hanya urusan dalam negeri. Karena itu negara-negara ASEAN menyepakati perjanjian asap lintas batas pada 2002. Indonesia menyetujuinya pada 16 September 2014 dan menyerahkan ratifikasinya pada 20 Januari 2015.</p>
                    <p className="p-3 bg-neutral-800 text-xs/4 text-neutral-400 max-w-3xl mt-2 rounded-lg border border-neutral-700/60">Studi gabungan Universitas Harvard dan Universitas Columbia memperkirakan bahwa kabut asap akibat kebakaran hutan dan lahan di Asia Tenggara pada tahun 2015 menyebabkan rata-rata 100.300 kematian dini. Angka tersebut mencakup 91.600 kematian dini di Indonesia, 6.500 di Malaysia, dan 2.200 di Singapura berdasarkan pemodelan statistik paparan PM2.5.</p>
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
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Anak-anak termasuk kelompok yang paling rentan terhadap asap. Kegiatan di luar ruangan dibatasi dan, pada kondisi tertentu, sekolah diliburkan lalu belajar dialihkan ke rumah.n</p>
                    <p className="p-3 bg-neutral-800 text-xs/4 text-neutral-400 max-w-3xl mt-2 rounded-lg border border-neutral-700/60">Agustus 2026, Gubernur Jambi meliburkan sekolah dari PAUD sampai SMA karena kabut asap makin pekat. <span className="mt-2 block">CNA Indonesia, 25 Agu 2026.</span></p>
                </div>
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Perjalanan</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Asap menurunkan jarak pandang. Pesawat sulit mendarat dan lepas landas dengan aman, dan pengemudi di jalan raya ikut terganggu.</p>
                    <p className="p-3 bg-neutral-800 text-xs/4 text-neutral-400 max-w-3xl mt-2 rounded-lg border border-neutral-700/60">16-19 Agustus 2026, jarak pandang di Singkawang tercatat sekitar 2-3 km dan sejumlah penerbangan Jakarta-Singkawang dibatalkan. 
                    <span className="mt-2 block">CNBC Indonesia (21 Agu 2026), Katadata (20 Agu 2026).</span>
                    </p>
                </div>
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl mb-2">Aktivitas luar ruangan</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Warga diminta mengurangi aktivitas di luar ruangan, mulai memakai masker, dan berobat saat muncul batuk atau sesak.</p>
                    <p className="p-3 bg-neutral-800 text-xs/4 text-neutral-400 max-w-3xl mt-2 rounded-lg border border-neutral-700/60">Contoh nyata: di Kota Jambi kasus ISPA naik sekitar 15% menjadi 1.955 kasus, dan penjualan masker ikut naik, terutama masker anak-anak. <span className="mt-2 block">CNA Indonesia, 25 Agu 2026.</span></p>
                </div>
            </div>
            <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg mt-4">
                <h1 className="font-plusJktSans font-bold text-2xl mb-2">Dampak yang tidak terlihat dari libur sekolah</h1>
                <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">Libur karena asap bukan sekadar istirahat. Saat Jambi dan Palangka Raya menutup sekolah pada Oktober 2023 (PM2,5 di Palangka Raya tercatat di atas 350 µg/m³ pada 5 Oktober), Mongabay mencatat belajar dari rumah berisiko memperlebar kesenjangan belajar, terutama bagi siswa tanpa internet yang andal dan anak berkebutuhan khusus.</p>
            </div>
        </>
    )
}