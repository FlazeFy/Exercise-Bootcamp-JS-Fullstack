import React from 'react'

interface MenuItem {
    title: string
    target: string
}

interface OrganismsNavbarProps {
    menuItem: MenuItem[]
    appName: string
}

const OrganismsNavbar: React.FC<OrganismsNavbarProps> = ({ menuItem, appName }) => {
    return (
        <nav className="bg-white py-4 px-8 flex justify-between items-center border-b border-gray-200">
            <div className="text-xl font-semibold italic">{appName}</div>
            <ul className="flex space-x-8">
                {
                    menuItem.map((dt, idx) => <li>{dt.title}</li> )
                }
            </ul>
            <div className="flex items-center space-x-2 text-gray-700">
                <span>Lorem Ipsum</span>
            </div>
        </nav>
    )
}

export default OrganismsNavbar