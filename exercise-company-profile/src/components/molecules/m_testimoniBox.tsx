import React, { useState } from 'react'
import AtomText from '../atoms/a_text'

interface MoleculesTestimoniBoxProps {
    image: string
    name: string
    testimoni: string
    role: string
    idx: number
}

const MoleculesTestimoniBox: React.FC<MoleculesTestimoniBoxProps> = ({ image, name, testimoni, role, idx }) => {
    const positionClass =
        idx === 1 ? 'self-start' : 'self-end'

    return (
        <div className={`relative bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center transition-all duration-500 min-h-[280px] ${positionClass} testimoni-box`}>
            <img src={image} alt={name} className='w-20 h-20 rounded-full object-cover -mt-18 border-4 shadow-md'/>
            <p className='mt-6 text-gray-600 italic text-sm md:text-base'>“{testimoni}”</p>
            <div className='mt-6 text-center'>
                <AtomText type='sub-title-small' text={name} />
                <AtomText type='content-title' text={role} />
            </div>
        </div>
    )
}

export default MoleculesTestimoniBox
