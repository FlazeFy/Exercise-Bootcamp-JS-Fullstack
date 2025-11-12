import * as React from 'react';
import AtomText from "../atoms/a_text"
import AtomButton from "../atoms/a_button"

interface IOrganismsOurServiceBoxProps {
}

const OrganismsOurServiceBox: React.FunctionComponent<IOrganismsOurServiceBoxProps> = (props) => {
    return (
        <div className='text-center'>
            <AtomText type='title' text='Nikmati Perawatan Terbaik' />
            <div className='grid grid-cols-1 sm:grid-cols-2 min-h-[60vh] text-white mt-10'>
                <div className='flex flex-col justify-center bg-cover rounded-t-4xl md:rounded-l-4xl md:rounded-none p-10 md:p-15 lg:p-20' style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/sample/service_1.png')"}}>
                    <AtomText type='sub-title' text='Thread' />
                    <hr className='my-5'/>
                    <AtomText type='content-title' text='Dapatkan bentuk wajah yang anda impikan tentunya tanpa operasi dengan treatment Tanam / Tarik Benang yang tersedia di klinik kami.' />
                </div>
                <div className='flex flex-col justify-center bg-cover rounded-b-4xl md:rounded-r-4xl md:rounded-none p-10 md:p-15 lg:p-20' style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/sample/service_2.png')"}}>
                    <AtomText type='sub-title' text='Slimming' />
                    <hr className='my-5'/>
                    <AtomText type='content-title' text='Tersedia berbagai macam Slimming Treatment di klinik kami untuk membantu anda mendapatkan bentuk tubuh yang ideal.' />
                </div>
            </div>
            <div className='mt-10 mx-auto' style={{maxWidth:"720px"}}>
                <AtomText type='content-title' text='Reservasi jadwal treatment kamu sekarang sebelum penuh. Dan dapatkan potongan harga dengan Referral Code!' extraClass='mb-10' />
                <AtomButton type='link' text='Hubungi Sekarang!'/>
            </div>
        </div>
    );
};

export default OrganismsOurServiceBox;
