import React from 'react';
import Link from 'next/link';

const NavItem = ({ id, pathname, query = '', title }: { id: number; pathname: string; query?: string; title: string }) => {
  return (
    <li key={id} className="mx-2 p-2 list-none no-underline rounded-md font-medium text-lg text-black hover:bg-secondary-light hover:drop-shadow-lg">
      <Link href={{ pathname, query }}>{title}</Link>
    </li>
  );
};

export default NavItem;
