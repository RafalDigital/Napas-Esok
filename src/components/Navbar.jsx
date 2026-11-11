// REACT
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

import WhiteLogo from '../assets/vectors/White-Logo.svg';

export default function Navbar() {
    const navigate = useNavigate();
    const navRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen((p) => !p)
    }

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    }

    return(
        <>
            <nav ref={navRef} className="flex fixed w-full right-0 left-0 top-0 bg-background font-plusJktSans px-4 py-4 justify-between items-center z-50">
                <div className="md:pl-2 flex gap-2 justify-center items-center">
                    <img src={WhiteLogo} className="w-12"/>
                    <h1>Napas Esok</h1>
                </div>
                <div className="flex gap-8 font-inter text-sm pr-6 max-md:hidden">
                    <a onClick={() => navigate('/')} className="px-3 py-1.5 bg-transparent hover:bg-neutral-800 rounded-lg cursor-pointer">Beranda</a>
                    <a onClick={() => navigate('/Edukasi')} className="px-3 py-1.5 bg-transparent hover:bg-neutral-800 rounded-lg cursor-pointer">Edukasi</a>
                    <a onClick={() => navigate('/Fitur')} className="px-3 py-1.5 bg-transparent hover:bg-neutral-800 rounded-lg cursor-pointer">Fitur</a>
                    <a onClick={() => navigate('/Faq')} className="px-3 py-1.5 bg-transparent hover:bg-neutral-800 rounded-lg cursor-pointer">FAQ</a>
                </div>

                <button onClick={toggleMenu} className="pr-2 h-fit cursor-pointer md:hidden">
                    <div className="w-5 flex flex-col gap-1 justify-center items-center">
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                        <span className="h-0.5 w-full bg-white rounded-full"></span>
                    </div>
                </button>
            </nav>

            <MenuBar 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)} 
                onNavigate={handleNavigate} 
            />
        </>
    )
}

function MenuBar({ isOpen, onClose, onNavigate }) {
    const menuRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(containerRef.current, {
                display: "block",
                opacity: 1,
                duration: 0.1,
            })
            gsap.fromTo(menuRef.current,
                { y: "-100%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
            )
            gsap.fromTo(".item",
                { opacity: 0, y: -15 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, delay: 0.1, ease: "power2.out" }
            )
        } else {
            gsap.to(menuRef.current, {
                y: "-100%",
                opacity: 0,
                duration: 0.3,
                ease: "power3.in",
                onComplete: () => {
                    gsap.to(containerRef.current, { display: "none", opacity: 0 });
                }
            })
        }
    }, [isOpen]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-40 hidden opacity-0 md:hidden">
            <div onClick={onClose}  className="absolute inset-0 bg-black/60 backdrop-blur-sm md:hidden"/>
            <div ref={menuRef} className="relative top-18 w-full bg-background border-b border-neutral-800 p-6 shadow-xl flex flex-col gap-3 font-inter text-neutral-200">
                <button onClick={() => onNavigate('/')} className="text-left item w-full px-4 py-3 hover:bg-neutral-800/60 rounded-xl transition-all font-medium text-base">Beranda</button>
                <button onClick={() => onNavigate('/Edukasi')} className="text-left item w-full px-4 py-3 hover:bg-neutral-800/60 rounded-xl transition-all font-medium text-base">Edukasi</button>
                <button onClick={() => onNavigate('/Fitur')} className="text-left item w-full px-4 py-3 hover:bg-neutral-800/60 rounded-xl transition-all font-medium text-base">Fitur</button>
                <button onClick={() => onNavigate('/Faq')} className="text-left item w-full px-4 py-3 hover:bg-neutral-800/60 rounded-xl transition-all font-medium text-base">FAQ</button>
            </div>
        </div>
    )
}