import React from 'react'
import AtomText from '../atoms/a_text'

interface MoleculesTextNumberProps {
    firstText: string
    secondText: string
    total: number
}

const MoleculesTextNumber: React.FC<MoleculesTextNumberProps> = ({ firstText, secondText, total }) => {
    return (
        <div className='flex flex-row'>
            <AtomText type='title' text={total.toString()}/>
            <div>
                <AtomText type='sub-title-small' text={firstText}/>
                <AtomText type='sub-title-small' text={secondText}/>
            </div>
        </div>
    )
}

export default MoleculesTextNumber