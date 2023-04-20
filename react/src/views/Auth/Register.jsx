import { useState } from "react";
import CustomButton from "../../components/Custom/Button";
import CustomInput from "../../components/Custom/Input";
import CustomRadio from "../../components/Custom/Radio";
import SocialButtons from "../../components/SocialButton/SocialButtons";
import Spinner from "../../components/Loader/Spinner";

export default function Register() {
  const [loading, setLoading] = useState(false);

  function handleSignup(e){
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }

  return (
    <>
      <div className="flex items-center justify-center h-full px-4 lg:px-12">
        <div className="w-full max-w-md space-y-6">   

          <div>
            <h3 className="text-2xl tracking-tight text-orange-500">
              <span className="font-bold text-3xl">Sign Up</span> to unleash the gamer within you!
            </h3>
          </div>

          <form className="space-y-4" onSubmit={handleSignup}>

            <div className="grid grid-cols-2 gap-2">

              <CustomInput type="text" id="fname" label="First Name" />

              <CustomInput type="text" id="lname" label="Last Name" />

            </div>

            <CustomInput type="email" id="email" label="Email Address" />

            <CustomInput type="text" id="username" label="Username" />

            <CustomInput type="password" id="password" label="Password" />

            <div class="grid w-full gap-2 md:grid-cols-2">

              <CustomRadio name="gender" value="male" label="Male" />
  
              <CustomRadio name="gender" value="female" label="Female" />

            </div>
              
            <CustomButton>
              { loading ? <><Spinner /> Loading...</> : "Create an account" }
            </CustomButton>
          </form>

          <SocialButtons />
          
        </div>
      </div>
    </>
  )
}
