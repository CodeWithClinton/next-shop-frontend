import { Search, X } from "lucide-react";
import React from "react";

interface Props {
  handleSearch: () => void;
  showSearchForm: boolean;
}

const SearchButton = ({ handleSearch, showSearchForm }: Props) => {
  return (
    <button
      onClick={handleSearch}
      className="size-[30px] rounded-full bg-black flex justify-center items-center cursor-pointer text-white"
    >
      {showSearchForm ? (
        <X className="size-4" />
      ) : (
        <Search className="size-4" />
      )}
    </button>
  );
};

export default SearchButton;
