import { LoginForm } from '@/components/auth/sign-in/login-form'
import React from 'react'

const SignInPage = ({searchParams}) => {
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
     <LoginForm callbackUrl={searchParams.callbackUrl}/>
    </div>
  )
}

export default SignInPage