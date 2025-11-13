import * as React from 'react';
import AtomText from "../atoms/a_text"
import MoleculesDoctorBox from '../molecules/m_doctor_box';

interface DoctorItem {
    title: string
    description: string
    image: string
}

interface IOrganismsDoctorListProps {
    doctorItem: DoctorItem[]
}

const OrganismsDoctorList: React.FunctionComponent<IOrganismsDoctorListProps> = ({doctorItem}) => {
    return (
        <div className='text-center my-20'>
            <AtomText type='title' text='Temui Dokter Kami' />
            <div className="flex flex-wrap justify-center gap-6 mt-8">
            {
                doctorItem.map((dt, idx) => (
                    <MoleculesDoctorBox key={idx} image={dt.image} title={dt.title} description={dt.description}/>
                ))
            }
            </div>
        </div>
    );
};

export default OrganismsDoctorList;
