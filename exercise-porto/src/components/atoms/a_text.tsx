import React from 'react'

interface AtomText {
  type: string
  text: any
  extraClass?: string
}

const AtomText: React.FC<AtomText> = ({ type, text, extraClass }) => {
    if (type === 'title') {
        return <h1 className={extraClass}>{text}</h1>
    } else if (type === 'sub-title') {
        return <h2 className={extraClass}>{text}</h2>
    } else if (type === 'sub-title-small') {
        return <h3 className={extraClass}>{text}</h3>
    } else if (type === 'content-title') {
        return <h4 className={extraClass}>{text}</h4>
    } else if (type === 'content') {
        return <p className={extraClass} dangerouslySetInnerHTML={{ __html: text }}/>
    } else if (type === 'sub-content') {
        return <p className={`sub-content ${extraClass || ''}`}>{text}</p>
    } else {
        return <></>
    }
}

export default AtomText