import Image from "next/image";

import { Social } from "@/components/Social";
import { MENULINKS } from "src/constants";

import programming from "../../../public/images/home-programming.svg";

import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section
      id={MENULINKS[0].ref}
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
    >
      <div className="flex flex-col pt-40 md:pt-0 select-none">
        <h5
          className={`${styles.intro} font-mono font-medium text-indigo-light seq`}
        >
          Hi, my name is
        </h5>
        <h1 className={`${styles.heroName} text-white text-5xl font-semibold`}>
          <span className={`relative ${styles.emphasize} seq`}>Dhairya</span>
          <span className="seq"> Rathod</span>
        </h1>
        <p>
          <span className="seq text-3xl text-gray-light-3 font-mono leading-relaxed">
            A Full Stack Developer
          </span>
        </p>
        <div className="seq">
          <Social />
        </div>
      </div>
      <div className="absolute invisible w-4/12 bottom--1/2 lg:visible lg:right-12 2xl:right-16">
        <Image src={programming} alt="homepage image" />
      </div>
    </section>
  );
};

export default Intro;
