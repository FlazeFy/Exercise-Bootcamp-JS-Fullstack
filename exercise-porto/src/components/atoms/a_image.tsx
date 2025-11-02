import React from 'react'
import Image from 'next/image'

interface AtomImageProps {
    path: string
    className?: string
}
  
const AtomImage: React.FC<AtomImageProps> = ({ path, className }) => {
    return (
        <div className={`relative w-full aspect-square ${className || ''}`}>
            <Image src={path} alt={path} fill className="object-cover rounded-full"/>
        </div>
    )
}
  
export default AtomImage