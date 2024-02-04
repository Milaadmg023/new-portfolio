import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <h1 className="text-2xl font-bold">MD Pro</h1>
        <nav
          id="desktop__menu"
          className="hidden lg:block ml-auto flex gap-4 sm:gap-6"
          dir="rtl"
        >
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to={"/"}
          >
            درباره من{" "}
          </Link>
          |{" "}
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to={"/skills"}
          >
            مهارت ها{" "}
          </Link>
          |{" "}
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to={"/projects"}
          >
            پروژه ها{" "}
          </Link>
          |{" "}
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to={"/contact"}
          >
            تماس با من
          </Link>
        </nav>
        <div id="mobile__menu" dir="rtl">
          <div className="lg:hidden border border-gray-300 py-3 flex justify-center w-fit mx-auto gap-1 shadow-xl rounded-md fixed z-10 bg-gray-100 bottom-5 left-10 right-10">
            <Link to={"/"}>
              <div className="group relative px-4 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                </div>
                <span className="absolute whitespace-nowrap -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  درباره من
                </span>
              </div>
            </Link>
            <Link to={"/skills"}>
              <div className="group relative px-4 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-layers"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z" />
                  </svg>
                </div>
                <span className="absolute whitespace-nowrap -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  مهارت ها
                </span>
              </div>
            </Link>
            <Link to={"/projects"}>
              <div className="group relative px-4 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-journal-code"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708"
                    />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                  </svg>
                </div>
                <span className="absolute whitespace-nowrap -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  پروژه ها
                </span>
              </div>
            </Link>
            <Link to={"/contact"}>
              <div className="group relative px-4 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-chat-text-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                  </svg>
                </div>
                <span className="absolute whitespace-nowrap -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  تماس با من
                </span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
