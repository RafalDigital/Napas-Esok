import { useState } from "react";

export default function Six() {
    return(
        <>
            <div className="w-full max-w-7xl mx-auto">
                <span className="font-inter block font-semibold text-xs text-red-300 tracking-widest mb-2">07 · PENUTUP</span>
                <h1 className="font-plusJktSans font-bold text-4xl mb-3">Uji pemahamanmu</h1>
                <p className="font-inter text-lg/8 font-light text-neutral-400 max-w-3xl">Lima soal singkat dari apa yang baru kamu baca.</p>

                <QuizZZZEE/>
            </div>
        </>
    )
}

const quizData = [
  {
    question: "Jenis lahan mana yang membuat kebakaran di Indonesia sangat sulit dipadamkan?",
    options: [
      {
        text: "Lahan gambut",
        isCorrect: true,
        explanation: "Gambut bisa terbakar membara di bawah tanah dan menyimpan panas lama."
      },
      {
        text: "Pantai berpasir",
        isCorrect: false,
        explanation: "Pasir tidak menyimpan bahan organik yang bisa terbakar di bawah tanah."
      },
      {
        text: "Lahan kapur",
        isCorrect: false,
        explanation: "Lahan kapur bukan jenis lahan yang dikenal membara di bawah tanah. Yang dimaksud adalah gambut."
      },
      {
        text: "Sawah irigasi",
        isCorrect: false,
        explanation: "Sawah irigasi tergenang air, jadi bukan lahan yang sulit dipadamkan saat terbakar."
      }
    ]
  },
  {
    question: "Menurut pernyataan Kepala BNPB (2019), karhutla sebagian besar dipicu oleh…",
    options: [
      {
        text: "Petir",
        isCorrect: false,
        explanation: "Petir bukan penyebab utama menurut pernyataan tersebut."
      },
      {
        text: "Ulah manusia",
        isCorrect: true,
        explanation: "Pernyataan tersebut menyebut sekitar 99 persen karhutla karena ulah manusia."
      },
      {
        text: "Letusan gunung",
        isCorrect: false,
        explanation: "Letusan gunung bukan penyebab yang disebut dalam pernyataan tersebut."
      },
      {
        text: "Gempa bumi",
        isCorrect: false,
        explanation: "Gempa bumi bukan penyebab yang disebut dalam pernyataan tersebut."
      }
    ]
  },
  {
    question: "Bank Dunia mencatat kerugian karhutla 2015 sekitar…",
    options: [
      {
        text: "Rp22 miliar",
        isCorrect: false,
        explanation: "Angka ini jauh di bawah catatan Bank Dunia. Kerugiannya mencapai ratusan triliun rupiah."
      },
      {
        text: "Rp221 miliar",
        isCorrect: false,
        explanation: "Satuannya keliru. Yang dicatat adalah Rp221 triliun, bukan miliar."
      },
      {
        text: "Rp221 triliun",
        isCorrect: true,
        explanation: "Rp221 triliun, dari sekitar 2,6 juta hektare lahan terbakar."
      },
      {
        text: "Rp2.210 triliun",
        isCorrect: false,
        explanation: "Angka ini sepuluh kali lipat dari catatan Bank Dunia, yaitu Rp221 triliun."
      }
    ]
  },
  {
    question: "Kalau melihat api di lahan dekat rumahmu, langkah awal yang tepat adalah…",
    options: [
      {
        text: "Memadamkannya sendiri",
        isCorrect: false,
        explanation: "Api di lahan, terutama gambut, bisa cepat meluas dan berbahaya bagi orang yang tidak terlatih."
      },
      {
        text: "Menjauh dan melapor",
        isCorrect: true,
        explanation: "Jauhi dan segera laporkan ke 112 atau pemadam kebakaran 113, lalu beri tahu aparat desa."
      },
      {
        text: "Menunggu sampai membesar",
        isCorrect: false,
        explanation: "Api yang dibiarkan akan makin sulit dipadamkan. Laporkan sedini mungkin."
      },
      {
        text: "Membakar sekitarnya",
        isCorrect: false,
        explanation: "Membakar sekitar api justru bisa membuat api menyebar lebih luas."
      }
    ]
  },
  {
    question: "Kelompok yang paling rentan terhadap asap karhutla adalah…",
    options: [
      {
        text: "Atlet muda",
        isCorrect: false,
        explanation: "Atlet muda bukan kelompok yang disebut Kemenkes sebagai paling rentan."
      },
      {
        text: "Anak-anak, lansia, ibu hamil, penderita penyakit kronis",
        isCorrect: true,
        explanation: "Itulah kelompok yang disebut Kemenkes sebagai paling rentan."
      },
      {
        text: "Semua sama rentannya",
        isCorrect: false,
        explanation: "Asap memengaruhi semua orang, tetapi sebagian kelompok lebih rentan daripada yang lain."
      },
      {
        text: "Hanya perokok",
        isCorrect: false,
        explanation: "Risiko asap tidak terbatas pada perokok."
      }
    ]
  },
];


function QuizZZZEE() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quizData[currentIndex];
  const isAnswered = selectedIndex !== null;
  const selectedOption = isAnswered ? currentQuestion.options[selectedIndex] : null;
  const progressBar = ((currentIndex) / quizData.length) * 100;

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedIndex(index);
    if (currentQuestion.options[index].isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
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

  const isCorrectAll = score === quizData.length;
//   const isNearlyCorrectAll = score === quizData.length - 1;

  if (isFinished) {
    return (
      <>
        <div className="p-8 mt-6 bg-neutral-800/60 border border-neutral-700 rounded-lg text-white flex flex-col justify-center items-center">
        <span className="bg-red-500/20 rounded-2xl py-1 px-3 font-bold text-xs text-red-300 font-plusJktSans w-fit mb-4">Hasil</span>
            <h1 className="font-plusJktSans font-black text-[#EF4444] text-7xl mb-6">
            {score}/{quizData.length}
            </h1>
            <h1 className="font-plusJktSans font-bold text-2xl mb-2">{isCorrectAll ? 'Sempurna' : 'Baca lagi, yuk'}</h1>
            <p className="font-inter text-md/7 font-light text-neutral-400 max-w-3xl">{isCorrectAll ? 'Kamu sudah mengenali karhutla dari akarnya.' : 'Ulangi bagian di atas, lalu coba kuisnya lagi.'}</p>

            <button onClick={handleReset} className="px-5 py-2.5 mt-4 cursor-pointer border border-neutral-700 bg-neutral-800/60 font-inter font-medium text-sm rounded-lg hover:bg-neutral-700/40 transition-all">
            Ulangi
            </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="p-6 mt-6 bg-neutral-800/60 border border-neutral-700 rounded-lg text-white">
        <span className="block font-medium text-sm text-neutral-400 font-plusJktSans w-fit">
          Soal {currentIndex + 1} dari {quizData.length}
        </span>

        <div className="w-full h-2 bg-neutral-700 rounded-full my-4 overflow-hidden">
          <div className="h-full bg-red-500 rounded-full transition-all duration-300" style={{ width: `${progressBar}%` }}/>
        </div>

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
              <button key={idx} disabled={isAnswered} onClick={() => handleSelectOption(idx)} className={`flex items-center text-left gap-3 p-3 border rounded-xl transition-all ${isAnswered ? "cursor-default" : "cursor-pointer"} ${buttonStyle}`}>
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
            <button onClick={handleNext} className="px-5 py-2.5 self-end cursor-pointer border border-red-400 bg-[#EF4444] font-inter font-medium text-sm rounded-lg hover:bg-[#EF4444]/80 transition-all">
              {currentIndex === quizData.length - 1 ? "Selesai" : "Lanjut"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}