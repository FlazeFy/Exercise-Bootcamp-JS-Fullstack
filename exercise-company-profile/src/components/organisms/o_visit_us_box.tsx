import * as React from 'react';
import AtomBreakline from "../atoms/a_breakline"
import AtomText from "../atoms/a_text"
import AtomButton from "../atoms/a_button"
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MoleculesVisitBox from '../molecules/m_visit_box';

interface VisitItem {
    title: string
    address: string
}

interface ScheduleDayItem {
    dayName: string
    hour: string
}

interface IOrganismsVisitUsBoxProps {
    visitItem: VisitItem[]
    scheduleItem: ScheduleDayItem[]
}

const OrganismsVisitUsBox: React.FunctionComponent<IOrganismsVisitUsBoxProps> = ({ visitItem, scheduleItem }) => {
    return (
        <div className='text-center bg-dark text-white p-5 md:p-10 rounded-2xl border-4 border-white shadow-lg' id='contactSection'>
            <AtomText type='title' text='Temukan kita di?' />
            <AtomBreakline length={2}/>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <div className='p-5'>
                    {
                        visitItem.slice(0, Math.ceil(visitItem.length / 2)).map((dt,idx) => <MoleculesVisitBox key={idx} title={dt.title} address={dt.address}/>)
                    }
                </div>
                <div className='p-5'>
                    {
                        visitItem.slice(Math.ceil(visitItem.length / 2)).map((dt,idx) => <MoleculesVisitBox key={idx} title={dt.title} address={dt.address}/>)
                    }
                    <AtomBreakline length={1}/>
                </div>
                <div className='p-5'>
                    <AtomText type='content-title' text="Operational Hours" />
                    <hr className='my-2'/>
                    {
                        scheduleItem.map((dt,idx) => (
                            <div key={idx} className='flex flex-wrap justify-between'>
                                <AtomText type='content' text={dt.dayName} />
                                <AtomText type='content' text={dt.hour} />
                            </div>
                        ))
                    }
                    <AtomText type='content-title' text="Ikuti Kami" extraClass='mt-5'/>
                    <hr className='my-2'/>
                    <div className="flex flex-row justify-center items-center gap-4 mt-5">
                        <AtomButton type='link' text={<FontAwesomeIcon icon={faInstagram} className='w-5 h-5'/>}/>
                        <AtomButton type='link' text={<FontAwesomeIcon icon={faTiktok} className='w-5 h-5'/>}/>
                        <AtomButton type='link' text={<FontAwesomeIcon icon={faFacebook} className='w-5 h-5'/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrganismsVisitUsBox;
