import CustomButton from "../../components/Custom/Button";
import CustomInput from "../../components/Custom/Input";
import CustomRadio from "../../components/Custom/Radio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function Register() {
  return (
    <>
    <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-4">          
          <form className="space-y-6">

            <div>
              <h3 className="text-2xl tracking-tight text-orange-500">
                <span className="font-bold text-3xl">Sign Up</span> to unleash the gamer within you!
              </h3>
            </div>

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
              Create an account
            </CustomButton>
          </form>

          
          <div>
            <hr className="border-slate-500" />
            <p className="text-center text-slate-300 text-sm my-2">or continue with</p>
            <div className="flex justify-center space-x-3">
              <button className="text-3xl text-orange-500 hover:text-orange-600">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </button>
              <button className="text-3xl text-orange-500 hover:text-orange-600">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
