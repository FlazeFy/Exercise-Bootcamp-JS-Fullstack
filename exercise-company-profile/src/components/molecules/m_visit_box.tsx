import * as React from 'react';
import AtomText from '../atoms/a_text';
import AtomBreakline from "../atoms/a_breakline"

interface IMoleculesVisitBoxProps {
    title: string 
    address: string
}

const MoleculesVisitBox: React.FunctionComponent<IMoleculesVisitBoxProps> = ({title, address}) => {
    return (
        <>
            <AtomText type='content-title' text={title} />
            <hr className='my-2'/>
            <AtomText type='content' text={address} />
            <AtomBreakline length={1}/>
        </>
    );
};

export default MoleculesVisitBox;
