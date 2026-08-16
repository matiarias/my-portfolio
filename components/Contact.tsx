import { useEffect, useState } from "react";

import emailjs from "@emailjs/browser";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { ContactFormInputs } from "@/types";

const Contact = () => {
  const { ref: formRef, inView } = useInView();
  const animationForm = useAnimation();

  useEffect(() => {
    if (inView) {
      animationForm.start({
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.7 },
      });
    }

    if (!inView) {
      animationForm.start({
        opacity: 0,
        filter: "blur(15px)",
      });
    }
  }, [inView, animationForm]);

  const [inputsForm, setInputsForm] = useState<ContactFormInputs>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loadingSubmit, setloadingSubmit] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInputsForm({
      ...inputsForm,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setloadingSubmit(true);

    emailjs
      .sendForm(
        "service_345q1hc",
        "template_cjpbxs8",
        e.currentTarget,
        "7KOfu6nUyn9l40icN"
      )
      .then(
        () => {
          setloadingSubmit(false);

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
          console.log(error);
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
      <h2 className="text-gray-200 text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center tracking-[1px] underline underline-offset-[10px] decoration-yellow-500/80">
        Contact
      </h2>

      <div className="w-full max-w-screen-xl flex flex-col justify-center gap-6 mt-4 mx-auto">
        <div className="w-full max-w-screen-sm mx-auto">
          <h3 className="text-sky-400 text-xl md:text-2xl font-bold my-8">
            Let&apos;s Connect
          </h3>

          <motion.div ref={formRef} animate={animationForm}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-6"
            >
              <input
                type="text"
                className="w-full py-3 lg:py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg  rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500"
                placeholder="Name"
                onChange={handleChange}
                value={inputsForm.name}
                name="name"
                maxLength={60}
                required
              />

              <input
                type="email"
                className="w-full py-3 lg:py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg  rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500"
                placeholder="Email"
                onChange={handleChange}
                value={inputsForm.email}
                name="email"
                maxLength={60}
                required
              />

              <input
                type="text"
                className="w-full py-3 lg:py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg  rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500"
                placeholder="Subject"
                onChange={handleChange}
                value={inputsForm.subject}
                name="subject"
                maxLength={60}
                required
              />

              <textarea
                className="w-full py-3 lg:py-2 px-4 bg-indigo-200/50 text-gray-200 text-base lg:text-lg rounded-xl placeholder:text-gray-200 focus:outline-none focus:shadow-lg focus:shadow-sky-500 resize-none"
                placeholder="Message"
                rows={8}
                onChange={handleChange}
                value={inputsForm.message}
                name="message"
                required
              ></textarea>

              {loadingSubmit ? (
                <button
                  type="button"
                  className="w-full py-2 bg-indigo-600/50 text-gray-200 font-bold rounded-xl"
                  disabled
                >
                  Sending Message ...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full py-2 bg-yellow-500/50 text-gray-200 font-bold rounded-xl hover:bg-yellow-400/70"
                >
                  Send Message
                </button>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
