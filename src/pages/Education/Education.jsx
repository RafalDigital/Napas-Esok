import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import One from "./sub-pages/One";
import Two from "./sub-pages/Two";
import Three from "./sub-pages/Three";
import Four from "./sub-pages/Four";
import Five from "./sub-pages/Five";
import Six from "./sub-pages/Six";
import Seven from "./sub-pages/Seven";
import Eight from "./sub-pages/Eight";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Education() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activatedMenu, setActivatedMenu] = useState("One");
    const [isLoading, setIsLoading] = useState(false);

    // true selama halaman sedang scroll otomatis karena menu diklik
    const isClicking = useRef(false);

    const Open = () => {
    setIsLoading(true);
    setIsMobileOpen((prev) => !prev)

    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

    const sideBarItems = [
        {label: "Apa itu karhutla", page: "One"},
        {label: "Penyebab", page: "Two"},
        {label: "Gambut", page: "Three"},
        {label: "Dampak", page: "Four"},
        {label: "Linimasa", page: "Five"},
        {label: "Mitos dan fakta", page: "Six"},
        {label: "Kuis", page: "Seven"},
        {label: "Reverensi", page: "Eight"},
    ]

    const goTo = (page) => {
        const el = document.getElementById(page);
        if (!el) return;

        setActivatedMenu(page);
        isClicking.current = true;
        el.scrollIntoView({ behavior: "smooth", block: "start" });

        setTimeout(() => {
            isClicking.current = false;
        }, 900);
    };

    useEffect(() => {
        const onScroll = () => {
            if (isClicking.current) return;


            const garis = 200;
            let current = sideBarItems[0].page;

            sideBarItems.forEach((item) => {
                const el = document.getElementById(item.page);
                if (el && el.getBoundingClientRect().top <= garis) {
                    current = item.page;
                }
            });

            const mentokBawah = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (mentokBawah) {
                current = sideBarItems[sideBarItems.length - 1].page;
            }

            setActivatedMenu(current);
        };

        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Mobile Header
    const headerName = sideBarItems.filter(item => item.page === activatedMenu).map((item) => item.label)
    const headerNumb = sideBarItems.findIndex(item => item.page === activatedMenu)

    return(
        <>
            <Navbar/>
            <ProgressBar/>
            <div className="min-h-[100dvh] bg-background flex items-start">
                <DesktopSideBar sideBarItems={sideBarItems} activatedMenu={activatedMenu} goTo={goTo}/>
                <MobileSideBar isMobileOpen={isMobileOpen} sideBarItems={sideBarItems} activatedMenu={activatedMenu} goTo={goTo} setIsMobileOpen={setIsMobileOpen}/>
                    {/* Header mobile only */}
                    <header className="md:hidden w-full fixed top-20 left-0 z-30 bg-background border-b border-t border-neutral-800 py-4 px-6 flex gap-6 items-center">
                        <button disabled={isLoading} onClick={Open}>
                            <div className="w-5 flex flex-col gap-1 justify-center items-start cursor-pointer">
                                <span className="h-0.5 w-full bg-white rounded-full"></span>
                                <span className="h-0.5 w-3/4 bg-white rounded-full"></span>
                                <span className="h-0.5 w-full bg-white rounded-full"></span>
                            </div>
                        </button>
                        <h1 className="flex gap-3 items-center">
                            <span className="text-red-400 text-xs">0{headerNumb + 1}</span>
                            {headerName}
                        </h1>
                    </header>

                    <main className="flex-1 overflow-auto max-md:pt-40 pt-32 px-12">
                        <header className="mb-12 border-b border-neutral-800 pb-12">
                            <span className="block text-xs w-fit px-3 py-1 font-plusJktSans font-bold border border-neutral-600 rounded-2xl mb-4">Edukasi</span>
                            <h1 className="text-6xl/18 md:max-w-lg font-plusJktSans font-bold mb-4">Kenali karhutla dari akarnya</h1>
                            <p className="text-lg text-neutral-400 font-inter max-w-2xl">Dari apa itu karhutla, mengapa terus berulang di Indonesia, sampai apa yang bisa kamu lakukan kalau api dan asap sudah ada di sekitarmu.</p>
                        </header>
                        <section id="One" className="scroll-mt-28 max-md:scroll-mt-44 pb-24"><One/></section>
                        <section id="Two" className="scroll-mt-28 max-md:scroll-mt-44 pb-24"><Two/></section>
                        <section id="Three" className="scroll-mt-28 max-md:scroll-mt-44 pb-24"><Three/></section>
                        <section id="Four" className="scroll-mt-28 max-md:scroll-mt-44 pb-24"><Four/></section>
                        <section id="Five" className="scroll-mt-28 max-md:scroll-mt-44 pb-24"><Five/></section>
                        <section id="Six" className="scroll-mt-28 max-md:scroll-mt-44 pb-24"><Six/></section>
                        <section id="Seven" className="scroll-mt-28 max-md:scroll-mt-44 pb-24"><Seven/></section>
                        <section id="Eight" className="scroll-mt-28 max-md:scroll-mt-44 pb-24"><Eight/></section>
                    </main>
            </div>
            <Footer/>
        </>
    )
}


// Desktop SideBar
function DesktopSideBar({sideBarItems, activatedMenu, goTo}) {
    return(
        <>
            <aside className="sticky shrink-0 max-md:hidden flex items-center top-4 h-screen bg-background overflow-hidden w-80 pl-10 pr-2 font-inter text-sm">
                <div className="px-6 space-y-2 w-full">
                    <h1 className="font-plusJktSans font-bold text-xs text-neutral-500 tracking-wider">DI HALAMAN INI</h1>
                    {sideBarItems.map((item, index) => {
                        const isActivated = activatedMenu === item.page;

                        return(
                            <button key={index} title={item.label} onClick={() => {goTo(item.page)}} className={`w-full flex items-center gap-3 cursor-pointer hover:bg-neutral-800 h-fit px-4 py-2 text-left rounded-lg transition-all ${isActivated ? 'bg-neutral-800' : 'bg-transparent'}`}>
                                <span className="text-red-400 text-xs">0{index + 1}</span>
                                {item.label}
                            </button>
                        )
                    })}
                </div>
                <div className="w-0.5 rounded-full h-full bg-neutral-800"></div>
            </aside>
        </>
    )
}

// Mobile SideBar
function MobileSideBar({isMobileOpen, sideBarItems, activatedMenu, goTo, setIsMobileOpen}) {
    const menuRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        if (isMobileOpen) {
            gsap.to(containerRef.current, {
                display: "block",
                opacity: 1,
                duration: 0.1,
            })
            gsap.fromTo(menuRef.current, 
                {y: "-100%", opacity: 0},
                {y: "0%", opacity: 1, duration: 0.4, ease: "power3.out"}
            )
            // gsap.fromTo(".item",
            //     {opacity: 0, y: -15},
            //     {opacity: 1, y: 0, duration: 0.3, stagger: 0.08, delay: 0.1, ease: "power2.out"}
            // )
        } else {
            gsap.to(menuRef.current, {
                y: "-100%",
                opacity: 0,
                duration: 0.3,
                ease: "power3.in",
                onComplete: () => {
                    gsap.to(containerRef.current, {display: "none", opacity: 0})
                }
            })
        }
    }, [isMobileOpen])

    return(
        <>
            <div ref={containerRef} className="fixed inset-0 z-20 hidden opacity-0 md:hidden">
                <div onClick={() => {setIsMobileOpen(false)}} className="absolute inset-0 bg-black/60 backdrop-blur-sm md:hidd'"/>
                <div ref={menuRef} className="relative top-32 w-full bg-background border-b border-neutral-800 p-6 flex flex-col gap-3 font-inter text-neutral-200">
                    {sideBarItems.map((item, index) => {
                        const isActivated = activatedMenu === item.page;

                        return(
                            <button key={index} title={item.label} onClick={() => {goTo(item.page)}} className={`w-full flex items-center gap-3 cursor-pointer hover:bg-neutral-800 h-fit px-4 py-2 text-left rounded-lg transition-all ${isActivated ? 'bg-neutral-800' : 'bg-transparent'}`}>
                                <span className="text-red-400 text-xs">0{index + 1}</span>
                                {item.label}
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


// Progress bar baca (garis merah tipis di bawah navbar)
function ProgressBar() {
    const [persen, setPersen] = useState(0);

    useEffect(() => {
        const hitung = () => {
            const html = document.documentElement;
            const total = html.scrollHeight - html.clientHeight;
            setPersen(total > 0 ? (html.scrollTop / total) * 100 : 0);
        };

        hitung();
        window.addEventListener("scroll", hitung);
        return () => window.removeEventListener("scroll", hitung);
    }, []);

    return(
        <div aria-hidden="true" className="fixed top-20 left-0 right-0 z-40 h-[3px]">
            <div className="h-full bg-[#EF4444]" style={{width: persen + "%"}}></div>
        </div>
    )
}