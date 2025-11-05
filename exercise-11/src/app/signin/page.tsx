"use client"

import OrganismsSignInForm from '@/components/organisms/o_signin_form';
import * as React from 'react';

interface ISignInPageProps {
}

const SignInPage: React.FunctionComponent<ISignInPageProps> = (props) => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <OrganismsSignInForm/>
        </div>
    )
};

export default SignInPage;