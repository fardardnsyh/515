import { BgGrid } from "./components/layout/bg-grid";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import Separator from "./components/ui/separator";
import About from "./pages/about";
import CaseStudies from "./pages/case-studies";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {

  return (
    <BgGrid>
      <div className="w-full flex justify-center px-4">
        <div className="font-inter w-full max-w-[1440px] relative">
          <Navbar />
          <Home />
          <Separator />
          <CaseStudies />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </BgGrid>
  )
}

export default App;