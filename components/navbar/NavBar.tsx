"use client";

import React, { useState } from "react";
import Link from "next/link";
import SearchForm from "./SearchForm";
import NavItems from "./NavItems";
import MobileNavbar from "./MobileNavbar";
import SearchButton from "./SearchButton";

const NavBar = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);

  const handleSearch = () => {
    setShowSearchForm((curr) => !curr);
  };

  return (
    <>
      {/* <nav className="bg-[whitesmoke] sticky top-0 z-20 w-full py-4"> */}
        <div className="flex justify-between items-center main-max-width mx-auto padding-x">
          <Link href="/">
            <h1 className="text-2xl font-extrabold text-gray-900">Shoppit</h1>
          </Link>

          <div className="max-lg:hidden">
            <SearchForm />
          </div>

          <div className="max-lg:block hidden">
            <SearchButton
              handleSearch={handleSearch}
              showSearchForm={showSearchForm}
            />
          </div>

          <div className="max-md:hidden">
            <NavItems />
          </div>

          <div className="max-md:block hidden">
            <MobileNavbar />
          </div>
        </div>
      {/* </nav> */}

      {showSearchForm && (
        <div className="w-[300px] mx-auto mt-4 max-lg:block hidden">
          <SearchForm />
        </div>
      )}
    </>
  );
};

export default NavBar;
