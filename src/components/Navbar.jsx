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
            <nav ref={navRef} className="flex fixed w-full right-0 left-0 top-0 bg-transparent font-plusJktSans px-4 py-4 justify-between items-center z-50 backdrop-blur-2xl">
                <div className="pl-2 flex gap-2 justify-center items-center">
                    <img src={WhiteLogo} className="w-12"/>
                    <h1>Napas Esok</h1>
                </div>
                <div className="pr-2 h-fit cursor-pointer ">
                    <div className="w-5 flex flex-col gap-1 justify-center items-center">
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

function MenuBar() {
    return(
        <>
            
        </>
    )
}

// DUlunya bg-background