import React from 'react'

const Login = () => {
  return (
    <div className='w-full max-w-md bg-white/95 backdrop-blur-sm shadow-xl p-6' >
        <form className="flex flex-col gap-4">
            <input type="email" placeholder='Email' />
            <input type="passowrd" placeholder="Password" />
            <button>LogIn</button>
        </form>
    </div>
  )
}

export default Login