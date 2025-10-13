import React from 'react'

interface AtomText {
  type: string
  text: string
  extraClass?: string
}

const AtomText: React.FC<AtomText> = ({ type, text, extraClass }) => {
    if (type === 'title') {
        return <h1 className={extraClass}>{text}</h1>
    } else if (type === 'content') {
        return <p className={extraClass}>{text}</p>
    } else if (type === 'sub-content') {
        return <p className={`sub-content ${extraClass || ''}`}>{text}</p>
    } else {
        return <></>
    }
}

export default AtomText