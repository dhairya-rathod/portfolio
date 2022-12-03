import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { Social } from "@/components/Social";
import { ConnectButton, ResumeButton } from "@/components/UI";
import { MENULINKS, TYPED_STRINGS } from "src/constants";

import programming from "../../../public/images/home-programming.svg";

import styles from "./Intro.module.scss";

const Intro = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const typedEl = useRef<HTMLSpanElement>(null!);

  useEffect(() => {
    const options = {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      startDelay: 1500,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    };

    const typed = new Typed(typedEl.current, options);

    return () => typed.destroy();
  }, [typedEl]);

  return (
    <section
      id={MENULINKS[0].ref}
      className="w-full flex flex-col lg:flex-row justify-around lg:justify-between md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative"
    >
      <div className="w-full lg:w-1/2 flex flex-col md:pt-0 select-none">
        <h5
          className={`${styles.intro} font-mono font-medium text-indigo-light`}
        >
          Hi
          <span
            role="img"
            aria-label="emoji"
            className="relative bottom-[3px] inline-block animate-wave"
          >
            👋🏼
          </span>
          , my name is
        </h5>
        <h1 className={`${styles.heroName} text-white text-5xl font-semibold`}>
          <span className={`relative ${styles.emphasize} `}>Dhairya</span>
          <span className=""> Rathod</span>
        </h1>
        <p>
          <span
            className="text-3xl text-gray-light-3 font-mono leading-relaxed"
            ref={typedEl}
          ></span>
        </p>
        <div className="">
          <Social />
        </div>
        <div className="flex gap-6 pt-4">
          <ResumeButton />
          <ConnectButton />
        </div>
      </div>
      {/* <div className="absolute invisible w-4/12 bottom--1/2 lg:visible lg:right-12 2xl:right-16"> */}
      <div className="w-full md:w-1/2 lg:w-4/12">
        <Image src={programming} alt="homepage image" />
      </div>
    </section>
  );
};

export default Intro;
