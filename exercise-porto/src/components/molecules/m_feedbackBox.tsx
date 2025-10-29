import React, { useState } from 'react'
import AtomText from '../atoms/a_text'

interface MoleculesFeedbackBoxProps {
    image: string
    name: string
    feedback: string
    role: string
    idx: number
}

const MoleculesFeedbackBox: React.FC<MoleculesFeedbackBoxProps> = ({ image, name, feedback, role, idx }) => {
    return (
        <div className={`relative bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center transition-all duration-500 ${idx === 1 ? 'md:-mt-8 z-10' : 'md:mt-8'}`}>
            <img src={image} alt={name} className='w-20 h-20 rounded-full object-cover -mt-14 border-4 border-white shadow-md'/>
            <p className='mt-6 text-gray-600 italic text-sm md:text-base'>“{feedback}”</p>
            <div className='mt-6'>
                <AtomText type='sub-title-small' text={name} />
                <AtomText type='content-title' text={role} />
            </div>
        </div>
    )
}

export default MoleculesFeedbackBox
