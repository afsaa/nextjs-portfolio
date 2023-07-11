import React, { useState } from 'react';
import { useTranslations } from '../../hooks';
import NavItem, { INavItem } from '../Navbar/partials/NavItem';

const Footer = ({ navItems }: { navItems?: INavItem[] }) => {
  const translationsResponse = useTranslations('Footer');
  const [labels, setLabels] = useState(async () => {
    await translationsResponse.then((data) => {
      setLabels(data);
    });
  });

  return (
    <div className="mt-10 p-5 md:px-11 md:py-16 flex flex-col md:flex-row justify-between bg-black shadow-xl">
      <div className="flex flex-col md:flex-row">
        {navItems?.map(({ sys, title, pathname }) => (
          <NavItem key={sys?.id} title={title} pathname={pathname} />
        ))}
      </div>
      <div className="flex items-center justify-center md:justify-start my-5 md:my-0">
        <p className="font-cabin text-center md:text-left text-carrara/50"> &copy; 2023 Andres Saa. {labels['allRightsReserved']}.</p>
      </div>
    </div>
  );
};

export default Footer;
