import Icon from '@/ui/icon';
import Link from 'next/link';
import { useState } from 'react';
import NavItem, { INavItem } from './partials/NavItem';

const Navbar = ({ navItems }: { navItems?: INavItem[] }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="mb-10 p-5 md:px-11 md:py-16 relative md:static flex items-center justify-between bg-black shadow-xl">
      <Link href="/" legacyBehavior>
        <a className="flex gap-2">
          <p className="font-montserrat text-2xl text-carrara">Andres</p>
          <p className="font-montserrat font-semibold text-2xl text-carrara">Saa</p>
        </a>
      </Link>
      <div>
        <ul className={`${toggleMenu === false && 'hidden'} w-1/3 md:w-auto absolute md:static top-full left-2/3 md:flex transition-all bg-black`}>
          {navItems?.map(({ sys, title, pathname }) => (
            <NavItem key={sys?.id} title={title} pathname={pathname} />
          ))}
        </ul>
      </div>
      <div className="md:hidden cursor-pointer" onClick={() => handleToggleMenu()}>
        <Icon className="text-carrara" icon="GiHamburgerMenu" fontSize="25px" color="" />
      </div>
    </nav>
  );
};

export default Navbar;
