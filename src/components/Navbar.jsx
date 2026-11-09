// REACT
import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

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
            <nav ref={navRef} className="flex fixed w-full right-0 left-0 top-0 bg-transparent font-notoSans px-4 py-4 justify-between">
                <div className="item bg-zinc-800 px-4 border border-zinc-700 py-2 rounded-md">
                    <h1>Napas Esok</h1>
                </div>
                <div className="item bg-zinc-800 px-3 border border-zinc-700 py-3 rounded-md h-fit cursor-pointer ">
                    <div className="w-6 flex flex-col gap-1.5 justify-center items-center">
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

// DUlunya bg-background