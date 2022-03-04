import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

import NavItem from './partials/NavItem';
import Icon from '@/ui/icon';

const Navbar = ({ navItems }: { navItems?: Array<any> }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="p-5 md:p-20 flex items-center justify-between bg-primary-light">
      <Link href="/">
        <a className="font-montserrat font-semibold text-2xl text-black">AFSAA</a>
      </Link>
      <div className={`${toggleMenu && 'hidden'} absolute top-20 left-56 md:static md:flex transition-all`}>
        {navItems.map(({ id, title, pathname }) => (
          <NavItem id={id} title={title} pathname={pathname} />
        ))}
      </div>
      <div className="md:hidden cursor-pointer" onClick={() => handleToggleMenu()}>
        <Icon className="" icon={<GiHamburgerMenu />} fontSize="25px" color="black" />
      </div>
    </nav>
  );
};

export default Navbar;
