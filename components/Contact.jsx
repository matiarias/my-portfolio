import TitleSections from "../subComponents/TitleSections";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 px-6 md:px-8">
      {/* <TitleSections title="Contact" /> */}

      <h2 className="text-gray-200 text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center tracking-[1px] underline underline-offset-[10px] decoration-yellow-500/80">
        Contact
      </h2>

      <div className="w-full max-w-screen-xl flex flex-col justify-center gap-6 mt-4 mx-auto">
        <h3 className="text-sky-400 text-xl md:text-2xl font-bold mt-8">
          Let's Connect
        </h3>

        <div className="w-full max-w-screen-sm mx-auto">
          <form
            onSubmit=""
            action=""
            className="flex flex-col justify-center items-center gap-6"
          >
            <input
              type="text"
              className="w-full py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg  rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500"
              placeholder="Name"
              name=""
            />

            <input
              type="email"
              className="w-full py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg  rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500"
              placeholder="Email"
              name=""
            />

            <input
              type="text"
              className="w-full py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg  rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500"
              placeholder="Subject"
              name=""
            />

            <textarea
              className="w-full py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500 resize-none"
              placeholder="Message"
              rows="8"
              name=""
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 bg-yellow-500/50 text-gray-200 font-bold rounded-xl hover:bg-yellow-400/70"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
