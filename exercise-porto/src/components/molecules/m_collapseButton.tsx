"use client"
import { useState } from 'react'
import AtomText from '../atoms/a_text';

interface MoleculesCollapseButtonProps {
    title: string
    content: string
}

const MoleculesCollapseButton: React.FC<MoleculesCollapseButtonProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-200 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left flex justify-between items-center text-lg font-semibold">
                <AtomText type='content-title' text={title}/>
            </button>
            {
                isOpen && (
                    <div className="mt-2 text-gray-600 text-sm">{content}</div>
                )
            }
        </div>
    );
};

export default MoleculesCollapseButton;
