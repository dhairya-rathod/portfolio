import Image from "next/image";

import githubIcon from "../../../public/images/social/github.svg";
import instagramIcon from "../../../public/images/social/instagram.svg";
import linkedinIcon from "../../../public/images/social/linkedin.svg";
import twitterIcon from "../../../public/images/social/twitter.svg";

const Socials = () => {
  return (
    <div className="flex gap-8 mt-5 ">
      <Image src={githubIcon} alt="github icon" />
      <Image src={twitterIcon} alt="twitter icon" />
      <Image src={linkedinIcon} alt="linkedin icon" />
      <Image src={instagramIcon} alt="instagram icon" />
    </div>
  );
};

export default Socials;
