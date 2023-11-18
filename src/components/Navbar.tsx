import React, { useState , useEffect } from "react";
import Logo from "../assets/images/logo.webp";
import { navbarLinks } from "../constants";

const Navbar: React.FC = () => {
  const [transparent, setTransparent] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;      
      if (currentScrollPosition > 100) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <nav
      className={`z-50 flex items-center md:justify-evenly max-md:justify-between fixed max-md:h-16 md:h-20 w-full duration-500 transition-[background-color] bg-transparent-to-r from-black to-[#00000022] from-40% max-md:px-5 `}
      style={{
        backgroundColor: transparent ? "rgba(0, 0, 0, 0.87)" : '',
      }}
    >
      <a href="/">
        <img
          className="h-10 md:h-14 object-contain"
          src={Logo}
          alt="_truffleTimes"
          loading="lazy"
        />
      </a>
      <div className="text-white text-off hidden md:flex justify-evenly  items-center w-[50%]">
        {navbarLinks.map((link, index) => (
          <a
            className="uppercase font-mango-small hover:opacity-60 duration-500 ease-out flex-none"
            href={link.href}
            key={`navbar-link-${index}`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="md:hidden">Menu</div>
    </nav>
  );
};

export default Navbar;
