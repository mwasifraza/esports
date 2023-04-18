import Tooltip from '../Tooltip/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

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
                  <Tooltip text={item.tip}>
                    <button className="text-2xl text-orange-500 hover:text-orange-600">
                      <FontAwesomeIcon icon={item.icon} />
                    </button>
                  </Tooltip>
                </>
              )
            })
          }
          
        </div>
      </div> 
    </>
  )
}
