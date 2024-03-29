import React from "react";
import { Link } from "react-router-dom";
import Loader from './../Components/Loader';

function About() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(()=>{
    setLoading(false)
  })
  return (
    <>
      {loading && <Loader/>}
      <div className="flex items-center justify-center min-h-screen bg-white p-2">
        <div className="flex flex-col items-center md:flex-row w-full max-w-4xl rounded-lg bg-white">
          <div className="flex flex-col items-center justify-center w-1/2">
            <div className="rounded-full overflow-hidden">
              <img
                alt="Profile"
                className="min-w-[380px]"
                src="/photo_2023-04-21_22-18-22.jpg"
              />
            </div>
          </div>
          <div
            className="flex flex-col justify-center w-1/2 p-4 mb-4 text-center"
            dir="rtl"
          >
            <h2 className="text-gray-700">سلام, من</h2>
            <h1 className="text-4xl font-bold whitespace-nowrap">
              میلاد باقری
            </h1>
            <p className="text-gray-600">توسعه دهنده فرانت اند هستم.</p>
            <div className="mt-4 flex space-x-4 justify-center gap-1">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="https://cvbuilder.me/Resume/fa/f3ec4c74-9e0c-41f1-85f2-749311908f17?template=Template22" >
                  دانلود رزومه
                </a>
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <Link to={"/contact"}>اطلاعات تماس</Link>
              </button>
            </div>
            <div className="mt-4 flex space-x-4 justify-center gap-2">
              <svg
                className="text-blue-600 h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect height="12" width="4" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <svg
                className="text-gray-800 h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
