import React from 'react'

const Login = () => {
  return (
    <div className='w-full max-w-md bg-slate-800/95 backdrop-blur-sm shadow-xl p-6 rounded-lg'>
      <div className="text-white text-2xl font-bold mb-6">Welcome back</div>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <input 
            type="email"
            placeholder='email@email.com'
            className="bg-transparent rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-slate-700/50"></div>
        </div>
        <div className="relative">
          <input 
            type="password" 
            placeholder="Password"
            className="bg-transparent rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-slate-700/50"></div>
        </div>
        <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Sign In
        </button>
        <div className="text-white text-sm text-center">Signing Up?</div>
      </form>
    </div>
  )
}

export default Login