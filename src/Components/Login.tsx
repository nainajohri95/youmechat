import React, { useState } from 'react';
import Home from './Home';
import SignUp from './SignUp';

type LoginProps = {
  onSignIn: () => void; // Callback for when the user successfully signs in.
};

const Login = ({ onSignIn }: LoginProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showsSignup, setShowsSignup] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email && password) {
      onSignIn(); // Call the parent function to indicate a successful login.
      setIsLoggedIn(true);
    } else {
      alert('Please enter details!');
    }
  };

  // Show the home component if the user is logged in.
  if (isLoggedIn) {
    return <Home />;
  }

  // Show the SignUp component if the user clicks "Signing Up?".
  if (showsSignup) {
    return <SignUp onSignup={() => setShowsSignup(false)} />;
  }

  return (
    <div className="w-full max-w-md bg-slate-800/95 backdrop-blur-sm shadow-xl p-6 rounded-lg">
      <div className="text-white text-2xl font-bold mb-6">Welcome back</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-slate-700/50"></div>
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-slate-700/50"></div>
        </div>
        <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Sign In
        </button>
        <div onClick={() => setShowsSignup(true)} className="text-blue-500 text-sm text-center cursor-pointer">
          Signing Up?
        </div>
      </form>
    </div>
  );
};

export default Login;
