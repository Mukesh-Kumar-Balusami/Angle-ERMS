import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Signup() {

  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState(null);
  const [successMessages, setSuccessMessages] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    try {
      setLoading(true);
    setErrorMessages(null); 
    setSuccessMessages(null);
    if (!formData.username || !formData.email || !formData.password) {
      setLoading(false);
      return (setErrorMessages('Please fill out all fields.'));
    }
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccessMessages('Account created successfully');
      } else {
        setErrorMessages(data.message || 'Account already exists');
      }
      setLoading(false);
      if (res.ok) {
        navigate('/signin');
      }
    } catch (error) {
      setErrorMessages('Somethng went wrong');
      setLoading(false);
    }
  }



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch('/api/auth/signup', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json'},
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await res.json();

  //     if (!res.ok) {
  //       throw new Error(data.message || 'Something went wrong!');
  //     }

  //     setSuccess('Sign up successful!');
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  return (
    <div className='min-h-screen mt-20'>
      <div className="flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto gap-5">
          
        {/* Left side */}
        <div className="flex-1">
          <Link to='/' className='font-bold dark:text-white text-4xl'>
              <span className='anglelogo px-2 py-1 bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-lg text-white'>ERMS</span>
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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className="text-3xl font-extrabold font-sans text-blue-500">
              <h1>
                Sign UP
              </h1>
            </div>
            <div>
              <Label value='Your Username'/>
              <TextInput
                className='border-indigo-600'
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your Email'/>
              <TextInput
                className='border-indigo-600'
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your Password'/>
              <TextInput
                className='border-indigo-600'
                type='password'
                placeholder='**********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button className='text-white font-extrabold' type='submit' gradientDuoTone='purpleToBlue' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : 'Sign Up'
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>
              Have an account?
            </span>
            <Link to='/signin' className='text-red-500 font-bold'>
              Sign In
            </Link>
          </div>
          {
            errorMessages && (
              <Alert className='mt-5' color='failure'>
                {errorMessages}
              </Alert>
            // <p style={{ color: 'red' }}>{errorMessages}</p>
            )
          }
          {
            successMessages && (
              <Alert className='mt-5' color='success'>
                {successMessages}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
