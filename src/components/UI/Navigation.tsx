import Link from "next/link";
import { type IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
// import { BsBriefcase } from "react-icons/bs";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

import { SoundBar } from "@/components/UI";
import { MENULINKS } from "src/constants";

// import audio from "../../../public/audio/audio.mp3";

const NavLink = ({
  name,
  link,
  Icon,
}: {
  name: string;
  link: string;
  Icon: IconType;
}) => {
  return (
    <Link
      href={link}
      className="flex justify-center items-center hover:text-indigo-dark"
    >
      <p className="text-2xl light:text-green">
        <Icon />
      </p>
      <p className="ml-1 text-xs font-bold opacity-70">{name}</p>
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="fixed bottom-6 right-0 left-0 z-10 mx-auto flex w-56 justify-evenly items-center rounded-full py-4 px-2 md:p-2 text-black shadow-lg bg-white">
      <NavLink
        name={MENULINKS[0].name}
        link={`#${MENULINKS[0].ref}`}
        Icon={AiOutlineHome}
      />
      {/* <NavLink name="Work" link="/" Icon={BsBriefcase} /> */}
      <NavLink
        name={MENULINKS[1].name}
        link={`#${MENULINKS[1].ref}`}
        Icon={HiOutlineWrenchScrewdriver}
      />
      <div className="relative w-[19px] h-[18px]">
        <SoundBar />
      </div>
    </nav>
  );
};

export default Navigation;
