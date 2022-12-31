import React from "react";

const Work = () => {
  return (
    <article
      id="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <section className="pb-8">
          <p className="text-4xl font-bold inline text-gray-300 border-b-4 border-[#72483b]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </section>

        {/* Cards */}
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* EvoGym Project */}
          <article
            style={{
              backgroundImage: `url(${"https://github.com/Adrydevmateo/gym_ts/blob/master/public/preview.png?raw=true"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-card hover:scale-105 duration-300"
          >
            <section className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                EvoGym {">"} TS
              </span>
              <section className="pt-8 text-center">
                <a
                  href={"https://gym-ts.vercel.app/"}
                  target={"_blank"}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Adrydevmateo/gym_ts"
                  target={"_blank"}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </section>
            </section>
          </article>

          {/* Calendar Project */}
          <article
            style={{
              backgroundImage: `url(${"https://raw.githubusercontent.com/Adrydevmateo/calendar/master/public/preview.png"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-card"
          >
            <section className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Calendar {">"} TS
              </span>
              <section className="pt-8 text-center">
                <a
                  href={"https://calendar-nine-zeta.vercel.app/"}
                  target={"_blank"}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Adrydevmateo/calendar"
                  target={"_blank"}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </section>
            </section>
          </article>
        </section>
      </div>
    </article>
  );
};

export default Work;
