import React from 'react'
import MoleculesCollapseButton from '../molecules/m_collapseButton';

interface SkillItem {
    title: string
    content: string
}

interface OrganismsSkillProps {
    skillItem: SkillItem[]
}

const OrganismsSkill: React.FC<OrganismsSkillProps> = ({ skillItem }) => {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className='flex flex-wrap -mx-4'>
                <div className="w-full md:w-1/2 px-4">
                    {
                        skillItem.map((item, idx) => <MoleculesCollapseButton key={idx} title={item.title} content={item.content} />)
                    }
                </div>
                <div className="w-full md:w-1/2 px-4">

                </div>
            </div>
        </div>
    );
};

export default OrganismsSkill