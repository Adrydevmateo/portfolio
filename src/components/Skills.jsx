import React from "react";

import HTMLImg from "../assets/html.png";
import CSSImg from "../assets/css.png";
import JavaScriptImg from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import NodeJsImg from "../assets/node.png";
import TypeScriptImg from "../assets/typescript.png";
import MongoDBImage from "../assets/mongo.png";
import NextJsImage from "../assets/nextjs.png";

const Skills = () => {
  return (
    <article id="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <section className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <section>
          <p className="text-4xl font-bold inline border-b-4 border-[#72483b]">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </section>

        <section className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <article className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <a
              className="w-full"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target={"_blank"}
            >
              <img className="w-20 mx-auto" src={HTMLImg} alt="HTML Icon" />
              <p className="my-4">HTML</p>
            </a>
          </article>
          <article className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <a
              className="w-full"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target={"_blank"}
            >
              <img className="w-20 mx-auto" src={CSSImg} alt="HTML Icon" />
              <p className="my-4">CSS</p>
            </a>
          </article>
          <article className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <a
              className="w-full"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target={"_blank"}
            >
              <img
                className="w-20 mx-auto"
                src={JavaScriptImg}
                alt="HTML Icon"
              />
              <p className="my-4">JAVASCRIPT</p>
            </a>
          </article>
          <article className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <a
              className="w-full"
              href="https://reactjs.org/docs/getting-started.html"
              target={"_blank"}
            >
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML Icon" />
              <p className="my-4">REACT</p>
            </a>
          </article>
          <article className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <a
              className="w-full"
              href="https://nodejs.org/en/docs/"
              target={"_blank"}
            >
              <img className="w-20 mx-auto" src={NodeJsImg} alt="HTML Icon" />
              <p className="my-4">NODEJS</p>
            </a>
          </article>
          <article className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <a
              className="w-full"
              href="https://nextjs.org/docs/getting-started"
              target={"_blank"}
            >
              <img className="w-20 mx-auto" src={NextJsImage} alt="HTML Icon" />
              <p className="my-4">NEXTJS</p>
            </a>
          </article>
          <article className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <a
              className="w-full"
              href="https://www.typescriptlang.org/docs/"
              target={"_blank"}
            >
              <img
                className="w-20 mx-auto"
                src={TypeScriptImg}
                alt="HTML Icon"
              />
              <p className="my-4">TYPESCRIPT</p>
            </a>
          </article>
          <article className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <a
              className="w-full"
              href="https://www.mongodb.com/docs/"
              target={"_blank"}
            >
              <img
                className="w-20 mx-auto"
                src={MongoDBImage}
                alt="HTML Icon"
              />
              <p className="my-4">MONGODB</p>
            </a>
          </article>
        </section>
      </section>
    </article>
  );
};

export default Skills;
