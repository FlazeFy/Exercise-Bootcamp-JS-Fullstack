'use client'
import * as React from 'react'
import axios from 'axios'
import MoleculesArticleBox from '../molecules/m_article_box'
import { ArticleData } from '@/helpers/data'

interface IAppProps {
    objectId: string
}

const OrganismsArticleById : React.FunctionComponent<IAppProps> = ({objectId}) => {
    const [article, setArticle] = React.useState<ArticleData | null>(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        const fetchArticleById = async (objectId: string) => {
        try {
            const res = await axios.get(`https://silverkettle-us.backendless.app/api/data/blog?where=%60objectId%60%20%3D%20'${objectId}'`)
                if (res.data && res.data.length > 0) {
                    setArticle(res.data[0])
                }
            } catch (err: any) {
                setError(err.message || 'Failed to load article')
            } finally {
                setLoading(false)
            }
        }
        fetchArticleById(objectId)
    }, [])

    if (loading) return (
        <div className='bg-gray-100 block p-10 rounded-2xl'>
            <p>Loading...</p>
        </div>
    )
    if (error) return <p className="text-red-600">{error}</p>
    if (!article) return (
        <div className='bg-gray-100 block p-10 rounded-2xl'>
            <p>No articles found</p>
        </div>
    )

    return <MoleculesArticleBox isNavigate={false} objectId={article.objectId} title={article.title} content={article.content} image={article.image} created={article.created}/>
};

export default OrganismsArticleById;
