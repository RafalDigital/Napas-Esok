// REACT
import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

import WhiteLogo from '../assets/vectors/White-Logo.svg';

export default function Navbar() {
    const navRef = useRef(null)

    useGSAP(() => {
        const navTl = gsap.timeline({})
        navTl
        .to('.item', {duration: 2})
        .fromTo('.item', 
            {
                opacity: 0,
                y: -50,

            },{
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.4,
                ease: "power2.out"
            }
        )
    }, { scope : navRef })
    return(
        <>
            <nav ref={navRef} className="flex fixed w-full right-0 left-0 top-0 bg-background font-plusJktSans px-4 py-4 justify-between items-center z-50">
                <div className="pl-2 flex gap-2 justify-center items-center">
                    <img src={WhiteLogo} className="w-12"/>
                    <h1>Napas Esok</h1>
                </div>
                <div className="flex gap-12 font-inter text-sm pr-6 max-md:hidden">
                    <a href="" className="px-3 py-1.5 bg-transparent hover:bg-neutral-800 rounded-lg">Beranda</a>
                    <a href="" className="px-3 py-1.5 bg-transparent hover:bg-neutral-800 rounded-lg">Edukasi</a>
                    <a href="" className="px-3 py-1.5 bg-transparent hover:bg-neutral-800 rounded-lg">Fitur</a>
                    <a href="" className="px-3 py-1.5 bg-transparent hover:bg-neutral-800 rounded-lg">FAQ</a>
                </div>

                <div className="pr-2 h-fit cursor-pointer md:hidden">
                    <div className="w-5 flex flex-col gap-1 justify-center items-center">
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                    </div>
                </div>
            </nav>
            {/* <MenuBar/> */}
        </>
    )
}

function MenuBar() {
    return(
        <>
            <div className="fixed right-4 rounded-2xl top-24 border border-neutral-700 bg-neutral-950 w-2xs h-48 z-30">
                
            </div>
            {/* <div className="fixed w-full h-full bg-neutral-950/40 backdrop-blur-2xl z-20"></div> */}
        </>
    )
}

// DUlunya bg-background