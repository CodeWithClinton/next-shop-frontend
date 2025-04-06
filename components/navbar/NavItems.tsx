import React from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { cn } from "@/lib/utils";


interface Props{
    mobile?: boolean
}

const NavItems = ({mobile}: Props) => {
  return (
    <div className={cn("flex items-center justify-center gap-6", mobile ? "flex-col" : "flex-row")}>
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-black shadow-md">
        {/* Profile picture container */}
      </div>

      <Link
        href="/profile"
        className="text-lg font-medium text-gray-900 hover:text-gray-700 transition"
      >
        Clinton
      </Link>

      <button className="nav-btn">Logout</button>
      <button className="nav-btn">Login</button>

      <div className="relative flex items-center h-[60px] w-[60px] justify-center cursor-pointer">
        <FaCartShopping className="text-4xl" />

        <span className="absolute top-0 right-0 px-2 py-1 bg-black rounded-full text-white">
          3
        </span>
      </div>
    </div>
  );
};

export default NavItems;
