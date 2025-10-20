import React from 'react'
import Image from 'next/image'

interface AtomImageProps {
    path: string
    width: string
    height: string
    className: string
}

const AtomImage: React.FC<AtomImageProps> = ({ path, width, height, className }) => {
    return <Image src={path} alt={path} width={width} height={height} className={className}/>
}

export default AtomImage