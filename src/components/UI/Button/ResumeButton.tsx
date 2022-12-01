import { Button } from "@/components/UI";
import { RESUME_LINK } from "src/constants";

const ResumeButton = () => {
  return (
    <Button href={RESUME_LINK} classes="link" type="primary" target="_blank">
      Resume
    </Button>
  );
};

export default ResumeButton;
