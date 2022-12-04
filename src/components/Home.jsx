import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <article id="home" className="w-full h-screen bg-[#0a192f]">
      <section className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#98634f]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Adry Mateo Ramon
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I&apos;m a full-stack developer specializing in building (and
          occasionally designing) exceptional digital experience. Currently,
          I&apos;m focused on building responsive full-stack web applications.
        </p>
        <div className="hover:scale-y-95 duration-300 w-48">
          <Link to="work" smooth={true} offset={50} duration={500}>
            <button className="text-white group border-2 border-[#8892b0] px-6 py-3 my-2 flex items-center hover:bg-[#72483b] hover:border-[#72483b]">
              <span className="pr-2">View Work</span>
              <span className="group-hover:rotate-180 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Home;
