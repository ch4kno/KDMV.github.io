import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sing up');

  const onSubmitHandler =async (event) =>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-4 mt-10'>
        <p className='prata-regular text-4xl font-bold'>{currentState}</p> {/* Make text larger and bold */}
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' :<input type="text" className='w-full px-3 py-2 border boder-gray-800' placeholder='Name' required />}
      <input type="email" className='w-full px-3 py-2 border boder-gray-800' placeholder='Email' required />
      <input type="Password" className='w-full px-3 py-2 border boder-gray-800' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your Password?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=> setCurrentState('Sing Up')} className='cursor-pointer'>create account</p>
          : <p onClick={()=> setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState ==='Login' ? 'Sing In' : 'Sing Up'}</button>

    </form>

  )
}

export default Login