import Link from "next/link";
import { type IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

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
    <nav className="fixed bottom-6 right-0 left-0 z-10 mx-auto flex w-60 justify-evenly items-center rounded-full p-2 text-black shadow-lg bg-white">
      <NavLink name="Home" link="/" Icon={AiOutlineHome} />
      <NavLink name="Work" link="/" Icon={BsBriefcase} />
    </nav>
  );
};

export default Navigation;
