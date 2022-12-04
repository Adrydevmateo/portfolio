import React from "react";

const About = () => {
  return (
    <article id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <section className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#72483b]">
              About
            </p>
          </section>
          <section></section>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <section className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I&apos;m Adry, nice to meet you. Please take a look around.
            </p>
          </section>
          <section>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-business all the
              way to large enterprise corporation. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default About;
