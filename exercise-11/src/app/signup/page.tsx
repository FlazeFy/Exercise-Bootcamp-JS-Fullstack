"use client"

import OrganismsSignUpForm from '@/components/organisms/o_signup_form';
import * as React from 'react';

interface ISignUpPageProps {
}

const SignUpPage: React.FunctionComponent<ISignUpPageProps> = (props) => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <OrganismsSignUpForm/>
        </div>
    )
};

export default SignUpPage;