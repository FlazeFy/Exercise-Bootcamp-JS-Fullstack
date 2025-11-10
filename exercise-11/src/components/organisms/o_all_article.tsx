'use client'
import * as React from 'react'
import axios from 'axios'
import MoleculesArticleBox from '../molecules/m_article_box'
import { ArticleData } from '@/helpers/data'

const OrganismsAllArticle = () => {
    const [article, setArticle] = React.useState<ArticleData[] | null>([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        const fetchLastArticle = async () => {
        try {
            const res = await axios.get('https://silverkettle-us.backendless.app/api/data/blog?sortBy=created%20desc')
                if (res.data && res.data.length > 0) {
                    setArticle(res.data)
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
        <div className='flex flex-wrap w-full'>
            {
                article.map((dt,idx) => (
                    <div key={idx} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'>
                        <MoleculesArticleBox isNavigate={true} objectId={dt.objectId} title={dt.title} content={dt.content} image={dt.image} created={dt.created}/>
                    </div>
                ))
            }
        </div>
    )
};

export default OrganismsAllArticle;
