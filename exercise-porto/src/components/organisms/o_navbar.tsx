'use client'
import React, { useState } from 'react'

interface MenuItem { title: string; target: string }
interface OrganismsNavbarProps { menuItem: MenuItem[]; appName: string }

const OrganismsNavbar: React.FC<OrganismsNavbarProps> = ({ menuItem, appName }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-primary fixed top-0 left-0 w-full z-[999]">
            <div className="flex justify-between items-center p-6">
                <div className="text-xl font-semibold italic">{appName}</div>
                <ul className="hidden lg:flex space-x-8">
                    {
                        menuItem.map((dt, idx) => 
                            <li key={idx} className="nav-link rounded-full px-3 py-2 hover:bg-primary/80 cursor-pointer">{dt.title}</li>
                        )
                    }
                </ul>
                <div className="hidden lg:flex items-center space-x-2 nav-link rounded-full px-3 py-2 hover:bg-primary/80 cursor-pointer">Contact</div>
                <button className="lg:hidden flex items-center text-black focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {
                        isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />) 
                        : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />)
                    }
                    </svg>
                </button>
            </div>
            {
                isOpen && (
                    <div className="lg:hidden flex flex-col items-start bg-primary border-t border-primary/30 animate-slideDown">
                        {
                            menuItem.map((dt, idx) => 
                                <button key={idx} className="w-full text-left px-6 py-3 hover:bg-primary/80 transition-all nav-link">{dt.title}</button>
                            )
                        }
                        <button className="w-full text-left px-6 py-3 hover:bg-primary/80 transition-all nav-link">Contact</button>
                    </div>
                )
            }
        </nav>
    )
}

export default OrganismsNavbar
