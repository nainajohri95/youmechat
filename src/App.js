import Login from "./Components/Login";
import Logo from "./Assets/logochat.svg";
import { useState } from "react";
import Home from "./Components/Home";

function App() {
  const [signedIn, setSignedIn] = useState(false); 

  const handleSignIn  = () => {
    setSignedIn(true);
  };

  return (
    <div className="backdrop-filter: blur(.5rem) saturate(150%) min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-96 h-96 -left-24 -top-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob absolute" />
        <div className="w-96 h-96 -right-24 -bottom-24 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-delay-2000 absolute" />
        <div className="w-96 h-96 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-delay-4000 absolute" />
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 gap-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img src={Logo} alt="" className="w-20" />
            <h1 className="text-6xl font-bold text-white">YouMeChat</h1>
          </div>
          <p className="text-xl text-white/90">Connect. Chat. Share.</p>
        </div>
        {signedIn ? <Home /> : <Login onSignIn={handleSignIn} />}
      </div>
    </div>
  );
}

export default App;