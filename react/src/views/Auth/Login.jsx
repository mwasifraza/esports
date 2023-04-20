import { useState } from "react";
import CustomButton from "../../components/Custom/Button";
import CustomInput from "../../components/Custom/Input";
import Spinner from "../../components/Loader/Spinner";
import SocialButtons from "../../components/SocialButton/SocialButtons";

export default function Login() {
  const [loading, setLoading] = useState(false);

  function handleLogin(e){
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }

  return (
    <>
      <div className="flex items-center justify-center h-full px-4 lg:px-16">
        <div className="w-full max-w-md space-y-6">   

          <div>
            <h3 className="text-2xl tracking-tight text-orange-500">
              <span className="font-bold text-3xl">Sign in</span> and level up today!
            </h3>
          </div>  

          <form className="space-y-4" onSubmit={handleLogin}>

            <CustomInput type="text" id="username" label="Username" />

            <CustomInput type="password" id="password" label="Password" />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded text-orange-500 focus:ring-0"
                  />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-slate-400 hover:text-orange-500">
                  Forgot your password?
                </a>
              </div>
            </div>
              
            <CustomButton>
              { loading ? <><Spinner /> Loading...</> : "Log into account" }
            </CustomButton>
          </form>

          <SocialButtons />

        </div>
      </div>
    </>
  )
}
