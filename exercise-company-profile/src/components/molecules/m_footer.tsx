import React from 'react'
import AtomText from '../atoms/a_text'

interface MoleculeFooterProps {}

const MoleculeFooter: React.FC<MoleculeFooterProps> = (props) => {
    return (
        <footer className="p-5 flex flex-col md:flex-row justify-center md:justify-between items-center text-center">
            <div className='md:text-start'>
                <AtomText type='content-title' text='@2025. All Rights Reserved'/>
                <AtomText type='content' text='Redesign by FlazeFy'/>
            </div>
            <AtomText type='content-title' text="Made by Vorta Beauty Clinic" />
        </footer>
    )
}

export default MoleculeFooter