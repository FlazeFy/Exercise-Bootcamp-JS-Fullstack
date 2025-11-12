import OrganismsTestimoni from "@/components/organisms/o_testimoni_top";
import OrganismsAboutBox from "@/components/organisms/o_about_box";

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

  return (
    <div className="flex flex-col bg-white min-h-[100vh] p-5 lg:p-10">
      <OrganismsAboutBox/>
      <OrganismsTestimoni testimoniItem={testimoniItem}/>
    </div>
  );
}
