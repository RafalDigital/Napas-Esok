import Navbar from "./components/Navbar"
import StoryTelling from "./pages/Home/Storytelling"
import StoryTellingRev from "./pages/Home/Storytelling(Revisi)"

function App() {

  return (
    <>
      <div className="min-h-[100dvh] bg-background text-white flex">
        <Navbar/>
        {/* <StoryTelling/> */}
        <StoryTellingRev/>
        {/* <div className="h-[500rem]"></div> */}
      </div>
    </>
  )
}

export default App
// dulunya bg-zinc-950