import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Five() {

    const accordionData = [
        {title: '"Masker kain biasa sudah cukup."', content: 'Partikel asap sangat halus, sehingga masker kain biasa umumnya kurang menyaring. Masker yang lebih rapat dan berstandar penyaring partikel (seperti N95 atau KN95) lebih disarankan, dan harus terpasang menutup hidung serta mulut tanpa celah.'},
        {title: '"Tidak ada api terlihat, berarti sudah padam."', content: 'Api di lahan gambut bisa membara di dalam tanah tanpa nyala yang terlihat, lalu muncul lagi di permukaan. Asap tipis di atas tanah adalah tanda yang perlu dilaporkan.'},
        {title: '"Asap hanya berbahaya bagi yang dekat dengan api."', content: 'Asap terbawa angin sampai jauh. Partikel halusnya (PM2,5) dapat masuk hingga paru-paru, jadi warga yang jauh dari lokasi api pun bisa terdampak.'},
        {title: '"Kalau tidak sesak, tidak perlu waspada."', content: 'Paparan asap dapat memicu atau memperburuk gejala secara bertahap. Pantau diri dan keluarga, terutama kelompok rentan, dan cari pertolongan segera jika muncul sesak atau kondisi memburuk.'},
    ]

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

                <div className="py-8">
                    <h1 className="font-plusJktSans font-bold text-2xl pb-3 border-b border-neutral-700">Kesalahan yang sering terjadi</h1>
                    {accordionData.map((item, index) => (
                        <AccordionCard key={index} title={item.title} content={item.content}/>
                    ))}
                </div>

            </div>
        </>
    )
}

const scenarioData = [
  {
    time: "Pagi · 06.30",
    question: "Langit berwarna oranye dan tercium bau asap. Aplikasi pemantau menunjukkan ISPU kategori sangat tidak sehat. Apa yang kamu lakukan?",
    options: [
      {
        text: "Buka semua jendela agar udara segar masuk",
        isCorrect: false,
        explanation: "membuka jendela justru membiarkan udara luar yang sarat polutan dan partikel berbahaya masuk ke dalam rumah."
      },
      {
        text: "Tetap lari pagi seperti biasa",
        isCorrect: false,
        explanation: "menghirup partikel asap secara langsung bisa langsung mengiritasi saluran pernapasan."
      },
      {
        text: "Tunda aktivitas di luar ruangan dan pantau informasi resmi",
        isCorrect: true,
        explanation: "Pada kategori sangat tidak sehat, aktivitas di luar ruangan sebaiknya dihindari, dan jendela sebaiknya ditutup agar asap tidak masuk."
      }
    ]
  },
  {
    time: "Siang · 13.00",
    question: "Kamu melihat api kecil di kebun gambut dekat rumah. Tindakan pertamamu?",
    options: [
      {
        text: "Menjauh dan segera melapor ke 112, BPBD, atau aparat desa",
        isCorrect: true,
        explanation: "Api gambut bisa membara di bawah tanah dan menjalar. Keselamatanmu dulu, lalu lapor secepatnya dengan menyebut lokasi yang jelas."
      },
      {
        text: "Menyiramnya sendiri dengan seember air",
        isCorrect: false,
        explanation: "api pada lahan gambut sangat sulit dipadamkan hanya dengan air sedikit karena membara di dalam tanah."
      },
      {
        text: "Memotretnya untuk media sosial, tanpa melapor",
        isCorrect: false,
        explanation: "tindakan ini membuang waktu krusial dan membiarkan api membesar serta membahayakan lingkungan sekitar."
      }
    ]
  },
  {
    time: "Sore · 16.30",
    question: "Asap makin tebal dan adikmu mulai batuk. Apa yang paling tepat?",
    options: [
      {
        text: "Mengajaknya bermain di luar karena bosan di rumah",
        isCorrect: false,
        explanation: "membawa anak ke luar ruangan saat udara sangat berpolusi akan memperparah iritasi saluran pernapasannya."
      },
      {
        text: "Tetap di dalam, tutup pintu dan jendela, pantau gejalanya",
        isCorrect: true,
        explanation: "Anak termasuk kelompok rentan. Kurangi paparan dengan tetap di dalam ruangan dan pantau gejalanya."
      },
      {
        text: "Membiarkan jendela terbuka supaya ruangan tidak pengap",
        isCorrect: false,
        explanation: "membiarkan jendela terbuka membuat asap pekat dari luar leluasa masuk dan terhirup di dalam rumah."
      }
    ]
  },
  {
    time: "Malam · 20.00",
    question: "Adikmu sesak napas dan batuknya tidak reda. Apa yang harus dilakukan?",
    options: [
      {
        text: "Memberi obat batuk apa saja yang ada di rumah",
        isCorrect: false,
        explanation: "memberikan obat sembarangan tanpa resep dokter pada kondisi sesak napas sangat berbahaya bagi anak."
      },
      {
        text: "Menunggu sampai besok pagi",
        isCorrect: false,
        explanation: "menunda penanganan medis saat sesak napas bisa membuat kondisi adikmu semakin memburuk dan berisiko."
      },
      {
        text: "Segera mencari pertolongan ke fasilitas kesehatan",
        isCorrect: true,
        explanation: "Anjuran Kemenkes: segera cari pertolongan bila muncul sesak atau kondisi memburuk."
      }
    ]
  },
];

function ScenarioQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = scenarioData[currentIndex];
  const isAnswered = selectedIndex !== null;
  const selectedOption = isAnswered ? currentQuestion.options[selectedIndex] : null;
  const progressBar = ((currentIndex) / scenarioData.length) * 100;

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedIndex(index);
    if (currentQuestion.options[index].isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < scenarioData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedIndex(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setIsFinished(false);
  };

  const isCorrectAll = score === scenarioData.length;
  const isNearlyCorrectAll = score === scenarioData.length - 1;

  if (isFinished) {
    return (
      <>
        <h1 className="font-plusJktSans font-bold text-2xl mt-8 mb-4">Skenario: satu hari di tengah asap</h1>
        <div className="p-8 bg-neutral-800/60 border border-neutral-700 rounded-lg text-white flex flex-col justify-center items-center">
        <span className="bg-red-500/20 rounded-2xl py-1 px-3 font-bold text-xs text-red-300 font-plusJktSans w-fit mb-4">Hasil</span>
          <h1 className="font-plusJktSans font-black text-[#EF4444] text-7xl mb-6">
            {score}/{scenarioData.length}
          </h1>
          <h1 className="font-plusJktSans font-bold text-2xl mb-2">{isNearlyCorrectAll ? 'Kamu sudah cukup siap' : isCorrectAll ? 'Kamu siap menghadapi asap' : 'Coba ulangi, ya'}</h1>
            <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">{isNearlyCorrectAll ? 'Ada satu keputusan yang bisa lebih baik. Ulangi untuk melihat bedanya.' : isCorrectAll ? 'Semua keputusanmu tepat. Siapkan tas siaga di bawah, lalu bagikan ke keluarga.' : 'Beberapa keputusan tadi bisa berisiko. Baca lagi bagian di atas, lalu coba skenarionya lagi.'}</p>

          <button onClick={handleReset} className="px-5 py-2.5 mt-4 cursor-pointer border border-neutral-700 bg-neutral-800/60 font-inter font-medium text-sm rounded-lg hover:bg-neutral-700/40 transition-all">
            Ulangi
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="font-plusJktSans font-bold text-2xl mt-8 mb-4">Skenario: satu hari di tengah asap</h1>
      <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg text-white">
        <span className="block font-medium text-sm text-neutral-400 font-plusJktSans w-fit">
          Situasi {currentIndex + 1} dari {scenarioData.length}
        </span>

        <div className="w-full h-2 bg-neutral-700 rounded-full my-4 overflow-hidden">
          <div
            className="h-full bg-red-500 rounded-full transition-all duration-300"
            style={{ width: `${progressBar}%` }}
          />
        </div>

        <span className="block font-semibold text-sm text-red-300 font-inter w-fit mb-2">
          {currentQuestion.time}
        </span>
        <h1 className="font-plusJktSans font-bold text-2xl mb-4">
          {currentQuestion.question}
        </h1>

        <div className="flex flex-col gap-2">
          {currentQuestion.options.map((option, idx) => {
            const isThisSelected = selectedIndex === idx;
            
            let buttonStyle = "bg-neutral-800/60 border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600";
            let radioStyle = "border-neutral-600";

            if (isAnswered) {
              if (option.isCorrect) {
                buttonStyle = "bg-emerald-950/50 border-emerald-500/60 text-emerald-100";
                radioStyle = "border-emerald-400 bg-emerald-400";
              } else if (isThisSelected) {
                buttonStyle = "bg-red-950/50 border-red-500/60 text-red-100";
                radioStyle = "border-red-400 bg-red-400";
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`flex items-center text-left gap-3 p-3 border rounded-xl transition-all ${
                  isAnswered ? "cursor-default" : "cursor-pointer"
                } ${buttonStyle}`}
              >
                <div className={`w-5 h-5 shrink-0 rounded-full border transition-colors ${radioStyle}`} />
                <span className="font-inter text-sm">{option.text}</span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-4 pt-4 border-t border-neutral-700/60 flex flex-col">
            <p className="font-inter text-sm text-neutral-200 mb-4">
              <span className={`font-bold ${selectedOption.isCorrect ? "text-emerald-400" : "text-red-400"}`}>
                {selectedOption.isCorrect ? "Tepat!" : "Belum Tepat"}
              </span>{" "}
              karena {selectedOption.explanation}
            </p>
            <button
              onClick={handleNext}
              className="px-5 py-2.5 self-end cursor-pointer border border-red-400 bg-[#EF4444] font-inter font-medium text-sm rounded-lg hover:bg-[#EF4444]/80 transition-all"
            >
              {currentIndex === scenarioData.length - 1 ? "Selesai" : "Lanjut"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function AccordionCard({ title, content, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="py-4 border-b border-neutral-700 transition-colors duration-200 ">
      <h1 className="font-plusJktSans font-bold text-sm">
        <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} className="flex w-full items-center justify-between text-left cursor-pointer focus:outline-none">
          <span>{title}</span>
          <ChevronDown className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`} size={12}/>
        </button>
      </h1>

      <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
        <div className="overflow-hidden">
            <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-3">{content}</p>
        </div>
      </div>
    </div>
  );
}