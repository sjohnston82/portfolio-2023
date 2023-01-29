import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import emailjs from "@emailjs/browser";

type FormValues = {
  fullName: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const contactFormSchema = yup.object().shape({
    fullName: yup.string().required("A full name is required."),
    email: yup
      .string()
      .email("Must supply a valid email address.")
      .required("An email address is required."),
    message: yup.string().required("Please add a message."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(contactFormSchema),
  });
  const contactForm = useRef<HTMLFormElement | null>(null);

  const showSubmitMessage = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.target instanceof HTMLTextAreaElement) {
      event.target.style.height = "inherit";
      event.target.style.height = `${event.target.scrollHeight}px`;
    }
  };

  const sendEmail = () => {
    if (!contactForm.current) return null;

    let res = emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        contactForm.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => showSubmitMessage());
  };

  // if (submitted) {
  //   return (
  //     <>
  //       <div className="text-2xl">
  //         <p className="">Thank you!</p>
  //         <p className="">I will be in touch soon.</p>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <div className="m-auto my-10 flex w-[90%] flex-col items-center justify-center rounded border-2 bg-gray-900 shadow-lg shadow-black sm:w-4/5 lg:w-2/3 ">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-2 text-lg italic text-gray-500">
          <p className="">Thank you!</p>
          <p className="">I will be in touch soon.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="mt-5 flex w-[90%] flex-col gap-2"
          ref={contactForm}
        >
          <input
            className="p-2 dark:bg-gray-400 dark:placeholder-gray-700"
            type="text"
            placeholder="Enter your name"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-sm italic text-gray-400">
              {errors.fullName.message}
            </p>
          )}
          <input
            className="p-2 dark:bg-gray-400 dark:placeholder-gray-700"
            type="text"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm italic text-gray-400">
              {errors.email.message}
            </p>
          )}
          <textarea
            className="p-2 dark:bg-gray-400 dark:placeholder-gray-700"
            placeholder="Enter your message"
            onKeyDown={handleKeyDown}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-sm italic text-gray-400">
              {errors.message.message}
            </p>
          )}
          <button
            type="submit"
            className="duration-400 m-auto my-5 w-1/2 rounded-3xl border-2 bg-celticblue p-3 text-white transition-all ease-in-out hover:border-2 hover:bg-white hover:text-celticblue"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
