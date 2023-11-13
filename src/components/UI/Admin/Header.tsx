import { signOut } from "next-auth/react";

import PrimaryButton from "@/components/UI/Button/PrimaryButton";

export const Header = () => {
  return (
    <header
      id="paradise-header"
      className="max-h-16 px-8 py-2 text-base font-semibold border-b border-[#cbd5e11a] flex justify-between fixed top-0 w-full z-50 items-center"
    >
      <span className="inline-block border-2 border-purple rounded-full p-2 text-lg font-bold">
        DR
      </span>
      <PrimaryButton type="button" label="Log Out" onClick={() => signOut()} />
    </header>
  );
};
