import MoleculesNavbar from "@/components/molecules/m_navbar";
import OrganismsLastArticle from "@/components/organisms/o_last_article";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <MoleculesNavbar/>
      <div className='flex flex-wrap m-5'>
        <div className='w-full md:w-full lg:w-1/2 p-1'>
          <OrganismsLastArticle/>
        </div>
        <div className='w-full md:w-full lg:w-1/2 p-1'>

        </div>
      </div>
    </div>
  );
}
