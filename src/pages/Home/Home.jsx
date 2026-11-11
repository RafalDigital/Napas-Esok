import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Features from "./sub-pages/Features";
import Impact from "./sub-pages/Impact";
import StartHere from "./sub-pages/StartHere";
import StoryTelling from "./sub-pages/Storytelling";

export default function Home() {
    return(
        <>
            <Navbar/>
            <StoryTelling/>
            <Impact/>
            <Features/>
            <StartHere/>
            <Footer/>
        </>
    )
}