import * as React from 'react';
import AtomText from '../atoms/a_text';

interface IMoleculesPromoBoxProps {
    image: string
    title: string
    description?: string
}

const MoleculesPromoBox: React.FunctionComponent<IMoleculesPromoBoxProps> = ({image,title,description}) => {
    return (
        <div className="relative group rounded-2xl overflow-hidden shadow-lg h-120 w-[90%] sm:w-[45%] md:w-[30%] md:h-80 xl:w-[22%] lg:h-100 cursor-pointer flex items-center justify-center text-white transition-all duration-300"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <AtomText type="sub-title" text={title} />
                { description && <AtomText type="content" text={description} extraClass="mt-2 text-sm" /> }
            </div>
        </div>
    )
};

export default MoleculesPromoBox;
