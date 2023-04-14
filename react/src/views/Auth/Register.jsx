import CustomInput from "../../components/Custom/Input";
import CustomRadio from "../../components/Custom/Radio";

export default function Register() {
  return (
    <>
    <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-4">
          {/* <div>
            <div className="relative flex justify-center items-center">
              <div className="absolute w-2/3 h-px bg-gray-600"></div>
              <h3 className="bg-white text-center uppercase font-medium tracking-tight text-gray-900 z-10 px-2">
                Login as
              </h3>
            </div>
            <div className="">
              <button className="bg-sky-100 px-3 py-2 rounded border">Login with Facebook</button>
            </div>
          </div> */}
          <div>
            <h3 className="mt-4 text-center text-xl uppercase font-medium tracking-tight text-gray-900">
              Create a new account
            </h3>
          </div>
          <form className="mt-4 space-y-6" action="#" method="POST">
            <div className="space-y-4 rounded-md shadow-sm">

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
              
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Create an Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
