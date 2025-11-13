import * as React from 'react';
import AtomText from "../atoms/a_text"
import MoleculesPromoBox from '../molecules/m_promo_box';

interface PromoItem {
    title: string
    description: string
    image: string
}

interface IOrganismsPromoListProps {
    promoItem: PromoItem[]
}

const OrganismsPromoList: React.FunctionComponent<IOrganismsPromoListProps> = ({promoItem}) => {
    return (
        <div className='text-center mt-20' id="promoSection">
            <AtomText type='title' text='Dapatkan Promo Terbaik' />
            <div className="flex flex-wrap justify-center gap-6 mt-8">
            {
                promoItem.map((dt, idx) => (
                    <MoleculesPromoBox key={idx} image={dt.image} title={dt.title} description={dt.description}/>
                ))
            }
            </div>
        </div>
    );
};

export default OrganismsPromoList;
