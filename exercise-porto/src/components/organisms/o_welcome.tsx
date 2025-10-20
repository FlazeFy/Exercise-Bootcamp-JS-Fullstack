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
        <div className='flex flex-wrap -mx-4 min-h-screen p-20 bg-orange-100'>
            <div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-6'>
                <div className='flex flex-col justify-between h-full'>
                    <div>
                        <AtomText type='title' text={`Hi There, I'm ${username}`}/>
                        <AtomText type='sub-title' text={`A ${job}`}/>
                    </div>
                    <MoleculesTextNumber firstText='years' secondText='experience' total={yearsExp}/>
                </div>
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-6'>
                <div className='flex items-center justify-center min-h-screen'>
                    <AtomImage path={profilePic} width='100' height='100' className="rounded-full shadow-lg h-100 w-100"/>
                </div>
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-6'>
                <div className='flex flex-col justify-center h-full'>
                    <AtomText type='content' text={shortBio}/>
                    <br></br>
                    <AtomText type='content' text={educationInfo}/>
                </div>
            </div>
        </div>
    )
}

export default OrganismsWelcome