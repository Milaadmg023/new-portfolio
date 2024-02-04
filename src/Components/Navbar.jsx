import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <h1 className="text-2xl font-bold">MD Pro</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6" dir="rtl">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to={'/'}
          >
            درباره من
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to={'/skills'}
          >
            مهارت ها
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to={'/projects'}
          >
            پروژه ها
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to={'/contact'}
          >
            تماس با من
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
