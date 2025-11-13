import AtomBreakline from "../atoms/a_breakline"
import AtomText from "../atoms/a_text"
import MoleculesTestimoniBox from "../molecules/m_testimoniBox"

interface TestimoniItem {
    name: string
    role: string
    image: string
    testimoni: string
}

interface OrganismsTestimoniProps {
    testimoniItem: TestimoniItem[]
}

const OrganismsTestimoni: React.FC<OrganismsTestimoniProps> = ({ testimoniItem }) => {
    return (
        <div className='py-30 -mx-4 my-3 p-8 lg:p-20 text-center' id='testimonialSection'>
            <AtomText type='title' text='Apa yang mereka katakan?' />
            <AtomBreakline length={1}/>
            <AtomText type='content' text="Berikut adalah beberapa tanggapan dari pelanggan setia kami"/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 min-h-[400px] items-end'>
                {
                    testimoniItem.map((dt, idx) => (
                        <MoleculesTestimoniBox key={idx} idx={idx} name={dt.name} role={dt.role} image={dt.image} testimoni={dt.testimoni}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OrganismsTestimoni
