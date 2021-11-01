import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-[#26272a] text-gray-500">
      <div className="px-8 py-3">
        <p className="text-center">UNITED KINGDOM</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1  lg:col-start-2">
          <GlobeIcon className="w-8 mr-1 text-gray-500" /> Carbon neutral since
          2007
        </div>
        <div className="flex justify-center  space-x-8  whitespace-nowrap  md:mr-auto">
          <p className="cursor-pointer">Advertising</p>
          <p className="cursor-pointer">Business</p>
          <p className="cursor-pointer">How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <p className="cursor-pointer">Privacy</p>
          <p className="cursor-pointer">Terms</p>
          <p className="cursor-pointer">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
