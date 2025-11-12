import * as React from 'react';
import AtomBreakline from "../atoms/a_breakline"
import AtomText from "../atoms/a_text"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface WhyUsItem {
    icon: any
    title: string
    description: string
}

interface IOrganismsWhyUsProps {
    whyUsItem: WhyUsItem[]
}

const OrganismsWhyUs: React.FunctionComponent<IOrganismsWhyUsProps> = ({whyUsItem}) => {
    return (
        <div className='py-30 -mx-4 my-3 p-8 lg:p-20 text-center'>
            <AtomText type='title' text='Mengapa memilih kami?' />
            <AtomBreakline length={1}/>
            <AtomText type='content' text="Berikut adalah beberapa hal penting yang menjadi perhatian kami"/>
            <div className='flex flex-wrap mt-10'>
                {
                    whyUsItem.map((dt,idx) => (
                        <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 mx-auto p-5">
                            <div className='bg-white text-center mb-5 shadow-xl rounded-2xl p-5 pt-10 min-h-35 flex flex-col justify-center why-us-box'>
                                <div className='rounded-full object-cover -mt-22 border-4 mb-3 p-5 text-white shadow-md mx-auto bg-primary icon'>
                                    <FontAwesomeIcon icon={dt.icon} className='w-7 h-7 lg:w-10 lg:h-10'/>
                                </div>
                                <AtomText type='content-title' text={dt.title}/>
                                <AtomText type='content' text={dt.description}/>
                            </div>
                        </div>
                    ))    
                }
            </div>
        </div>
    );
};

export default OrganismsWhyUs;
