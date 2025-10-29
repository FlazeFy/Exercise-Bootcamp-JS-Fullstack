import AtomBreakline from "../atoms/a_breakline"
import AtomText from "../atoms/a_text"
import MoleculesFeedbackBox from "../molecules/m_feedbackBox"

interface FeedbackItem {
    name: string
    role: string
    image: string
    feedback: string
}

interface OrganismsFeedbackProps {
    feedbackItem: FeedbackItem[]
}

const OrganismsFeedback: React.FC<OrganismsFeedbackProps> = ({ feedbackItem }) => {
    return (
        <div className='py-30 -mx-4 my-3 px-20 bg-primary text-center'>
            <AtomText type='title' text='What they thinks?' />
            <AtomBreakline length={1}/>
            <AtomText type='content' text="Here's some feedback I got from my colleague"/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-20'>
                {
                    feedbackItem.map((dt, idx) => (
                        <MoleculesFeedbackBox key={idx} idx={idx} name={dt.name} role={dt.role} image={dt.image} feedback={dt.feedback}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OrganismsFeedback
