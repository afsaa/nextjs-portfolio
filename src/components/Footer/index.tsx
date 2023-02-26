import React from 'react';
import NavItem, { INavItem } from '../Navbar/partials/NavItem';

const Footer = ({ navItems }: { navItems?: INavItem[] }) => {
  return (
    <div className="mt-10 p-5 md:p-20 flex flex-col md:flex-row justify-between bg-black shadow-xl">
      <div className="flex flex-col md:flex-row">
        {navItems?.map(({ sys, title, pathname }) => (
          <NavItem key={sys?.id} title={title} pathname={pathname} />
        ))}
      </div>
      <div className="my-5 md:mt-0">
        <p className="text-sm text-center md:text-left text-carrara/50"> &copy; 2023 Andres Saa. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;