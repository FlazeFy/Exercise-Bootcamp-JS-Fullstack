import React from 'react'
import AtomText from '../atoms/a_text'


interface MoleculeFooterProps {
    appName: string
}

const MoleculeFooter: React.FC<MoleculeFooterProps> = ({ appName }) => {
    return (
        <footer className="m-5 flex justify-between items-center border-t border-gray-400 pt-5">
            <div className="mx-4 flex">
                <div className="text-xl font-semibold italic mr-2">{appName}</div>
                <AtomText type='content-title' extraClass='mx-5' text="|"/>
                <AtomText type='content-title' text="@2025. All Rights Reserved"/>
            </div>
            <AtomText type='content-title' text="Designed by Leonardho"/>
        </footer>
    )
}

export default MoleculeFooter