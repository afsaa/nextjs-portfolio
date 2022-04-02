import React from 'react';
import Link from 'next/link';

const NavItem = ({ id, pathname, query = '', title }: { id: number; pathname: string; query?: string; title: string }) => {
  return (
    <li key={id} className="transition-all mx-2 p-2 list-none no-underline rounded-md font-montserrat font-medium text-lg text-carrara hover:bg-primary-light/50 hover:drop-shadow-lg">
      <Link href={{ pathname, query }}>{title}</Link>
    </li>
  );
};

export default NavItem;
