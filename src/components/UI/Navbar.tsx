import Link from "next/link";

const Navbar = () => {
  return (
    <header className="shadow-[0_3px_12px_rgba(0,0,0,0.25)] py-6 px-24">
      <nav>
        <ul className="flex justify-end gap-8 font-medium text-3xl text-[#4C4C4C]">
          <Link href="#profile">
            <li className="text-[#6930C3]">Home</li>
          </Link>
          <Link href="#about">
            <li>About</li>
          </Link>
          <Link href="#skills">
            <li>Skills</li>
          </Link>
          <Link href="#projects">
            <li>Projects</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
