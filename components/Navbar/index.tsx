import React from 'react'
import Link from 'next/link'

import NavItem from './partials/NavItem';

const Navbar = ({ navLinks }: {navLinks?: Array<any>}) => {
    return (
        <nav className="p-5 flex items-center justify-between bg-secondary-dark">
                <Link href="/">
                    <a className="font-montserrat font-semibold text-xl text-white">AFSAA</a>
                </Link>
            <div className="flex">
                {navLinks.map((navLink, index) => <NavItem id={index} title={navLink?.title} pathname={navLink?.pathname} />)}
            </div>
        </nav>
    )
}

export default Navbar;
