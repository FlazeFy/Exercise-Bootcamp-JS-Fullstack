'use client'
import * as React from 'react'
import axios from 'axios'
import Image from 'next/image'

interface Article {
    title: string
    content: string
    image: string
}

interface IOrganismsLastArticleProps {}

const OrganismsLastArticle: React.FunctionComponent<IOrganismsLastArticleProps> = (props) => {
    const [article, setArticle] = React.useState<Article | null>(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        const fetchLastArticle = async () => {
        try {
            const res = await axios.get('https://silverkettle-us.backendless.app/api/data/blog?sortBy=created%20desc&pageSize=1')
                if (res.data && res.data.length > 0) {
                    setArticle(res.data[0])
                }
            } catch (err: any) {
                setError(err.message || 'Failed to load article')
            } finally {
                setLoading(false)
            }
        }
        fetchLastArticle()
    }, [])

    if (loading) return <p>Loading latest article...</p>
    if (error) return <p className="text-red-600">{error}</p>
    if (!article) return <p>No articles found.</p>

    return (
        <>
            <h1 className="font-bold">Latest Article</h1>
            <div className="border rounded-xl p-4 bg-gray-50 shadow-inner">
                <div className="relative w-full h-100 mb-4">
                    <Image src={article.image} alt="Preview" fill className="rounded-xl" unoptimized/>
                </div>
                <h5 className="text-xl text-gray-700 font-bold">{article.title}</h5>
                <p className="text-gray-700">{article.content}</p>
            </div>
        </>
    )
};

export default OrganismsLastArticle;
