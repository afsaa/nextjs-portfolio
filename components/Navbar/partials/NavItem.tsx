import React from 'react'
import Link from 'next/link'

const NavItem = ({ id, pathname, query='', title }: {id: number, pathname: string, query?: string, title: string}) => {
    return (
        <li key={id} className="mx-2 list-none hover:underline font-medium text-lg text-white">
            <Link href={{ pathname, query }}>{title}</Link>
        </li>
    )
}

export default NavItem;
