"use client"
import React from 'react'
import AtomBreakline from '../atoms/a_breakline'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'
import MoleculesWorkBox from '../molecules/m_workBox'

interface LatestWorkItem {
    title: string
    content: string
    imagePath: string
}

interface OrganismsLatestWorkProps {
    workItem: LatestWorkItem[]
}

const OrganismsLatestWork: React.FC<OrganismsLatestWorkProps> = ({ workItem }) => {
    return (
        <div className=" bg-white py-8">
            <div className='flex flex-wrap -mx-4 p-8 lg:p-20 text-center md:text-start'>
                <div className="w-full md:w-1/2 px-4">
                    <AtomText type='title' text='My Latest Works'/>
                    <AtomBreakline length={1}/>
                    <AtomText type='content' text='You can see my latest work for each of my skill'/>
                </div>
                <div className="w-full md:w-1/2 px-4 flex items-center justify-center mt-5 md:justify-end md:mt-0">
                    <AtomButton type='link' text='Explore More Works!'/>
                </div>
            </div>
            <div className="work-scroll-container">
                {
                    workItem.map((item, idx) => (
                        <MoleculesWorkBox key={idx} title={item.title} content={item.content} imagePath={item.imagePath}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OrganismsLatestWork