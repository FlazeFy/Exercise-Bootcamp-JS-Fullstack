import OrganismsTestimoni from "@/components/organisms/o_testimoni_top";
import OrganismsAboutBox from "@/components/organisms/o_about_box";
import OrganismsWhyUs from "@/components/organisms/o_why_us";
import OrganismsVisitUsBox from "@/components/organisms/o_visit_us_box";
import OrganismsPromoBox from "@/components/organisms/o_promo_box";
import OrganismsOurServiceBox from "@/components/organisms/o_our_service_box";
import AtomBreakline from "@/components/atoms/a_breakline";
import { faThumbsUp, faLeaf, faPenToSquare, faUserDoctor, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const testimoniItem = [
    {
      name: 'Jhon Doe',
      role: 'Product Manager',
      image: '/mock/profile_pic.png',
      testimoni: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Adam Albert',
      role: 'Creative Manager',
      image: '/mock/profile_pic.png',
      testimoni: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Richard Kyle',
      role: 'Marketing Manager',
      image: '/mock/profile_pic.png',
      testimoni: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]

  const whyUsItem = [
    {
      title: 'Terpercaya',
      description: 'Dengan hasil yang sudah terbukti nyata menjadikan kami dipercaya oleh setiap pasien kami.',
      icon: faThumbsUp
    },
    {
      title: 'Nyaman',
      description: 'Klinik kami dirancang sangat nyaman untuk anda.',
      icon: faLeaf
    },
    {
      title: 'Aman',
      description: 'Prosedur yang aman adalah prioritas bagi kami.',
      icon: faPenToSquare
    },
    {
      title: 'Profesional',
      description: 'Dokter dan beautician yang profesional berkomitmen melayani anda dengan maksimal.',
      icon: faUserDoctor
    },
    {
      title: 'Hasil Nyata',
      description: 'Kami memberikan hasil yang nyata untuk anda.',
      icon: faCircleCheck
    }
  ]

  const visitItem = [
    { title: 'VORTA BEAUTY CLINIC PALEMBANG', address: 'Jl.Perintis Kemerdekaan No.12, Palembang.' },
    { title: 'VORTA BEAUTY CLINIC KELAPA GADING', address: 'Ruko Italian Walk Mall Of Indonesia Blok A No 5-6, Jl. Boulevard Bar. Raya, RT.18/RW.8, Klp. Gading Bar., Kec. Klp. Gading, jakarta, Daerah Khusus Ibukota Jakarta 14240' },
    { title: 'VORTA BEAUTY CLINIC BANDUNG', address: 'Jl. Sunda No.51, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40112' },
    { title: 'VORTA BEAUTY CLINIC PIK', address: 'Ruko Golf Island Beach Boulevard Blok B No 9, Pantai Indah Kapuk, Penjaringan, Kamal Muara, Jakarta Utara.' },
    { title: 'VORTA BEAUTY CLINIC KEMANG', address: 'Jl. Kemang Timur No.66, RT.6/RW.3, Kemang, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730' },
    { title: 'Contact Center', address: '+628118883318' },
  ]

  const scheduleItem = [
    { dayName : 'Monday', hour: '09:00 - 21:00' },
    { dayName : 'Tuesday', hour: '09:00 - 21:00' },
    { dayName : 'Wednesday', hour: '09:00 - 21:00' },
    { dayName : 'Thursday', hour: '09:00 - 21:00' },
    { dayName : 'Friday', hour: '09:00 - 21:00' },
    { dayName : 'Saturday', hour: '09:00 - 21:00' },
    { dayName : 'Sunday', hour: '09:00 - 21:00' },
  ]

  const promoItem = [
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11644.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11645.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11647.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11649.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11650.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11651.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11652.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11653.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11654.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11655.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11662.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11665.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11667.png' },
    { title: 'Flash Sale', description:'lorem ipsum', image: '/promo/11668.png' },
  ]

  return (
    <div className="flex flex-col min-h-screen p-5 lg:p-10 lg:max-w-[1440px] lg:mx-auto">
      <OrganismsAboutBox/>
      <AtomBreakline length={2}/>
      <OrganismsWhyUs whyUsItem={whyUsItem}/>
      <AtomBreakline length={2}/>
      <OrganismsOurServiceBox/>
      <AtomBreakline length={2}/>
      <OrganismsPromoBox promoItem={promoItem}/>
      <AtomBreakline length={2}/>
      <OrganismsTestimoni testimoniItem={testimoniItem}/>
      <AtomBreakline length={2}/>
      <OrganismsVisitUsBox visitItem={visitItem} scheduleItem={scheduleItem}/>
      <AtomBreakline length={2}/>
    </div>
  );
}
