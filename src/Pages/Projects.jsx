import React from "react";
import ProjectsData from "./../Data/ProjectsData";
import Loader from "../Components/Loader";

function Projects() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(()=>{
    setLoading(false)
  })
  return (
    <>
      {loading && <Loader/>}
      <div className="w-full min-h-screen p-4 md:p-6 lg:p-8" dir="rtl">
        <h1 className="text-4xl font-bold text-center mb-8">پروژه های من</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProjectsData.map((data) => {
            return (
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    {data.title}
                  </h3>
                  <img
                    src={data.pic}
                    alt="project img"
                    className="border rounded-lg border-gray-300"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2">
                    {data.desc}
                  </p>
                  <p className="mb-2 text-sm text-gray-500">
                    تکنولوژی های مورد استفاده: {data.tech}
                  </p>
                  <div className="flex gap-2">
                    <a
                      className="text-blue-500 hover:underline"
                      href={data.source}
                      rel="ugc"
                    >
                      سورس کد
                    </a>
                    |
                    <a
                      className="text-blue-500 hover:underline"
                      href={data.demo}
                      rel="ugc"
                    >
                      دموی آنلاین
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
