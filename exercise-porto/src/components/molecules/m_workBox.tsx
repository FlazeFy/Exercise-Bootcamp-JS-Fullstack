import React, { useState } from 'react'
import AtomText from '../atoms/a_text'

interface MoleculesWorkBoxProps {
    title: string
    content: string
    imagePath: string
}

const MoleculesWorkBox: React.FC<MoleculesWorkBoxProps> = ({ title, content, imagePath }) => {
    return (
        <div className="relative work-box bg-cover bg-center min-w-[65vw] min-h-[45vw] lg:min-w-[50vw] lg:min-h-[25vw] rounded-2xl"
            style={{ backgroundImage: `url(${imagePath})` }}>
            <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
            <img src={imagePath} alt={title} className="hidden" />
            <div className="relative z-10 work-box-content p-6 text-white">
                <AtomText type="content-title" text={title} />
                <AtomText type="content" text={content} />
            </div>
        </div>
    )
}

export default MoleculesWorkBox
