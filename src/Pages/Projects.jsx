import React from "react";


function Projects() {

  return (
    <>
      <div className="w-full min-h-screen p-4 md:p-6 lg:p-8" dir="rtl">
        <h1 className="text-4xl font-bold text-center mb-8">پروژه های من</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                سایت رزومه شخصی
              </h3>
              <img src="/Screenshot 2024-02-04 144235.png" alt="project img" className="border rounded-lg border-gray-300"/>
            </div>
            <div className="p-6">
              <p className="mb-2">
                سایت رزومه شخصی برای اپلود نمونه کارها و مهارت ها.
              </p>
              <p className="mb-2 text-sm text-gray-500">
                تکنولوژی های مورد استفاده: React Js, Tailwind Css, Vercel
              </p>
              <div className="flex gap-2">
                <a className="text-blue-500 hover:underline" href="#" rel="ugc">
                  سورس کد
                </a>
                |
                <a className="text-blue-500 hover:underline" href="#" rel="ugc">
                  دموی آنلاین
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
