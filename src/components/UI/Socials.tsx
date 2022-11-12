import Image from "next/image";
import Link from "next/link";

import githubIcon from "../../../public/images/social/github.svg";
import instagramIcon from "../../../public/images/social/instagram.svg";
import linkedinIcon from "../../../public/images/social/linkedin.svg";
import twitterIcon from "../../../public/images/social/twitter.svg";

const Socials = () => {
  const githubUrl: string = process.env.NEXT_PUBLIC_GITHUB_PROFILE as string;
  const linkedinUrl: string = process.env
    .NEXT_PUBLIC_LINKEDIN_PROFILE as string;
  const instagramUrl: string = process.env
    .NEXT_PUBLIC_INSTAGRAM_PROFILE as string;
  const twitterUrl: string = process.env.NEXT_PUBLIC_TWITTER_PROFILE as string;

  return (
    <div className="flex gap-8 mt-5 ">
      <Link href={githubUrl} target="_blank">
        <Image src={githubIcon} alt="github icon" />
      </Link>
      <Link href={linkedinUrl} target="_blank">
        <Image src={linkedinIcon} alt="linkedin icon" />
      </Link>
      <Link href={twitterUrl} target="_blank">
        <Image src={twitterIcon} alt="twitter icon" />
      </Link>
      <Link href={instagramUrl} target="_blank">
        <Image src={instagramIcon} alt="instagram icon" />
      </Link>
    </div>
  );
};

export default Socials;
