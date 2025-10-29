"use client"
import React from 'react'
import AtomBreakline from '../atoms/a_breakline'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ContactItem {
    title: string
    url: string
}

interface OrganismsContactProps {
    contactItem: ContactItem[]
    address: string
    email: string
    bodyEmail: string
}

const OrganismsContact: React.FC<OrganismsContactProps> = ({ contactItem, address, email, bodyEmail }) => {
    return (
        <div className=" bg-white py-8">
            <div className='flex flex-wrap -mx-4 my-3 px-20'>
                <div className="w-full sm:w-full md:w-7/12 lg:w-8/12 px-4">
                    <AtomText type='title' text="Let's make something amazing together"/>
                    <AtomBreakline length={3}/>
                    <AtomText type='sub-title' text={<>Start by <AtomButton type='link' text="saying hi" url={`mailto:${email}?subject=Hello&body=${bodyEmail}`}/></>}/>
                </div>
                <div className="w-full sm:w-full md:w-5/12 lg:w-4/12 px-4 items-center justify-start">
                    <AtomText type='sub-title-small' text='Information'/>
                    <AtomText type='content-title' text={<><FontAwesomeIcon icon={faLocationDot}/>{address}</>}/>
                    <AtomBreakline length={1}/>
                    {
                        contactItem.map((dt,idx) => (
                            <AtomButton key={idx} type='link' text={dt.title} extraClass="block mb-4" url={dt.url}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OrganismsContact