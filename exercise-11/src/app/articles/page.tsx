"use client"

import MoleculesNavbar from '@/components/molecules/m_navbar';
import OrganismsArticleForm from '@/components/organisms/o_article_form';
import * as React from 'react';

interface IArticlesPageProps {
}

const ArticlesPage: React.FunctionComponent<IArticlesPageProps> = (props) => {
    return (
        <div className="min-h-screen bg-amber-50">
            <MoleculesNavbar/>
            <div className='p-5 lg:p-10'>
                <OrganismsArticleForm/>
            </div>
        </div>
    )
};

export default ArticlesPage;