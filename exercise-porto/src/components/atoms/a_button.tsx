import React from 'react'

interface AtomButton {
  type: string
  text: string
  extraClass?: string
  url?: string
}

const AtomButton: React.FC<AtomButton> = ({ type, text, extraClass, url }) => {
    if (type === 'link') {
        return <a className={"btn btn-link " +extraClass} href={url}>{text}</a>
    } else {
        return <></>
    }
}

export default AtomButton