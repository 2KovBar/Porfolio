//components
import Circles from "/components/Circles";
//icons
import { BsArrowRight } from "react-icons/bs";
//framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_vdpis75",
        "template_qngijic",
        {
          from_name: form.name,
          to_name: "2kovbar",
          from_email: form.email,
          to_email: "2kovbar@gmail.com",
          message: form.message,
        },
        "ToJ1QUzUcphOd_wd0"
      )
      .then(
        () => {
          // setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto md:py-36 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let`s <span className="text-accent"> connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            action=""
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={form.name}
                placeholder="name"
                className="input"
              />
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={form.email}
                placeholder="email"
                className="input"
              />
            </div>
            <input
              onChange={handleChange}
              type="text"
              name="subject"
              value={form.subject}
              placeholder="subject"
              className="input"
            />
            <textarea
              onChange={handleChange}
              name="message"
              value={form.message}
              placeholder="message"
              className="textarea"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all 
            duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {loading ? "Sending..." : "Let's talk"}
              </span>
              {loading ? (
                "Sending..."
              ) : (
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
               group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                />
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
