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
      </div>
    </section>
  );
};

export default Contact;
