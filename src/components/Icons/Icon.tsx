import {
  IconMail,
  IconLinkedin,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconExternal,
} from "@/components/Icons/Index";
import { IconsEnum } from "src/types";

const Icon = ({ name }: { name: IconsEnum }) => {
  switch (name) {
    case IconsEnum.MAIL:
      return <IconMail />;
    case IconsEnum.GITHUB:
      return <IconGithub />;
    case IconsEnum.LINKEDIN:
      return <IconLinkedin />;
    case IconsEnum.INSTAGRAM:
      return <IconInstagram />;
    case IconsEnum.TWITTER:
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
