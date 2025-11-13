import * as React from 'react';
import AtomText from '../atoms/a_text';

interface IMoleculesDoctorBoxProps {
    image: string
    title: string
    description: string
}

const MoleculesDoctorBox: React.FunctionComponent<IMoleculesDoctorBoxProps> = ({image,title,description}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg h-120 w-[90%] sm:w-[45%] md:w-[30%] md:h-80 xl:w-[22%] lg:h-100 flex flex-col text-center">
            <img className="w-full min-h-[70%] md:min-h-[55%] lg:min-h-[70%] object-cover rounded-t-2xl" src={image} alt={title} />
            <div className="flex flex-col items-center justify-center mt-4 px-4 mb-5">
                <AtomText type="content-title" text={title} />
                <AtomText type="content" text={description} extraClass="mt-2 text-sm" />
            </div>
        </div>
    )
};

export default MoleculesDoctorBox;
