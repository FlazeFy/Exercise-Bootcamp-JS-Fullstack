import React from 'react'
import AtomImage from '../atoms/a_image'
import AtomText from '../atoms/a_text'
import MoleculesTextNumber from '../molecules/m_textNumber'

interface OrganismsWelcomeProps {
    username: string
    job: string
    yearsExp: number
    shortBio: string
    educationInfo: string
    profilePic: string
}

const OrganismsWelcome: React.FC<OrganismsWelcomeProps> = ({ username, job, yearsExp, shortBio, educationInfo, profilePic }) => {
    return (
        <div className='flex flex-wrap pt-20 lg:p-20 bg-primary text-center lg:text-start' id='aboutSection'>
            <div className='w-full lg:w-1/3 mb-6 px-4'>
                <div className='flex flex-col justify-between xl:h-100'>
                    <div className='mb-5'>
                        <AtomText type='title' text={`Hi There, I'm ${username}`}/>
                        <AtomText type='sub-title' text={`A ${job}`}/>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <MoleculesTextNumber firstText='years' secondText='experience' total={yearsExp}/>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/3 mb-6 px-4'>
                <div className='flex items-center justify-center'>
                    <AtomImage path={profilePic} className="rounded-full w-full h-full max-w-[200px] max-h-[200px] lg:max-w-full lg:max-h-full" />
                </div>
            </div>
            <div className='w-full lg:w-1/3 mb-6 px-4'>
                <div className='flex flex-col justify-center xl:h-100'>
                    <AtomText type='content' text={shortBio}/>
                    <br></br>
                    <AtomText type='content' text={educationInfo}/>
                </div>
            </div>
        </div>
    )
}

export default OrganismsWelcome