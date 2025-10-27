import AtomText from '../atoms/a_text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface MoleculesCollapseButtonProps {
    title: string
    total_project: number
    icon: any
    isActive: boolean
    onClick: () => void
}

const MoleculesCollapseButton: React.FC<MoleculesCollapseButtonProps> = ({ title, total_project, icon, isActive, onClick }) => {
    const classHolder = "border border-gray-200 p-4 rounded-2xl"

    return (
        <div className={isActive ? `${classHolder} shadow-xl mb-5` : `${classHolder} mb-3`}>
            <button onClick={onClick} className="w-full text-left flex text-lg">
                <div className='rounded-full bg-red-600 py-3 px-4 my-2 ml-3 mr-5 text-white'>
                    <FontAwesomeIcon icon={icon} />  
                </div>              
                <div>
                    <AtomText type='content-title' text={title}/>
                    <AtomText type='content' text={total_project.toString()+ " projects"}/>
                </div>
            </button>
        </div>
    )
}

export default MoleculesCollapseButton
