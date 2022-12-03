/* eslint-disable react/no-unknown-property */
import Filter from "bad-words";
import { ChangeEvent, SyntheticEvent, useState } from "react";

import {
  successNotification,
  warningNotification,
  errorNotification,
} from "@/utils/index";
import { MENULINKS } from "src/constants";
import { ContactFormData } from "src/types/form";

import styles from "./Contact.module.scss";

const filter = new Filter();
filter.removeWords("hell", "god", "shit");

const Contact = () => {
  const initialState = { name: "", email: "", message: "" };

  const [formData, setFormData] = useState<ContactFormData>(initialState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;

    setFormData((prevVal: ContactFormData) => {
      if (
        value.trim() !== prevVal[name as keyof ContactFormData] &&
        value.trim().length >
          prevVal[name as keyof ContactFormData].trim().length
      ) {
        return { ...prevVal, [name]: filter.clean(value.trim()) };
      } else {
        return { ...prevVal, [name]: value };
      }
    });
  };

  const emptyForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const { name, email, message } = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    if (name === "" || email === "" || message === "") {
      warningNotification("Please fill the required fields");
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: process.env.NEXT_PUBLIC_TOKEN as string,
        },
        body: JSON.stringify({
          name,
          message,
          email,
        }),
      });
      const data = await response.json();
      if (data.data) {
        successNotification("Message sent successfully");
      } else {
        errorNotification("Error sending your message");
      }
    } catch (err) {
      errorNotification("Error sending your message");
    }
    emptyForm();
    setIsSending(false);
  };

  return (
    <section
      className="mt-30 w-full relative select-none bg-gray-dark-4 pt-20 sm:pt-10 md:pt-5 lg:pt-5 pb-20"
      id={MENULINKS[3].ref}
    >
      <div className="section-container flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              Contact me
            </h1>
          </div>
        </div>

        <form className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem]">
          <div className="relative">
            <input
              type="text"
              className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              autoComplete="off"
              disabled={isSending}
              required
            />
          </div>

          <div className="relative mt-14">
            <input
              type="email"
              className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              autoComplete="off"
              disabled={isSending}
              required
            />
          </div>

          <div className="relative mt-14">
            <textarea
              className="block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
              disabled={isSending}
              required
            />
          </div>
        </form>

        <div className="pt-9 mx-auto link">
          <button
            type="button"
            className={styles.button}
            disabled={
              formData.name === "" ||
              formData.email === "" ||
              formData.message === "" ||
              isSending
            }
            onClick={handleSubmit}
          >
            <span className={styles.default}>Send -&gt;</span>
          </button>
        </div>
      </div>

      <style jsx global>{`
        input:hover,
        textarea:hover {
          box-shadow: 0 0 0.3rem #7000ff;
        }

        input:active,
        input:focus,
        textarea:active,
        textarea:focus {
          box-shadow: 0 0 0.3rem #120e16;
        }
      `}</style>
    </section>
  );
};

export default Contact;
