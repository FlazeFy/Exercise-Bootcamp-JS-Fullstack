import React from 'react'
import AtomText from '../atoms/a_text'


interface MoleculeFooterProps {
    appName: string
}

const MoleculeFooter: React.FC<MoleculeFooterProps> = ({ appName }) => {
    return (
        <footer className="m-5 flex flex-col md:flex-row justify-center md:justify-between items-center border-t border-gray-400 pt-5 text-center md:text-left">
            <AtomText type='content-title' text={`${appName} | @2025. All Rights Reserved`}/>
            <AtomText type='content-title' text="Designed by Leonardho" />
        </footer>
    )
}

export default MoleculeFooter