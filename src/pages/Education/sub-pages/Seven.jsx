import { RiArrowRightLongLine } from "@remixicon/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Seven() {

    const referenceData = [
        {
            title: "Kemenkes: data ISPA dan anjuran kesehatan",
            content: (
                <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://www.badankebijakan.kemkes.go.id/?p=12936">Karhutla di Indonesia: Saat Asap Datang, Kita Siap</a>, Badan Kebijakan Pembangunan Kesehatan. Dipakai untuk: kasus ISPA, penduduk terdampak, kelompok rentan, anjuran kurangi aktivitas luar ruangan dan segera cari pertolongan. Catatan: artikel ini ditulis seorang penulis di situs BKPK (6 September 2026), bukan pedoman resmi tertulis.</p>
            )
        },
        {
            title: "Bank Dunia (via Katadata): kerugian 2015",
            content: (
                <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://katadata.co.id/infografik/5e9a56e369cd9/rp-221-triliun-kerugian-akibat-kebakaran-hutan">Rp 221 Triliun Kerugian Akibat Kebakaran Hutan</a>. Dipakai untuk: kerugian Rp221 triliun, 2,6 juta hektare.</p>
            )
        },
        {
            title: "Permen LHK No. 14 Tahun 2020: ISPU",
            content: (
                <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://peraturan.go.id/files/bn774-2020.pdf">Berita Negara No. 774 Tahun 2020</a>. Dipakai untuk: lima kategori ISPU. Rentang angka dan warna ada di Lampiran II.</p>
            )
        },
        {
            title: "Penanganan: cara dan aksi nyata",
            content: ( 
                <>
                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://inet.detik.com/science/d-8639958/karhutla-gambut-sulit-dipadamkan-ini-penjelasan-pakar-ipb">Karhutla gambut sulit dipadamkan, ini penjelasan pakar IPB</a>. detikInet, 29 Agustus 2026. Dipakai untuk: batas muka air 40 cm (PP 71/2014), prioritas pencegahan, deteksi dini, penegakan hukum.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://nu.or.id/nasional/pemerintah-perkuat-teknologi-dan-peran-masyarakat-desa-untuk-cegah-kebakaran-lahan-gambut-H2E00">Pemerintah Perkuat Teknologi dan Peran Masyarakat Desa untuk Cegah Kebakaran Lahan Gambut</a>. NU Online, 25 September 2026. Dipakai untuk: batas 40 cm, vegetasi penutup, bor dangkal dan pompa portabel, modifikasi cuaca.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://www.rctiplus.com/news/detail/nasional/5458960/pencegahan-karhutla-harus-berbasis-sains-dan-verifikasi">Pencegahan Karhutla Harus Berbasis Sains dan Verifikasi</a>. RCTI+ (mengutip Sindonews), 25 Agustus 2026. Dipakai untuk: data yang dipantau, verifikasi titik panas, pemeriksaan penyebab kejadian.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://www.goodnewsfromindonesia.id/indonesiana/alam-lingkungan/upaya-pemerintah-memadamkan-karhutla">Dari Modifikasi Cuaca hingga Water Bombing, Begini Upaya Pemerintah Memadamkan Karhutla</a>. Good News from Indonesia. Dipakai untuk: cara pemadaman darat, pendinginan gambut, water bombing, modifikasi cuaca.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://www.metrotvnews.com/read/bVDCPWmO-bnpb-terapkan-suntik-gambut-atasi-karhutla-di-kalbar">BNPB Terapkan Suntik Gambut Atasi Karhutla di Kalbar</a>. Metro TV, 5 September 2026. Dipakai untuk: teknik suntik gambut.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://katadata.co.id/berita/nasional/6aa2c51ec90dc/bnpb-water-bombing-tak-efektif-jika-karhutla-sudah-membesar">BNPB: Water Bombing Tak Efektif Jika Karhutla Sudah Membesar</a>. Katadata, 10 September 2026. Dipakai untuk: kapan water bombing efektif.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://www.rctiplus.com/news/detail/okezone/5504141/kendalikan-karhutla--bnpb-optimalkan-pemadaman-darat-udara-dan-omc">Kendalikan Karhutla, BNPB Optimalkan Pemadaman Darat-Udara dan OMC</a>. Okezone/RCTI+, 29 Oktober 2026. Dipakai untuk: Satgas Darat 51.057 personel, 61 armada udara, modifikasi cuaca 18 sorti.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://setkab.go.id/4-provinsi-berlakukan-siaga-darurat-kebakaran-hutan-dan-lahan/">4 Provinsi Berlakukan Siaga Darurat Kebakaran Hutan dan Lahan</a>. Setkab, 21 Februari 2018. Dipakai untuk: BPBD dalam tim gabungan bersama TNI dan Polri.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://kaltim.antaranews.com/berita/139065/brgm-lakukan-mitigasi-banjir-dan-karhutla-di-lahan-gambut">BRGM lakukan mitigasi banjir dan karhutla di lahan gambut</a>. ANTARA Kaltim, 13 Januari 2022. Dipakai untuk: sekat kanal, timbun kanal, sumur bor, peringatan dini SIPALAGA dan FDRS Gambut.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://www.nu.or.id/lingkungan/tujuan-restorasi-gambut-perbaiki-perilaku-sosial-dan-praktik-ekonomi-XzoYw">Tujuan Restorasi Gambut Perbaiki Perilaku Sosial dan Praktik Ekonomi</a>. NU Online. Dipakai untuk: 3R, revegetasi, revitalisasi, contoh usaha warga.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://lestari.kompas.com/read/2024/06/14/200000486/brgm-klaim-telah-restorasi-gambut-1-8-juta-hektar-sepanjang-2016-2023">BRGM Klaim Telah Restorasi Gambut 1,8 Juta Hektar Sepanjang 2016-2023</a>. Kompas, 14 Juni 2024. Hanya judul yang terbaca; baca artikel lengkapnya.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://infopublik.id/kategori/bencana/994014/kemenhut-perkuat-kolaborasi-masyarakat-untuk-cegah-dan-tangani-karhutla">Kemenhut Perkuat Kolaborasi Masyarakat untuk Cegah dan Tangani Karhutla</a>. InfoPublik, 21 Oktober 2026. Dipakai untuk: Masyarakat Peduli Api (14.040 anggota).</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://www.metrotvnews.com/read/kewCjYAD-kemenhut-evaluasi-standar-personel-dan-alat-manggala-agni">Kemenhut Evaluasi Standar Personel dan Alat Manggala Agni</a>. Metro TV, 14 Juli 2026. Dipakai untuk: evaluasi kesiapan.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://www.hukumonline.com/berita/a/melihat-pasal-pasal-penjerat-pelaku-pembakar-hutan-dan-lahan-lt5f16ba762542c/">Melihat Pasal-Pasal Penjerat Pelaku Pembakar Hutan dan Lahan</a>. Hukumonline, 21 Juli 2020. Dipakai untuk: larangan dan sanksi UU 32/2009. Cek ke naskah resmi.</p>
                </>    
            )
        },
        {
            title: "Kemenkes: data ISPA dan anjuran kesehatan",
            content: (
                <>
                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://www.rctiplus.com/news/detail/gaya-hidup/5461124/jaga-kesehatan-anak-di-tengah-karhutla--idai-beri-rekomendasi-penting">Jaga Kesehatan Anak di Tengah Karhutla, IDAI Beri Rekomendasi Penting</a>. RCTI+ (mengutip Sindonews), 28 Agustus 2026. Dipakai untuk: respirator N95, tetap di dalam dengan pintu dan jendela tertutup, AC sirkulasi tertutup, pemurni udara, persiapan minimal 5 hari.</p>
                    
                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://www.goodnewsfromindonesia.id/2025/03/03/daftar-nomor-telepon-gawat-darurat-di-indonesia-dan-fungsi-nomor-112">Daftar Nomor Telepon Gawat Darurat di Indonesia dan Fungsi Nomor 112</a>. Good News from Indonesia, 3 Maret 2025. Dipakai untuk: nomor 112, 113, 115, 117, 118/119, dan cara kerja 112.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://katadata.co.id/lifestyle/varia/6aebb816dc64c/daftar-nomor-darurat-indonesia-yang-bisa-dihubungi-saat-siaga-darurat">Daftar Nomor Darurat Indonesia yang Bisa Dihubungi Saat Siaga Darurat</a>. Katadata, 5 November 2026. Dipakai untuk: pencocokan nomor darurat, termasuk BMKG 196.</p>

                    <p className="font-inter text-sm/7 font-light text-neutral-300 max-w-3xl mb-2"><a className="underline text-red-500" href="https://voi.id/en/amp/69969">BNPB Orders BPBD To Prevent Forest And Land Fires Early, Here Are The Steps</a>. VOI, 2021. Dipakai untuk: BNPB meminta BPBD menyiapkan helpdesk, posko pelaporan, dan Call Center 117 untuk koordinasi.</p>
                </>
            )
        },
    ]

    
    return(
        <>
            <div className="w-full max-w-7xl mx-auto">
                <h1 className="font-plusJktSans font-bold text-4xl mb-4 max-w-xl">Referensi</h1>
                <p className="font-inter text-lg/8 font-light text-neutral-400 max-w-3xl mb-4">Angka dan klaim di halaman ini bersumber dari tautan berikut. Diakses 12 November 2026.</p>
                <div className="border-t border-neutral-700">

                {referenceData.map((item, index) => (
                    <AccordionCard key={index} title={item.title} content={item.content}/>
                ))}
                </div>
                <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-lg text-white mt-16">
                    <h1 className="font-plusJktSans font-bold text-xl mb-2">Siap melihat kondisi di daerahmu?</h1>
                    <p className="font-inter text-md/8 font-light text-neutral-400 mb-4">Buka pantauan titik panas dan kualitas udara secara langsung.</p>
                    <a className="px-5 py-2.5 flex gap-2 w-fit cursor-pointer border border-red-400 bg-[#EF4444] font-inter font-medium text-sm rounded-lg hover:bg-[#EF4444]/80 transition-all group">Buka pantauan <RiArrowRightLongLine className="group-hover:translate-x-1.5 transition-all"/></a>
                </div>
            </div>
            
        </>
    )
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

      <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
        <div className="overflow-hidden">
            {content}
        </div>
      </div>
    </div>
  );
}