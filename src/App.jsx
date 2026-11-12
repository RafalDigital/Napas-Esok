import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Features from "./pages/Features/Features";
import Faq from "./pages/Faq/Faq";

function App() {

  return (
    <>
      <Router>
        <div className="min-h-[100dvh] bg-background text-white overflow-x-clip">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Edukasi" element={<Education/>}/>
            <Route path="/Fitur" element={<Features/>}/>
            <Route path="/Faq" element={<Faq/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;

