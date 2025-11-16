'use client'
import * as React from 'react'
import axios from 'axios'
import MoleculesNewsBox from '../molecules/m_news_box'
import { NewsData } from '../../helpers/data'

const OrganismsAllNews = () => {
    const [news, setNews] = React.useState<NewsData[] | null>([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        const fetchLastNews = async () => {
        try {
            const res = await axios.get('https://saintlyneed-us.backendless.app/api/data/news?sortBy=created%20desc')
                if (res.data && res.data.length > 0) {
                    setNews(res.data)
                }
            } catch (err: any) {
                setError(err.message || 'Failed to load news')
            } finally {
                setLoading(false)
            }
        }
        fetchLastNews()
    }, [])

    if (loading) return <p>Loading latest news...</p>
    if (error) return <p className="text-red-600">{error}</p>
    if (!news) return <p>No newss found.</p>

    return (
        <div className='flex flex-wrap w-full'>
            {
                news.map((dt,idx) => (
                    <div key={idx} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <MoleculesNewsBox isNavigate={true} objectId={dt.objectId} title={dt.title} content={dt.content} image={dt.image} created={dt.created}/>
                    </div>
                ))
            }
        </div>
    )
};

export default OrganismsAllNews;
