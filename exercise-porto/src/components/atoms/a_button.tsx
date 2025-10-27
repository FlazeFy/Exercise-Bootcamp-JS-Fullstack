import React from 'react'

interface AtomButton {
  type: string
  text: string
  extraClass?: string
}

const AtomButton: React.FC<AtomButton> = ({ type, text, extraClass }) => {
    if (type === 'link') {
        return <a className={"btn btn-link " +extraClass}>{text}</a>
    } else {
        return <></>
    }
}

export default AtomButton