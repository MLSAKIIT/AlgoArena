import NewPasswordForm from '@/components/auth/new-password/new-password-form'
import { notFound } from 'next/navigation'
import React from 'react'

const NewPasswordPage = ({ searchParams }) => {
  if (!searchParams.token){
    notFound()
  }
  return (
    <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <NewPasswordForm token={searchParams.token} />
    </div>
  )
}

export default NewPasswordPage