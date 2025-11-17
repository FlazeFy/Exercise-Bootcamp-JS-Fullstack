'use client'
import { useEffect, useState } from "react"
import OrganismsNewsForm from "@/components/organisms/o_news_form";
import { useRouter } from "next/navigation"

export default function NewsAddPage() {
    const router = useRouter();
    const [emailKey, setEmailKey] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedKey = localStorage.getItem("emailKey");
        setEmailKey(storedKey ? storedKey : null);

        if (!storedKey) {
            router.push("/login");
        }

        setLoading(false);
    }, [router]);

    if (loading) return null

    return (
        <div className="flex flex-col min-h-screen p-5 lg:p-10 lg:max-w-[1440px] lg:mx-auto">
            <OrganismsNewsForm />
        </div>
    );
}
