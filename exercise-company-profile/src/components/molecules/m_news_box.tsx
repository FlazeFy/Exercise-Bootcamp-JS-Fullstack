import * as React from 'react';
import Image from 'next/image'
import { NewsData } from '../../helpers/data';
import Link from 'next/link';
import { convertFormatTimestamp } from '../../helpers/converter';

interface ExtraProps {
    isNavigate: boolean
}

const MoleculesNewsBox: React.FunctionComponent<NewsData & ExtraProps> = ({objectId, image, title, content, isNavigate, created}) => {
    const CardContent = (
        <div className={`border rounded-xl p-4 bg-gray-50 shadow-inner ${isNavigate && 'cursor-pointer'}`}>
            <div className="relative w-full h-100 mb-4">
                <Image src={image ?? ""} alt={title ?? "News image"} fill className="rounded-xl object-cover" unoptimized/>
            </div>
            <h5 className="text-xl text-gray-700 font-bold">{title}</h5>
            <p className="text-gray-700">{content}</p>
            <p className='text-muted-foreground italic mt-2'>Posted at {convertFormatTimestamp(created)}</p>
        </div>
    )
    
    return isNavigate ? (
        <Link href={`/news/detail/${objectId}`} className="block">
            {CardContent}
        </Link>
    ) : (
        CardContent
    )
};

export default MoleculesNewsBox;
