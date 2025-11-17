import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import OrganismsNewsById from '@/components/organisms/o_news_by_id'
import { Metadata } from 'next'

interface NewssDetailByIdPageProps {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const res = await fetch(`https://saintlyneed-us.backendless.app/api/data/news?where=%60objectId%60%20%3D%20'${id}'`)
    const data = await res.json()
    const news = data[0]
  
    return {
        title: news?.title || 'Blog Apps',
        description: news?.content.slice(0, 150) || 'No description',
    }
}

const NewssDetailByIdPage: React.FC<NewssDetailByIdPageProps> = ({ params }) => {
    const { id } = params

    return (
        <div className="min-h-screen bg-amber-50 p-5 lg:p-10">
            <div className="p-5 lg:p-10 w-full rounded-2xl space-y-4 shadow-2xl bg-white">
                <Link href="/news">
                    <Button variant="link" className="bg-red-600 text-white hover:bg-red-700 mb-5">
                        Go to News
                    </Button>
                </Link>
                <h1 className="font-bold">Detail News</h1>
                <OrganismsNewsById objectId={id} />
            </div>
        </div>
    )
}

export default NewssDetailByIdPage
