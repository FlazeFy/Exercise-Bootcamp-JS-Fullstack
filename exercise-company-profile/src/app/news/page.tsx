'use client'
import { useEffect, useState } from "react"
import OrganismsAllNews from "@/components/organisms/o_all_news";
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NewsPage() {
    const [emailKey, setEmailKey] = useState<string | null>(null);

    useEffect(() => {
        const storedKey = localStorage.getItem("emailKey");
        setEmailKey(storedKey ? storedKey : null);
    }, [])

    return (
        <div className="min-h-screen p-5 lg:p-10">
            <div className="w-full rounded-2xl space-y-4 p-5 lg:p-10 shadow-2xl bg-white">
                <div className="flex flex-wrap justify-between">
                    <h1 className="font-bold">All News</h1>
                    {
                        emailKey ? (
                            <Link href="/news/add">
                                <Button variant="link" className="bg-primary text-white mb-5">Add News</Button>
                            </Link>
                        ) : <></>
                    }
                </div>
                <OrganismsAllNews/>
            </div>
        </div>
    );
}
