"use client"
import React, { useState } from 'react'
import AtomBreakline from '../atoms/a_breakline'
import AtomText from '../atoms/a_text'
import MoleculesCollapseButton from '../molecules/m_collapseButton'

interface SkillItem {
    title: string
    content: string
    total_project: number
    total_certificate: number
    icon: any
}

interface OrganismsSkillProps {
    skillItem: SkillItem[]
}

const OrganismsSkill: React.FC<OrganismsSkillProps> = ({ skillItem }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="bg-white p-8 lg:p-20">
            <div className='flex flex-wrap -mx-4'>
                <div className="w-full md:w-1/2 px-4">
                    {
                        skillItem.map((item, idx) => (
                            <MoleculesCollapseButton key={idx} 
                                title={item.title} isActive={activeIndex === idx} 
                                total_project={item.total_project} onClick={() => setActiveIndex(idx)}
                                icon={item.icon}/>
                        ))
                    }
                </div>
                <div className="w-full md:w-1/2 px-4 text-center lg:text-start">
                    <AtomText type='title' text='What do I create?'/>
                    <AtomBreakline length={1}/>
                    {
                        activeIndex !== null && (
                            <div className="mt-2">
                                <AtomText type='content' text={skillItem[activeIndex].content}/>
                                <AtomBreakline length={1}/>
                                <div className='flex flex-wrap -mx-2'>
                                    <div className='w-full md:w-1/2'>
                                        <AtomText type='title' text={skillItem[activeIndex].total_project.toString()}/>
                                        <AtomText type='content-title' text="Total Project"/>
                                    </div>
                                    <div className='w-full md:w-1/2'>
                                        <AtomText type='title' text={skillItem[activeIndex].total_certificate.toString()}/>
                                        <AtomText type='content-title' text="Total Certificate"/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default OrganismsSkill