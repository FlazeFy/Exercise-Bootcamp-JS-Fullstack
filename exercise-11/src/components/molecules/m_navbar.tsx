'use client'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import * as React from 'react';
import { useAuthStore } from '@/store/authStore';

interface IMoleculesNavbarProps {
}

const MoleculesNavbar: React.FunctionComponent<IMoleculesNavbarProps> = (props) => {
    const email = useAuthStore((state: any) => state.email)

    return (
        <nav className="w-full bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-semibold text-black">HotCoffee</Link>
                <div className="hidden md:flex items-center w-1/3">
                    <Input type="text" placeholder="Search..." className="w-full"/>
                </div>
                <div className="flex items-center gap-6 text-black text-sm font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/articles">Articles</Link>
                </div>
                <div>
                    { email ? <h2>@{email}</h2> : <Link href="/signin">Sign In</Link> }
                </div>
            </div>
        </nav>
      )
};

export default MoleculesNavbar;
