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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Education() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activatedMenu, setActivatedMenu] = useState("One");
    const [isLoading, setIsLoading] = useState(false);

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

    const renderPage = () => {
        switch (activatedMenu) {
            case "One":
                return <One/>;
            case "Two":
                return <Two/>;
            case "Three":
                return <Three/>;
            case "Four":
                return <Four/>;
            case "Five":
                return <Five/>;
            case "Six":
                return <Six/>;
            case "Seven":
                return <Seven/>;
            case "Eight":
                return <Eight/>;
        }
    }

    return(
        <>
            <Navbar/>
            <div className="relative min-h-[100dvh] bg-background flex">
                <DesktopSideBar sideBarItems={sideBarItems} activatedMenu={activatedMenu} setActivatedMenu={setActivatedMenu}/>
                <MobileSideBar isMobileOpen={isMobileOpen} sideBarItems={sideBarItems} activatedMenu={activatedMenu} setActivatedMenu={setActivatedMenu} setIsMobileOpen={setIsMobileOpen}/>
                    {/* Header mobile only */}
                    <header className="md:hidden w-full fixed top-20 left-0 z-30 bg-background border-b border-t border-neutral-800 py-4 px-6 flex gap-6 items-center">
                        <button disabled={isLoading} onClick={Open}>
                            <div className="w-5 flex flex-col gap-1 justify-center items-start cursor-pointer">
                                <span className="h-0.5 w-full bg-white rounded-full"></span>
                                <span className="h-0.5 w-3/4 bg-white rounded-full"></span>
                                <span className="h-0.5 w-full bg-white rounded-full"></span>
                            </div>
                        </button>
                        {sideBarItems.filter(item => item.page === activatedMenu).map((item) => item.label)}
                    </header>

                    <main key={activatedMenu} className="flex-1 overflow-auto max-md:pt-40 pt-24 p-6">
                        {renderPage()}
                    </main>
            </div>
            <Footer/>
        </>
    )
}


// Desktop SideBar
function DesktopSideBar({sideBarItems, activatedMenu, setActivatedMenu}) {
    return(
        <>
            <aside className="sticky max-md:hidden flex pt-24 top-0 h-screen bg-background overflow-hidden w-64 font-inter text-sm">
                <div className="px-6 space-y-2">
                    {sideBarItems.map((item, index) => {
                        const isActivated = activatedMenu === item.page;

                        return(
                            <button key={index} title={item.label} onClick={() => {setActivatedMenu(item.page)}} className={`w-full cursor-pointer hover:bg-neutral-800 h-fit px-3 py-1.5 text-left rounded-lg transition-all ${isActivated ? 'bg-neutral-800' : 'bg-transparent'}`}>
                                {item.label}
                            </button>
                        )
                    })}
                </div>
                <div className="w-0.5 rounded-full h-11/12 bg-neutral-800"></div>
            </aside>
        </>
    )
}

// Mobile SideBar
function MobileSideBar({isMobileOpen, sideBarItems, activatedMenu, setActivatedMenu, setIsMobileOpen}) {
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
                            <button key={index} title={item.label} onClick={() => {setActivatedMenu(item.page); setIsMobileOpen(false)}} className={`w-full cursor-pointer hover:bg-neutral-800 h-fit px-3 py-1.5 text-left rounded-lg transition-all ${isActivated ? 'bg-neutral-800' : 'bg-transparent'}`}>
                                {item.label}
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    )
}