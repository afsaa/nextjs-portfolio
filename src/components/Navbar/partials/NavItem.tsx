import React from 'react';
import Link from 'next/link';

export type INavItem = { sys: any; pathname?: string; query?: string; title?: string };

const NavItem = ({ sys, pathname, query = '', title }: INavItem) => {
  return (
    <li key={sys?.id} className="transition-all mx-2 p-2 list-none no-underline rounded-md font-montserrat font-medium text-lg text-carrara hover:bg-primary-light/50 hover:drop-shadow-lg">
      <Link href={{ pathname, query }}>{title}</Link>
    </li>
  );
};

export default NavItem;
