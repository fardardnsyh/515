import { handleOpenPdf, navlinks, scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { fadeInVariant } from "@/lib/animationVariants";

const DesktopNav: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
        <ul className="flex items-center text-lg gap-4">
            {navlinks.map((link, index) => (
              <motion.li
                variants={fadeInVariant}
                initial='initial'
                whileInView='animate'
                custom={index}
                className='cursor-pointer text-muted-foreground transition-colors hover:text-accent-foreground' key={index} onClick={() => scrollToSection(link)}>
                  {link}
                </motion.li>
            ))}
        </ul>
        <Button variant={'outline'} onClick={handleOpenPdf} className="">View CV</Button>
    </div>
  )
}

export default DesktopNav;