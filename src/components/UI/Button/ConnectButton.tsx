import { Button } from "@/components/UI";
import { SOCIAL_LINKS } from "src/constants";

const ConnectButton = ({ type = "primary" }: { type?: string }) => {
  return (
    <Button href={SOCIAL_LINKS[0].url} classes="link" type={type}>
      Let&apos;s Talk
    </Button>
  );
};

export default ConnectButton;
