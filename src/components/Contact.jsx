import React from "react";

const Contact = () => {
  return (
    <article
      id="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/b5f32784-230f-4490-bb8f-be157c2205f5"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <section className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#72483b] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or send me an email -
            adrydevmateo@gmail.com
          </p>
        </section>

        {/* Name */}
        <fieldset className="bg-[#ccd6f6]">
          <input
            className="p-2 bg-[#ccd6f6] w-full focus:outline-none"
            type="text"
            name="name"
            placeholder="Name"
          />
        </fieldset>

        {/* Email */}
        <fieldset className="my-4 bg-[#ccd6f6]">
          <input
            className="p-2 bg-[#ccd6f6] w-full focus:outline-none"
            type="text"
            name="email"
            placeholder="Email"
          />
        </fieldset>

        {/* Message */}
        <fieldset className="bg-[#ccd6f6]">
          <textarea
            className="p-2 bg-[#ccd6f6] w-full resize-none focus:outline-none"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
        </fieldset>

        {/* Collaborate */}
        <fieldset className="hover:scale-y-95 duration-300 my-8 mx-auto">
          <button className="text-white border-2 px-4 py-3 hover:bg-[#72483b] hover:border-[#72483b]">
            Let's Collaborate
          </button>
        </fieldset>
      </form>
    </article>
  );
};

export default Contact;
