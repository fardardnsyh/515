import { handleOpenPdf, navlinks, scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
  

const MobileNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <Button variant={'outline'}><HamburgerMenuIcon /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>
                    <p
                        className="cursor-pointer text-2xl text-accent-foreground transition-colors font-bold"
                        onClick={() => {scrollToSection('home'); setIsOpen(false)}}
                    >
                        muchiri
                    </p>
                </SheetTitle>
                <SheetDescription className="flex flex-col text-left gap-4">
                    <ul className="capitalize text-lg">
                        {navlinks.map((link, index) => (
                            <li
                                className='cursor-pointer text-muted-foreground transition-colors hover:text-accent-foreground'
                                key={index}
                                onClick={() => {scrollToSection(link); setIsOpen(false)}}
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant={'outline'}
                        onClick={() => {handleOpenPdf(); setIsOpen(false)}}
                        className=""
                    >
                        View CV
                    </Button>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav;