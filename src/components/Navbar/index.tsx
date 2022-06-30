import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

import NavItem, { INavItem } from './partials/NavItem';
import Icon from '@/ui/icon';

const Navbar = ({ navItems }: { navItems?: Array<INavItem> }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="mb-10 p-5 md:p-20 flex items-center justify-between bg-primary opacity-75 shadow-xl">
      <Link href="/">
        <a className="font-montserrat font-semibold text-2xl text-carrara">AFSAA</a>
      </Link>
      <div className={`${toggleMenu && 'hidden'} absolute top-16 left-56 md:static md:flex transition-all bg-primary`}>
        {navItems?.map(({ id, title, pathname }) => (
          <NavItem id={id} title={title} pathname={pathname} />
        ))}
      </div>
      <div className="md:hidden cursor-pointer" onClick={() => handleToggleMenu()}>
        <Icon className="text-carrara" icon={<GiHamburgerMenu />} fontSize="25px" color="" />
      </div>
    </nav>
  );
};

export default Navbar;
