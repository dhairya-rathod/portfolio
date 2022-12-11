import { LinkButton } from "@/components/UI";
import { MENULINKS } from "src/constants";

const ConnectButton = ({ type = "primary" }: { type?: string }) => {
  return (
    <LinkButton href={`#${MENULINKS[3].ref}`} classes="link" type={type}>
      Let&apos;s Talk
    </LinkButton>
  );
};

export default ConnectButton;
