'use client'
import * as React from 'react'
import axios from 'axios'
import MoleculesNewsBox from '../molecules/m_news_box'
import { NewsData } from '@/helpers/data'

interface IOrganismsNewsByIdProps {
    objectId: string
}

const OrganismsNewsById : React.FunctionComponent<IOrganismsNewsByIdProps> = ({objectId}) => {
    const [news, setNews] = React.useState<NewsData | null>(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        const fetchNewsById = async (objectId: string) => {
        try {
            const res = await axios.get(`https://saintlyneed-us.backendless.app/api/data/news?where=%60objectId%60%20%3D%20'${objectId}'`)
                if (res.data && res.data.length > 0) {
                    setNews(res.data[0])
                }
            } catch (err: any) {
                setError(err.message || 'Failed to load news')
            } finally {
                setLoading(false)
            }
        }
        fetchNewsById(objectId)
    }, [])

    if (loading) return (
        <div className='bg-gray-100 block p-10 rounded-2xl'>
            <p>Loading...</p>
        </div>
    )
    if (error) return <p className="text-red-600">{error}</p>
    if (!news) return (
        <div className='bg-gray-100 block p-10 rounded-2xl'>
            <p>No news found</p>
        </div>
    )

    return <MoleculesNewsBox isNavigate={false} objectId={news.objectId} title={news.title} content={news.content} image={news.image} created={news.created}/>
};

export default OrganismsNewsById;
