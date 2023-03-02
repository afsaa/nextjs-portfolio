import React from 'react';
import Link from 'next/link';
import { Sys } from '../../../generated/graphql';
import { useRouter } from 'next/router';

export type INavItem = { sys?: Sys; pathname?: string; query?: string; title?: string };

const NavItem = ({ pathname, query = '', title }: INavItem) => {
  const router = useRouter();

  return (
    <li
      className={`transition-all mx-2 p-2 list-none no-underline font-montserrat font-medium text-lg text-carrara ${
        pathname === router.route ? 'border-b-2 border-primary-light hover:drop-shadow-lg' : ''
      } hover:border-b-2 border-primary-light hover:drop-shadow-lg`}
    >
      <Link className="h-full" href={{ pathname, query }}>
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
