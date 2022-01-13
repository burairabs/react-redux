import React from "react";
import { BsFillHeartFill } from 'react-icons/bs'

function Footer() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <p className="flex w-max mt-20 text-center font-bold font-mono px-4 rounded shadow-lg shadow-yellow-500/50 bg-yellow-100 text-yellow-800 text-md">
          Made with <BsFillHeartFill className="ml-1 mr-1 mt-1"/> by <a className="ml-1 underline decoration-yellow-800 decoration-2" href="https://burairabs.github.io/portfolio">Burair Abbas</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
