import { scrollToSection } from "@/lib/utils";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <div className="flex sticky top-0 left-0 right-0 z-50 justify-between w-full max-w-[1440px] rounded-lg p-2 backdrop-blur-sm z-100">
        <p className="cursor-pointer text-lg text-accent-foreground transition-colors font-bold" onClick={() => scrollToSection('home')}>muchiri</p>
        <DesktopNav />
        <MobileNav />
    </div>
  )
}

export default Navbar;