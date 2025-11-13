"use client"
import * as React from 'react';
import AtomText from "../atoms/a_text"
import MoleculesCollapseButton from '../molecules/m_collapse_button';
import MoleculesCollapseContent from '../molecules/m_collapse_content';

interface DetailTreatmentCare {
    title: string
    description: string
}

interface PostCareInstructionItem {
    treatment: string
    detail: DetailTreatmentCare[]
}

interface IOrganismsPostCareInstructionProps {
    postCareInstruction: PostCareInstructionItem[]
}

const OrganismsPostCareInstruction: React.FunctionComponent<IOrganismsPostCareInstructionProps> = ({ postCareInstruction}) => {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className='text-center my-10'>
            <AtomText type='title' text='Prosedur Sesudah Perawatan' />
            <AtomText type='content' text='Saat menjalani perawatan di klinik estetika kami, penting untuk membaca dan memahami informasi perawatan pasca-tindakan yang disediakan di bawah ini. Petunjuk ini bertujuan untuk membantu Anda mendapatkan hasil terbaik serta menjaga ketahanan hasil perawatan Anda.' extraClass='mt-5'/>
            <div className='flex flex-wrap -mx-4 mt-10'>
                <div className="w-full md:w-1/2 px-4">
                    {
                        postCareInstruction.map((dt, idx) => (
                            <MoleculesCollapseButton key={idx} title={dt.treatment} isActive={activeIndex === idx} onClick={() => setActiveIndex(idx)} detail={dt.detail}/>
                        ))
                    }
                </div>
                <div className="w-full md:w-1/2 px-4 text-center lg:text-start mt-10 md:mt-0">
                    {
                        activeIndex !== null && (
                            <div className="mt-2">
                                {
                                    postCareInstruction[activeIndex].detail.map((dt,idx) => (
                                        <MoleculesCollapseContent key={idx} title={dt.title} content={dt.description} isOpen={isOpen} setIsOpen={setIsOpen}/>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default OrganismsPostCareInstruction;
