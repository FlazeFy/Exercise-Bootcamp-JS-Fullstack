"use client"
import React from 'react'
import AtomBreakline from '../atoms/a_breakline'
import AtomText from '../atoms/a_text'

interface WorkExperienceItem {
    company: string
    period: string
    role: string
    description: string
    type: string
    color?: string
}

interface OrganismsWorkExperienceProps {
    workExperienceItem: WorkExperienceItem[]
}

const OrganismsWorkExperience: React.FC<OrganismsWorkExperienceProps> = ({ workExperienceItem }) => {
    return (
        <div className="py-8 -mx-4 my-3 px-20 bg-primary">
            <AtomText type='title' text="My Work Experience" extraClass='text-center my-20'/>
            {
                workExperienceItem.map((dt, idx)=> (
                    <div key={idx} className="flex flex-col md:flex-row items-start ">
                        <div className="w-full md:w-5/12 md:pr-10 mb-10 md:mb-0">
                            <AtomText type='sub-title-small' text={<span className='font-bold'>{dt.company}</span>} extraClass="mb-2"/>
                            <AtomText type='content-title' text={dt.period}/>
                        </div>
                        <div className="w-full md:w-1/12 md:pl-10 mb-10 ">
                            <div className="relative flex items-center justify-center mx-4 position-relative">
                                <div className="w-10 h-10 rounded-full border-dashed bg-primary" style={{ borderColor: '#2C7A7B', borderWidth: '3px', position: 'absolute', top: '0', zIndex: "900", padding: '7px' }}>
                                    <div className="w-5 h-5 rounded-full" style={{ backgroundColor: dt.color || '#2C7A7B' }}></div>
                                </div>
                                <div className='h-100 border-dashed border-2' style={{ borderColor: '#2C7A7B', width: '0.1px', height: '100px', position: 'absolute', top: '0' }}></div>
                            </div>
                        </div>
                        <div className="w-full md:w-5/12 md:pl-10 mb-10 ">
                            <AtomText type='sub-title-small' text={<span className='font-bold'>{dt.role}</span>} extraClass="mb-2"/>
                            <AtomText type='content' text={dt.description}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default OrganismsWorkExperience