import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="py-4 px-6 bg-[#1a171e] border-b border-[#242225] sticky top-0">
      <nav className="flex justify-between">
        <div className="cursor-pointer">
          <GiHamburgerMenu />
        </div>
        <div className="cursor-pointer">
          <FaRegUserCircle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
