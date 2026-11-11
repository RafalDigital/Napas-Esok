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

export default function Education() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activatedMenu, setActivatedMenu] = useState("One");

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
                
                    {/* Header mobile only */}
                    <header className="md:hidden w-full fixed top-20 left-0 z-30 bg-background border-b border-t border-neutral-800 py-4 px-6 flex gap-6 items-center">
                        <button>
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
function MobileSideBar({isMobileOpen, sideBarItems, activatedMenu, setActivatedMenu}) {
    return(
        <>

        </>
    )
}