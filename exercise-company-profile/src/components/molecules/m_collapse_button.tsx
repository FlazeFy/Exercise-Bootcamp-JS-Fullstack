import AtomText from '../atoms/a_text'
import { Badge } from '../ui/badge'

interface DetailTreatmentCare {
    title: string
    description: string
}

interface MoleculesCollapseButtonProps {
    title: string
    isActive: boolean
    detail: DetailTreatmentCare[]
    onClick: () => void
}

const MoleculesCollapseButton: React.FC<MoleculesCollapseButtonProps> = ({ title, isActive, detail, onClick }) => {
    const classHolder = "border border-gray-200 p-4 rounded-2xl"

    return (
        <div className={isActive ? `${classHolder} shadow-lg mb-5` : `${classHolder} mb-3`}>
            <button onClick={onClick} className="w-full text-left text-lg items-center">
                <AtomText type='content-title' text={title}/>
                <div className='mt-2 flex flex-wrap gap-2'>
                    {
                        detail.map((dt,idx) => (
                            <Badge variant="outline" key={idx}>{dt.title}</Badge> 
                        ))
                    }
                </div>
            </button>
        </div>
    )
}

export default MoleculesCollapseButton
