import OrganismsAllNews from "@/components/organisms/o_all_news";

export default function Home() {
    return (
        <div className="min-h-screen p-5 lg:p-10">
            <div className="w-full rounded-2xl space-y-4 p-5 lg:p-10 shadow-2xl bg-white">
                <h1 className="font-bold">All News</h1>
                <OrganismsAllNews/>
            </div>
        </div>
    );
}
