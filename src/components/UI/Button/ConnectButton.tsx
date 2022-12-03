import { Button } from "@/components/UI";
import { MENULINKS } from "src/constants";

const ConnectButton = ({ type = "primary" }: { type?: string }) => {
  return (
    <Button href={`#${MENULINKS[3].ref}`} classes="link" type={type}>
      Let&apos;s Talk
    </Button>
  );
};

export default ConnectButton;
