import Image from "next/image";

import { Socials } from "@/components/UI";

import code from "../../../public/images/code.svg";
import profileImg from "../../../public/images/profile.svg";

const Profile = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-28 pb-60">
      <Image src={profileImg} width={300} alt="profile" />
      <h2 className="mt-4 font-medium text-7xl text-[#343434]">
        Dhairya Rathod
      </h2>
      <Image className="mt-8" src={code} alt="code icon" />
      <p className="mt-7 text-[#4C4C4C] text-4xl font-medium">
        Full Stack Developer
      </p>
      <Socials />
    </section>
  );
};

export default Profile;
