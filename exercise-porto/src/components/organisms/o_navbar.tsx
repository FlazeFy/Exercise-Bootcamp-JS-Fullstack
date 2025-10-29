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
        <nav className="p-8 flex justify-between items-center bg-primary w-full" style={{position:"fixed", zIndex:'999'}}>
            <div className="text-xl font-semibold italic">{appName}</div>
            <ul className="flex space-x-8">
                {
                    menuItem.map((dt, idx) => <li key={idx} className="nav-link rounded-full px-3 py-2">{dt.title}</li> )
                }
            </ul>
            <div className="flex items-center space-x-2 text-gray-700">
                <span>Contact</span>
            </div>
        </nav>
    )
}

export default OrganismsNavbar