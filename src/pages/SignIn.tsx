
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const SignIn = () => {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock authentication logic
    setTimeout(() => {
      // For demo purposes, accept any non-empty email/password
      if (email.trim() && password.trim()) {
        console.log("Sign in successful with:", email, password);
        
        // Store user info in localStorage (in a real app, you'd use tokens)
        localStorage.setItem('user', JSON.stringify({
          email,
          name: email.split('@')[0],
          isLoggedIn: true
        }));
        
        toast({
          title: "Success",
          description: "You have successfully signed in"
        });
        
        // Redirect to homepage after successful login
        navigate('/');
      } else {
        toast({
          title: "Error",
          description: "Invalid email or password",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (name.trim() && signUpEmail.trim() && signUpPassword.trim()) {
        console.log("Sign up successful with:", name, signUpEmail);
        
        localStorage.setItem('user', JSON.stringify({
          email: signUpEmail,
          name: name,
          isLoggedIn: true
        }));
        
        toast({
          title: "Success",
          description: "Account created successfully"
        });
        
        navigate('/');
      } else {
        toast({
          title: "Error",
          description: "Please fill all fields",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" 
      style={{
        background: "linear-gradient(to right, #fb3434, #2f417b)"
      }}>
      <div 
        className={`bg-white rounded-[30px] shadow-lg overflow-hidden relative w-full max-w-[768px] min-h-[480px] ${isActive ? "active" : ""}`}
        id="container"
      >
        {/* Sign Up Form */}
        <div className="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-100 z-2"
          style={{
            transform: isActive ? "translateX(100%)" : "translateX(0)",
            opacity: isActive ? "1" : "0",
            zIndex: isActive ? "5" : "1",
          }}>
          <form onSubmit={handleSignUp} className="bg-white flex flex-col items-center justify-center p-10 h-full">
            <h1 className="text-xl font-bold mb-4">Create Account</h1>
            <div className="flex gap-3 my-5">
              <a href="#" className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-xs">or use your email for registration</span>
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
              required
            />
            <button 
              type="submit"
              className="bg-[#1d0b65] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-2"
          style={{
            transform: isActive ? "translateX(100%)" : "translateX(0)",
            zIndex: "2",
          }}>
          <form onSubmit={handleSignIn} className="bg-white flex flex-col items-center justify-center p-10 h-full">
            <h1 className="text-xl font-bold mb-4">Sign In</h1>
            <div className="flex gap-3 my-5">
              <a href="#" className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-xs">or use your email password</span>
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="text-sm my-4">Forget Your Password?</a>
            <button 
              type="submit"
              className="bg-[#1d0b65] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Toggle Container */}
        <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out rounded-l-[150px] z-[1000]"
          style={{
            transform: isActive ? "translateX(-100%)" : "translateX(0)",
            borderRadius: isActive ? "0 150px 100px 0" : "150px 0 0 100px",
          }}>
          <div className="bg-gradient-to-r from-[#ed0b0b] to-[#22077b] text-white relative h-full w-[200%]"
            style={{
              left: "-100%",
              transform: isActive ? "translateX(50%)" : "translateX(0)",
              transition: "all 0.6s ease-in-out",
            }}>
            {/* Left Panel (Sign In) */}
            <div className="absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0"
              style={{
                transform: isActive ? "translateX(0)" : "translateX(-200%)",
                transition: "all 0.6s ease-in-out",
              }}>
              <h1 className="text-xl font-bold mb-4">Welcome Back!</h1>
              <p className="text-sm leading-5 tracking-wide my-5">Enter your personal details to use all of site features</p>
              <button 
                type="button"
                className="bg-transparent border border-white text-white text-xs py-2.5 px-11 rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer"
                onClick={() => setIsActive(false)}
              >
                Sign In
              </button>
            </div>

            {/* Right Panel (Sign Up) */}
            <div className="absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 right-0"
              style={{
                transform: isActive ? "translateX(200%)" : "translateX(0)",
                transition: "all 0.6s ease-in-out",
              }}>
              <h1 className="text-xl font-bold mb-4">Hello, Friend!</h1>
              <p className="text-sm leading-5 tracking-wide my-5">Register with your personal details to use all of site features</p>
              <button 
                type="button"
                className="bg-transparent border border-white text-white text-xs py-2.5 px-11 rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer"
                onClick={() => setIsActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
