"use client"

import OrganismsLoginForm from '@/components/organisms/o_signup_form';
import * as React from 'react';

interface ILoginPageProps {
}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <OrganismsLoginForm/>
        </div>
    )
};

export default LoginPage;