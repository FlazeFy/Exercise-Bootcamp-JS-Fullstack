import React, { useState } from 'react'
import AtomText from '../atoms/a_text'

interface MoleculesWorkBoxProps {
    title: string
    content: string
    imagePath: string
}

const MoleculesWorkBox: React.FC<MoleculesWorkBoxProps> = ({ title, content, imagePath }) => {
    return (
        <div className={`work-box bg-orange-500 bg-cover bg-center`} style={{backgroundImage:imagePath}}>
            <img src={imagePath} alt={title} className="hidden" />
            <div className="work-box-content">
                <AtomText type='content-title' text={title}/>
                <AtomText type='content' text={content}/>
            </div>
        </div>
    )
}

export default MoleculesWorkBox
