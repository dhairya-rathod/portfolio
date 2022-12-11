import { LinkButton } from "@/components/UI";
import { RESUME_LINK } from "src/constants";

const ResumeButton = () => {
  return (
    <LinkButton
      href={RESUME_LINK}
      classes="link"
      type="primary"
      target="_blank"
    >
      Resume
    </LinkButton>
  );
};

export default ResumeButton;
