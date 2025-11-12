import React from 'react'

interface AtomButton {
  type: string
  text: any
  extraClass?: string
  action?: any
}

const AtomButton: React.FC<AtomButton> = ({ type, text, extraClass, action }) => {
    if (type === 'link') {
        return <a className={`btn ${type} ${extraClass}`} href={action}>{text}</a>
    } else {
        return <></>
    }
}

export default AtomButton