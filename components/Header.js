import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term || term.trim().length === 0) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="text-[#fff] sticky top-0 bg-[#202124]">
      <div className="flex w-full p-6 items-center">
        {" "}
        <Image
          src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width="120"
          height="40"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form
          className="flex flex-grow px-6 py-3 mx-10 rounded-full shadow-lg max-w-3xl border border-gray-200 items-center focus-within:bg-[#303134]"
          onSubmit={search}
        >
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full bg-transparent focus:outline-none  "
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-700 cursor-pointer transition duration-300 ease-in-out  hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className=" cursor-pointer h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-200" />
          <SearchIcon className="cursor-pointer h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit">
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url="https://github.com/frans203.png" />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
