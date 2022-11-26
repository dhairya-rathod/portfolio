/* eslint-disable react/no-unknown-property */
import Image from "next/image";

import { Social } from "@/components/Social";
import { Button } from "@/components/UI";

import { MENULINKS } from "../../constants";

const Footer = () => {
  return (
    <footer className="w-full relative select-none bg-cover">
      <Image
        className="w-full"
        src="/images/footer-wave.svg"
        alt="footer wave"
        loading="lazy"
        width={100}
        height={180}
      />
      <div className="w-full h-full pb-10 z-10">
        <div className="section-container flex flex-col h-full justify-end z-10 items-center pb-12">
          <h1 className="font-bold text-3xl md:text-4xl text-center ">
            Feel free to connect on social media.
          </h1>
          <div className="text-center ">
            <Social />
          </div>
          <div className=" pt-4 text-center">
            <Button
              href={`#${MENULINKS[4].ref}`}
              classes="link"
              type="secondary"
            >
              Let&apos;s Talk
            </Button>
          </div>
          <p className="text-center text-sm sm:text-base font-bold tracking-wide mt-8">
            Developed with{" "}
            <span role="img" aria-label="emoji" className="animate-pulse">
              ❤️
            </span>{" "}
            by <span className="text-gray.dark.5">Dhairya Rathod</span>
          </p>
        </div>
      </div>
      <style jsx global>{`
        footer {
          background-image: linear-gradient(270deg, #9f55ff, #7000ff, #8b31ff);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
