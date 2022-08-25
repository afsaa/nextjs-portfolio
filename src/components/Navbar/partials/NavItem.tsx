import React from 'react';
import Link from 'next/link';
import { Sys } from '../../../generated/graphql';

export type INavItem = { sys?: Sys; pathname?: string; query?: string; title?: string };

const NavItem = ({ pathname, query = '', title }: INavItem) => {
  return (
    <li className="transition-all mx-2 p-2 list-none no-underline rounded-md font-montserrat font-medium text-lg text-carrara hover:bg-primary-light/50 hover:drop-shadow-lg">
      <Link href={{ pathname, query }}>{title}</Link>
    </li>
  );
};

export default NavItem;
