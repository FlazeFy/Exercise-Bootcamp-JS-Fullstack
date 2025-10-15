import React from 'react'

interface AtomButton {
  type: string
  text?: string
  extraClass?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const AtomButton: React.FC<AtomButton> = ({ type, text, extraClass, onClick }) => {
    if(type === "btn-no-border"){
        return <a className={`btn no-animation btn-link ${extraClass || ''}`} onClick={onClick}>{text}</a>
    } else if(["btn-danger","btn-warning"].includes(type)){
        return <a className={`btn ${type} ${extraClass || ''}`} onClick={onClick}>{text}</a>
    } else {
        return <></>
    }
}

export default AtomButton