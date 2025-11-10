import OrganismsAllArticle from "@/components/organisms/o_all_article";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 p-5 lg:p-10">
      <div className="w-full rounded-2xl space-y-4 p-5 lg:p-10 shadow-2xl bg-white">
        <h1 className="font-bold">All Article</h1>
        <OrganismsAllArticle/>
      </div>
    </div>
  );
}
