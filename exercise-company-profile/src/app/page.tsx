import OrganismsTestimoni from "@/components/organisms/o_testimoni_top";
import OrganismsAboutBox from "@/components/organisms/o_about_box";
import OrganismsWhyUs from "@/components/organisms/o_why_us";
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

  return (
    <div className="flex flex-col min-h-screen p-5 lg:p-10 lg:max-w-[1440px] lg:mx-auto">
      <OrganismsAboutBox/>
      <AtomBreakline length={2}/>
      <OrganismsWhyUs whyUsItem={whyUsItem}/>
      <AtomBreakline length={2}/>
      <OrganismsOurServiceBox/>
      <AtomBreakline length={2}/>
      <OrganismsTestimoni testimoniItem={testimoniItem}/>
    </div>
  );
}
