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
            <button onClick={onClick} className="w-full text-left flex text-lg items-center">
                <div className="flex-shrink-0 flex items-center justify-center w-13 h-13 rounded-full bg-red-600 text-white mr-5">
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
