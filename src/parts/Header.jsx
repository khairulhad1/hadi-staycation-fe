import React, { useState } from "react";
import IconText from "./IconText.jsx";
import Button from "../elements/button/index.jsx";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "text-primary" : "text-[#152C5B]";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="py-7 border-b-2">
      <div className="container px-6 mx-auto flex items-center justify-between">
        <IconText />
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <ul className="flex justify-center lg:justify-start">
            <li className={`mr-6 ${getNavLinkClass("/")}`}>
              <Button
                className="font-normal hover:underline transition"
                type="link"
                href="/"
              >
                Home
              </Button>
            </li>
            <li className={`mr-6 ${getNavLinkClass("/browse-by")}`}>
              <Button
                className="font-normal hover:underline transition"
                type="link"
                href="/browse-by"
              >
                Browse By
              </Button>
            </li>
            <li className={`mr-6 ${getNavLinkClass("/stories")}`}>
              <Button
                className="font-normal hover:underline transition"
                type="link"
                href="/stories"
              >
                Stories
              </Button>
            </li>
            <li className={`mr-6 ${getNavLinkClass("/agents")}`}>
              <Button
                className="font-normal hover:underline transition"
                type="link"
                href="/agents"
              >
                Agents
              </Button>
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute bg-slate-100 p-5 top-4 right-0 mt-12 mr-4">
          <ul>
            <li className="mb-4">
              <Button
                className={`font-normal hover:underline transition ${getNavLinkClass(
                  "/"
                )}`}
                type="link"
                href="/"
                onClick={closeMenu}
              >
                Home
              </Button>
            </li>
            <li className="mb-4">
              <Button
                className={`font-normal hover:underline transition ${getNavLinkClass(
                  "/browse-by"
                )}`}
                type="link"
                href="/browse-by"
                onClick={closeMenu}
              >
                Browse By
              </Button>
            </li>
            <li className="mb-4">
              <Button
                className={`font-normal hover:underline transition ${getNavLinkClass(
                  "/stories"
                )}`}
                type="link"
                href="/stories"
                onClick={closeMenu}
              >
                Stories
              </Button>
            </li>
            <li className="mb-4">
              <Button
                className={`font-normal hover:underline transition ${getNavLinkClass(
                  "/agents"
                )}`}
                type="link"
                href="/agents"
                onClick={closeMenu}
              >
                Agents
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
