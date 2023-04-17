import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function SocialButtons() {

  const socialNavigations = [
    { tip: "Facebook", icon: faFacebookF },
    { tip: "Twitter", icon: faTwitter },
    { tip: "Discord", icon: faDiscord }
  ];

  return (
    <>
      <div>
        <hr className="border-slate-500" />
        <p className="text-center text-slate-300 text-sm my-2">or continue with</p>
        <div className="flex justify-center space-x-4">

          {
            socialNavigations.map(item => {
              return(
                <>
                  {/* tooltip */}
                  <div data-tip={item.tip} className="
                    relative 
                    before:absolute before:text-xs
                    before:content-[attr(data-tip)] 
                    before:px-3 before:py-1
                    before:left-1/2 before:-bottom-2
                    before:w-max before:max-w-xs 
                    before:-translate-x-1/2 before:translate-y-full 
                    before:bg-gray-950 before:text-white 
                    before:rounded before:opacity-0 
                    before:transition-all 

                    after:absolute
                    after:left-1/2 after:-bottom-2
                    after:h-0 after:w-0
                    after:-translate-x-1/2
                    after:border-8
                    after:border-b-gray-950 after:border-l-transparent
                    after:border-t-transparent after:border-r-transparent
                    after:opacity-0 after:transition-all

                    hover:after:opacity-100
                    hover:before:opacity-100
                  ">
                    <button className="text-2xl text-orange-500 hover:text-orange-600">
                      <FontAwesomeIcon icon={item.icon} />
                    </button>
                  </div>
                </>
              )
            })
          }
          
        </div>
      </div> 
    </>
  )
}
