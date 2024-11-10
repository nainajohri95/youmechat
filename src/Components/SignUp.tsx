import { useState } from "react"
import Home from "./Home";

type SignupProps = {
  onSignup: () => void; // type void means this fun will return nothing
};


const SignUp = ({onSignup}: SignupProps)  => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [showHome, setShowHome] = useState<boolean>(false);

  const handleSignup = (event: React.FormEvent)=>{
    event.preventDefault();
    if(userName && email && password){
      onSignup();
      setShowHome(true);
    }
    else{
      alert('Please enter details!')
    }
  }

  if(showHome){
    return <Home/>
  }

  return (
    <div className='w-full max-w-md bg-slate-800/95 backdrop-blur-sm shadow-xl p-6 rounded-lg'>
    <div className="text-white text-2xl font-bold mb-6">Create an Account</div>
   <form onSubmit={handleSignup} className="flex flex-col gap-4">

      <div className="relative">
      <input 
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder='Enter your name'
          className="bg-transparent rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
       <div className="absolute inset-0 rounded-lg pointer-events-none bg-slate-700/50"></div>
      </div>

        <div className='relative'>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email@email.com'
          className="bg-transparent rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <div className="absolute inset-0 rounded-lg pointer-events-none bg-slate-700/50"></div>
      </div>

      <div className="relative">
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="bg-transparent rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <div className="absolute inset-0 rounded-lg pointer-events-none bg-slate-700/50"></div>
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
        Sign In
      </button>
      <div className="text-white text-sm text-center">Already have an account?</div>
    </form>
    
  </div>
  )
}


export default SignUp