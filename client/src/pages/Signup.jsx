import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto gap-5">

        {/* Left side */}
        <div className="flex-1">
          <Link to='/' className='font-bold dark:text-white text-4xl'>
              <span className='anglelogo px-2 py-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 rounded-lg text-white'>ERMS</span>
          </Link>
          <p className='mt-5 text-xl font-extrabold'>
            Enterprise Resource Management System
          </p>
          <p className='mt-2 text-sm font-semibold'>
            Organise your resources in a better way :)
          </p>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your Username'/>
              <TextInput
                className='border-indigo-600'
                type='text'
                placeholder='Username'
                id='username'
              />
            </div>
            <div>
              <Label value='Your Email'/>
              <TextInput
                className='border-indigo-600'
                type='text'
                placeholder='name@company.com'
                id='emsil'
              />
            </div>
            <div>
              <Label value='Your Password'/>
              <TextInput
                className='border-indigo-600'
                type='text'
                placeholder='Password'
                id='password'
              />
            </div>
            <Button className='text-white font-extrabold' type='submit' gradientDuoTone='purpleToBlue'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>
              Have an account?
            </span>
            <Link to='/sign-in' className='text-red-500 font-bold'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
