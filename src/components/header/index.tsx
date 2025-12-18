import { useState } from "react";
import logo from "../../assets/images/header/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white h-[72px] z-50 overflow-x-auto">
      <div className="max-w-[1482px] mx-auto flex items-center justify-between h-full px-6">
        <img src={logo} className="w-[150px] h-[40px]" alt="Logo" />

        <nav className="hidden md:flex gap-8 font-inter text-gray-600">
          <button className="cursor-pointer text-primary-100 text-[20px] font-inter">
            Process
          </button>
          <button className="cursor-pointer text-primary-100 text-[20px] font-inter">
            Token Structure
          </button>
        </nav>

        <button
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          className="md:hidden text-2xl transition-colors text-gray-700"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden w-[80%] mx-auto bg-white border-t shadow-md">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-700">
            <button className="text-left" onClick={() => setIsOpen(false)}>
              Process
            </button>
            <button className="text-left" onClick={() => setIsOpen(false)}>
              Token Structure
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
