import { useState } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { ContactFormInputs } from "@/types";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Fix #1:  Usa el hook centralizado en lugar de duplicar useInView + useAnimation + useEffect
// Fix #8:  handleChange usa callback funcional para evitar stale closure
// Fix #9:  Error handler muestra toast de error y restaura el botón
// Fix #12: Imports estandarizados con alias @/
// Fix #15: Credenciales EmailJS leídas desde variables de entorno
const Contact = () => {
  const { ref: formRef, controls: animationForm } = useScrollAnimation();

  const [inputsForm, setInputsForm] = useState<ContactFormInputs>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  // Fix #8: Callback funcional para evitar problemas con stale closure en inputs rápidos
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInputsForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoadingSubmit(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoadingSubmit(false);

          setInputsForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

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
        // Fix #9: Mostrar error al usuario y restaurar el botón
        (error) => {
          console.error("EmailJS error:", error);
          setLoadingSubmit(false);

          toast.error("❌ Something went wrong. Please try again.", {
            position: "top-center",
            autoClose: 4000,
            theme: "dark",
          });
        }
      );
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
