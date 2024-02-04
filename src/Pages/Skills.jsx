import React from "react";

function Skills() {
  return (
    <>
      <div className="w-full min-h-screen ">
        <main className="container mx-auto p-4 md:p-8">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    مهارت های فنی
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    مهارت های های فنی من در تسلط به زبان های برنامه نویسی,
                    چهارچوب ها و ابزارها
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      className="bi bi-filetype-html"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"
                      />
                    </svg>
                    Html
                  </h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <div className="h-full w-4/5 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      className="bi bi-filetype-css"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.397 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zM6.78 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.106.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422t.777-.149q.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375"
                      />
                    </svg>
                    Css
                  </h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <div className="h-full w-4/5 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      className="bi bi-bootstrap"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" />
                      <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z" />
                    </svg>
                    Bootstrap
                  </h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <div className="h-full w-4/5 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      className="bi bi-git"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457" />
                    </svg>
                    Git & Github
                  </h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <div className="h-full w-4/5 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 inline-block mr-2"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <circle cx={12} cy={12} r={4} />
                      <line x1="21.17" x2={12} y1={8} y2={8} />
                      <line x1="3.95" x2="8.54" y1="6.06" y2={14} />
                      <line x1="10.88" x2="15.46" y1="21.94" y2={14} />
                    </svg>
                    Java Script
                  </h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <div className="h-full w-4/5 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 inline-block mr-2"
                    >
                      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                    </svg>
                    React Js
                  </h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <div className="h-full w-3/4 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 inline-block mr-2"
                    >
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                      <line x1={12} x2={12} y1={22} y2="15.5" />
                      <polyline points="22 8.5 12 15.5 2 8.5" />
                      <polyline points="2 15.5 12 8.5 22 15.5" />
                      <line x1={12} x2={12} y1={2} y2="8.5" />
                    </svg>
                    Tailwind Css
                  </h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <div className="h-full w-3/5 bg-green-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32" dir="rtl">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    مهارت های نرم
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    در کنار مهارت‌های فنی، من طی حرفه‌ام مجموعه‌ای از مهارت‌های
                    نرم را توسعه داده‌ام.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 inline-block mr-2"
                    >
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    مهارت‌های ارتباطی
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    مهارت‌های ارتباطی عالی در نوشتار و گفتار، با توانایی توضیح
                    مفاهیم پیچیده به شیوه‌ای واضح و مختصر.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 inline-block mr-2"
                    >
                      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                      <rect width={7} height={5} x={7} y={7} rx={1} />
                      <rect width={7} height={5} x={10} y={12} rx={1} />
                    </svg>
                    روحیه تیمی
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    دارای روحیه همکاری تیمی برای کار با گروه های حضوری و ریموت.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 inline-block mr-2"
                    >
                      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
                    </svg>
                    حل مسئله
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    مهارت‌های قوی در حل مسائل، با یک رویکرد منطقی و روشن به
                    دیباگ و رفع اشکال.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Skills;
