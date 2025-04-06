import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaHamburger } from "react-icons/fa";
import NavItems from "./NavItems";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FaHamburger className="text-3xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-center font-bold text-xl">
            Shoppit
          </SheetTitle>
        </SheetHeader>

        <NavItems mobile />

        {/* <SheetClose className="overflow-y-auto">
          <NavItems mobile />
        </SheetClose> */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
