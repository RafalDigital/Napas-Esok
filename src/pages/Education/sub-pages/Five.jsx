export default function Five() {
    return(
        <>
            <div className="w-full max-w-7xl mx-auto">
                <span className="font-inter block font-semibold text-xs text-red-300 tracking-widest mb-2">05 · PERANMU</span>
                <h1 className="font-plusJktSans font-bold text-4xl mb-3 max-w-xl">Kalau kamu warga di daerah berapi dan berasap tebal</h1>
                <p className="font-inter text-lg/8 font-light text-neutral-400 max-w-3xl mb-6">Ini bagian yang paling berguna. Mulai dari membaca kondisi udara, lalu coba skenario satu hari di tengah asap.</p>

                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                    <h1 className="font-plusJktSans font-bold text-2xl max-md:max-w-60 mb-2">Kondisi udara hari ini, kamu harus apa?</h1>
                    <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl mb-4">Panduan tindakan berdasarkan kategori ISPU.</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3 py-1.5 rounded-lg">
                            <div className="w-2.5 bg-green-500 rounded-sm shrink-0"/>
                            <div className="flex flex-col">
                                <h1 className="font-inter font-bold text-md">Baik</h1>
                                <p className="font-inter text-sm/6 font-light max-md:text-neutral-200">Udara cukup aman. Aktivitas normal. Tetap pantau jika ada asap di sekitarmu.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 py-1.5 rounded-lg">
                            <div className="w-2.5 bg-blue-600 rounded-sm shrink-0"/>
                            <div className="flex flex-col">
                                <h1 className="font-inter font-bold text-md">Sedang</h1>
                                <p className="font-inter text-sm/6 font-light max-md:text-neutral-200">Umumnya masih dapat diterima. Kelompok yang sensitif sebaiknya memperhatikan gejala saat beraktivitas di luar.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 py-1.5 rounded-lg">
                            <div className="w-2.5 bg-yellow-500 rounded-sm shrink-0"/>
                            <div className="flex flex-col">
                                <h1 className="font-inter font-bold text-md">Tidak sehat</h1>
                                <p className="font-inter text-sm/6 font-light max-md:text-neutral-200">Kurangi aktivitas di luar ruangan, terutama anak, lansia, ibu hamil, dan penderita penyakit kronis. Pakai masker bila harus keluar.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 py-1.5 rounded-lg">
                            <div className="w-2.5 bg-red-500 rounded-sm shrink-0"/>
                            <div className="flex flex-col">
                                <h1 className="font-inter font-bold text-md">Sangat tidak sehat</h1>
                                <p className="font-inter text-sm/6 font-light max-md:text-neutral-200">Hindari aktivitas di luar ruangan. Kelompok rentan tetap di dalam, tutup pintu dan jendela, dan cari ruangan dengan udara paling bersih. Waspada gejala.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 py-1.5 rounded-lg">
                            <div className="w-2.5 bg-red-950 rounded-sm shrink-0"/>
                            <div className="flex flex-col">
                                <h1 className="font-inter font-bold text-md">Berbahaya</h1>
                                <p className="font-inter text-sm/6 font-light max-md:text-neutral-200">Tetap di dalam ruangan dan ikuti arahan pemerintah daerah. Segera cari pertolongan bila sesak atau kondisi memburuk.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 max-md:grid-rows-2 gap-4 mt-4">
                    <div className="p-6 bg-neutral-800/60 border border-red-500/60 rounded-lg">
                        <span className="bg-red-500/20 rounded-2xl py-1 px-3 font-bold text-xs text-red-200 font-plusJktSans w-fit mb-4">Ada api terlihat</span>
                        <h1 className="font-plusJktSans font-bold text-2xl mt-2 mb-4 max-w-60">Jauhi, lalu laporkan</h1>
                        <ul className="list-disc pl-5 mb-4 space-y-2 font-inter text-md/7 font-light text-neutral-200 marker:text-red-500">
                            <li>Jangan memadamkan sendiri, apalagi api di lahan gambut</li>
                            <li>Menjauh ke arah berlawanan dengan angin</li>
                            <li>Hubungi 112, BPBD, atau aparat desa. Sebut lokasi sejelas mungkin</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-neutral-800/60 border border-yellow-500/60 rounded-lg">
                        <span className="bg-yellow-500/20 rounded-2xl py-1 px-3 font-bold text-xs text-yellow-200 font-plusJktSans w-fit mb-4">Asap sudah tebal</span>
                        <h1 className="font-plusJktSans font-bold text-2xl mt-2 mb-4 max-w-60">Lindungi napasmu</h1>
                        <ul className="list-disc pl-5 mb-4 space-y-2 font-inter text-md/7 font-light text-neutral-200 marker:text-red-500">
                            <li>Kurangi aktivitas di luar ruangan, terutama anak, lansia, ibu hamil, dan penderita penyakit kronis</li>
                            <li>Tutup pintu dan jendela, cari ruangan dengan udara paling bersih</li>
                            <li>Segera cari pertolongan jika sesak atau kondisi memburuk</li>
                        </ul>
                    </div>
                </div>

                <ScenarioQuiz/>

            </div>
        </>
    )
}

function ScenarioQuiz() {
    return(
        <>
            <h1 className="font-plusJktSans font-bold text-2xl mt-8 mb-4">Skenario: satu hari di tengah asap</h1>
            <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg">
                <span className="font-medium text-sm text-neutral-400 font-plusJktSans w-fit mb-4">Situasi 2 dari 4</span>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-neutral-700 rounded-full my-4 overflow-hidden">
                    <div className="h-full w-full bg-red-500 rounded-full"></div>
                </div>
                
                <span className="font-semibold text-sm text-red-300 font-inter w-fit mb-4">Sore · 16.30</span>
                <h1 className="font-plusJktSans font-bold text-2xl mb-4">Asap makin tebal dan adikmu mulai batuk. Apa yang paling tepat?</h1>

                <div className="flex flex-col gap-2">
                    <button className={`flex items-center gap-3 p-3 bg-neutral-800/60 border border-neutral-700 rounded-xl cursor-pointer hover:bg-neutral-700 hover:border-neutral-600 transition-all`}>
                        <div className="w-5 h-5 rounded-full border border-neutral-700"/>                        
                        Mengajaknya bermain di luar karena bosan di rumah
                    </button>
                </div>
                {/* Info dan button - hanya muncul ketika sudah menjawab */}
                <span className="flex gap-2 font-inter text-white font-medium text-sm my-4">
                    <span>Belum Tepat</span>
                    karena ....
                </span>
                <button className="px-5 py-2.5 flex place-self-end cursor-pointer border border-red-400 bg-[#EF4444] font-inter font-medium text-sm rounded-lg hover:bg-[#EF4444]/40 transition-all">
                    Lanjut
                </button>
            </div>
        </>
    )
}