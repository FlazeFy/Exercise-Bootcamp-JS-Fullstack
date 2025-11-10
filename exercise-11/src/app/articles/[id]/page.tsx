import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import OrganismsArticleById from '@/components/organisms/o_article_by_id'
import { Metadata } from 'next'

interface ArticlesDetailByIdPageProps {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const res = await fetch(`https://silverkettle-us.backendless.app/api/data/blog?where=%60objectId%60%20%3D%20'${id}'`)
    const data = await res.json()
    const article = data[0]
  
    return {
        title: article?.title || 'Blog Apps',
        description: article?.content.slice(0, 150) || 'No description',
    }
}

const ArticlesDetailByIdPage: React.FC<ArticlesDetailByIdPageProps> = ({ params }) => {
    const { id } = params

    return (
        <div className="min-h-screen bg-amber-50 p-5 lg:p-10">
            <div className="p-5 lg:p-10 w-full rounded-2xl space-y-4 shadow-2xl bg-white">
                <Link href="/">
                    <Button variant="link" className="bg-red-600 text-white hover:bg-red-700 mb-5">
                        Go to Home
                    </Button>
                </Link>
                <h1 className="font-bold">Detail Article</h1>
                <OrganismsArticleById objectId={id} />
            </div>
        </div>
    )
}

export default ArticlesDetailByIdPage
