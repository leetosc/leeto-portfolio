import { useState } from 'react';

import cubeicon from '../../images/cubeicon.png';
import { GithubIcon } from '../GithubIcon/GithubIcon';

const navbarLinks = [
  { label: 'Home', href: '/', ariaLabel: 'Home' },
  { label: 'Projects', href: '/projects', ariaLabel: 'Projects' },
  { label: 'Posts', href: '/posts', ariaLabel: 'Posts' },
];

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-40 flex h-20 w-full flex-col items-center justify-center bg-gray-900 lg:bg-customDarkBgTransparent lg:backdrop-blur-xl">
      <div className="relative flex w-11/12 items-center justify-between xl:w-10/12 2xl:w-[1280px]">
        <div>
          <a
            className="mx-4 h-full cursor-pointer  pt-2 text-2xl font-normal  leading-6 text-white transition duration-300 hover:scale-110 lg:text-base lg:font-medium 2xl:mx-6"
            href="/"
            aria-label="Home"
          >
            <div className="flex grow basis-0 items-center justify-start">
              <div className="mr-2 text-6xl text-white">
                <img src={cubeicon} alt="logo" className="h-12 w-12" />
              </div>
              <div className=" text-xl font-bold text-white">Leeto</div>
            </div>
          </a>
        </div>
        <div>
          <div className="hidden h-full pb-2 pl-12 lg:flex">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="mx-4 h-full cursor-pointer  pt-2 text-2xl font-normal  leading-6 text-white transition duration-300 hover:scale-110 lg:text-base lg:font-medium 2xl:mx-6"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="hidden grow basis-0 justify-end lg:flex">
            <a
              className="flex rounded-xl border border-solid 
           border-gray-700 bg-gray-900  p-2 text-sm text-white transition hover:bg-gray-800"
              href="https://github.com/leetosc"
              target="_blank"
              aria-label="source code"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
        <div
          className="flex cursor-pointer flex-col  rounded-md border border-solid border-gray-600 px-2 py-3 hover:bg-customDarkBg2 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="mb-1 h-0.5 w-5  bg-gray-500"></div>
          <div className="mb-1 h-0.5 w-5  bg-gray-500"></div>
          <div className="h-0.5 w-5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}

      {isOpen && (
        <div
          className="absolute left-0 top-4 z-50 mt-16 flex w-full flex-col  items-center gap-6 border-y 
        border-solid border-gray-700 bg-gray-900  py-4 lg:hidden"
        >
          {navbarLinks.map(({ label, href, ariaLabel }) => (
            <a
              key={href}
              className="mx-4 h-full cursor-pointer  pt-1 text-xl font-normal  leading-6 text-white transition duration-300 hover:scale-110 lg:text-base lg:font-medium 2xl:mx-6"
              href={href}
              onClick={() => setIsOpen(false)}
              aria-label={ariaLabel}
            >
              {label}
            </a>
          ))}
          <a
            className="flex rounded-xl border border-solid border-[rgba(255,255,255,0.15)]
            bg-gray-800  px-6 py-2 text-sm text-white hover:bg-gray-900"
            href="https://github.com/matt765/Tidestream"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
