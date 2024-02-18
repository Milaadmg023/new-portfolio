import React from "react";

function Loader() {
  return (
    <>
      <div className="flex flex-row gap-2 bg-gray-50 h-screen w-screen items-center justify-center z-10 fixed top-0 left-0">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </>
  );
}

export default Loader;
