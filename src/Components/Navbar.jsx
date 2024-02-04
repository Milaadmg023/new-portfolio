import React from "react";

function Navbar() {
  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <h1 className="text-2xl font-bold">MD Pro</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            درباره من
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            مهارت ها
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            پروژه ها
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            تماس با من
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
