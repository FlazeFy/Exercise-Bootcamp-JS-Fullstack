import * as React from 'react';
import AtomText from "../atoms/a_text"

interface PromoItem {
    title: string
    description: string
    image: string
}

interface IOrganismsPromoBoxProps {
    promoItem: PromoItem[]
}

const OrganismsPromoBox: React.FunctionComponent<IOrganismsPromoBoxProps> = ({promoItem}) => {
    return (
        <div className='text-center mt-20'>
            <AtomText type='title' text='Dapatkan Promo Terbaik' />
            <div className="flex flex-wrap justify-center gap-6 mt-8">
            {
                promoItem.map((dt, idx) => (
                    <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-lg h-120 w-[90%] sm:w-[45%] md:w-[30%] md:h-80 xl:w-[22%] lg:h-100 cursor-pointer flex items-center justify-center text-white transition-all duration-300"
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${dt.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                            <AtomText type="sub-title" text={dt.title} />
                            <AtomText type="content" text={dt.description} extraClass="mt-2 text-sm" />
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default OrganismsPromoBox;
