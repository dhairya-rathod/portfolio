const Navbar = () => {
  return (
    <header className="shadow-[0_3px_12px_rgba(0,0,0,0.25)] py-6 px-24">
      <nav>
        <ul className="flex justify-end gap-8 font-medium text-3xl text-[#4C4C4C]">
          <li className="text-[#6930C3]">Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
