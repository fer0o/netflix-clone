import Input from '@/components/input'
import React, { useCallback, useState } from 'react'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [name,setName] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState ('login')
    const toggleVariant = useCallback(()=> {
        setVariant((currentVariant)=> currentVariant === 'login' ? 'register' : 'login')
    },[])
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
        <div className='bg-black w-full h-full lg:bg-opacity-50'>
            <nav className='px-12 py-5'>
                <img src='/images/logo.png' alt='logo' className='h-12'/>
            </nav>
            <div className='flex justify-center'>
                <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/3 lg:max-w-md rounded-md w-full'>
                    <h2 className='text-white text-4xl mb-8 font-semibold'>
                        {variant === 'login'? 'Sign in' : 'Create an account' }
                    </h2>
                    <div className='flex flex-col gap-4'>
                        {variant === 'register' && (
                            <Input label='Username' onChange={(event:any)=> setName(event.target.value)} id='name' value={name}/>                            
                        )}
                    <Input label='Email' onChange={(event:any)=> setEmail(event.target.value)} id='email' type='email' value={email}/>
                    <Input label='Password' onChange={(event:any)=> setPassword(event.target.value)} id='password' type='password' value={password}/>
                    </div>
                    <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>{variant === 'login'? 'Login':'Sign up'}</button>
         
                    <p className='text-neutral-500 mt-8 mb-4'> { variant === 'login'? 'New to Netflix ?' : 'Already have an account'}
                    <span className='text-white ml-2 hover:underline cursor-pointer' onClick={toggleVariant}>{variant === 'login'? 'Create an account':'Log in'}</span>
                    </p>
                    <span className='text-white'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='text-blue-600 hover:underline cursor-pointer'>Learn more.</a></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth