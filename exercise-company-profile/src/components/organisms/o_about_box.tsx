import * as React from 'react';
import AtomText from '../atoms/a_text'

interface IOrganismsAboutBoxProps {
}

const OrganismsAboutBox: React.FunctionComponent<IOrganismsAboutBoxProps> = (props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[80vh]" id="aboutSection">
            <div className='flex items-center justify-center w-full h-full'>
                <img src='/doctor/dr_tiffany_chang.png' alt='/doctor/dr_tiffany_chang.png' className='"w-full h-auto max-h-[80vh] object-contain"'/>
            </div>
            <div className='text-center md:text-start flex flex-col justify-center'>
                <AtomText type='sub-title' text='Solusi Kebutuhan Estetika dan Gaya Hidup Masa Kini.'/>
                <hr className='my-10'/>
                <AtomText type='content' extraClass='mb-5' text='Klinik Kecantikan Vorta adalah klinik aesthetic yang menawarkan treatment dengan kualitas terbaik dan terpercaya. Kami hadir sebagai solusi dan jawaban atas kebutuhan gaya hidup saat ini. Kami senantiasa berkomitmen menghadirkan perawatan serta pelayanan dengan teknologi modern. Klinik Kecantikan Vorta didukung oleh staff dokter serta beautician yang bersertifikasi profesional. Kami merupakan jawaban bagi konsumen yang mengutamakan kenyamanan dengan hasil yang terbaik untuk tampil percaya diri.'/>
                <AtomText type='content-title' text='dr. Tiffany Chang, Dipl.AAAM'/>
                <AtomText type='sub-content' text='Dokter Penanggung Jawab Vorta Beauty Clinic'/>
            </div>
        </div>
    );
};

export default OrganismsAboutBox;
