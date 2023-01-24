import { useState } from "react";

import emailjs from "@emailjs/browser";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TitleSections from "../subComponents/TitleSections";

const Contact = () => {
  const [inputsForm, setInputsForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = ({ target }) => {
    console.log(target.value);

    setInputsForm({
      ...inputsForm,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_345q1hc",
        "template_cjpbxs8",
        e.target,
        "7KOfu6nUyn9l40icN"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("👽 Thank you for your message!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

    setInputsForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-6"
          >
            <input
              type="text"
              className="w-full py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg  rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500"
              placeholder="Name"
              onChange={handleChange}
              value={inputsForm.name}
              name="name"
              maxLength="60"
              required
            />

            <input
              type="email"
              className="w-full py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg  rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500"
              placeholder="Email"
              onChange={handleChange}
              value={inputsForm.email}
              name="email"
              maxLength="60"
              required
            />

            <input
              type="text"
              className="w-full py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg  rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500"
              placeholder="Subject"
              onChange={handleChange}
              value={inputsForm.subject}
              name="subject"
              maxLength="60"
              required
            />

            <textarea
              className="w-full py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500 resize-none"
              placeholder="Message"
              rows="8"
              onChange={handleChange}
              value={inputsForm.message}
              name="message"
              required
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
      <ToastContainer />
    </section>
  );
};

export default Contact;
