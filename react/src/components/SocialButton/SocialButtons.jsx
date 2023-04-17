import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function SocialButtons() {
  return (
    <>
      <div>
        <hr className="border-slate-500" />
        <p className="text-center text-slate-300 text-sm my-2">or continue with</p>
        <div className="flex justify-center space-x-4">
          <button className="text-2xl text-orange-500 hover:text-orange-600">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button className="text-2xl text-orange-500 hover:text-orange-600">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button className="text-2xl text-orange-500 hover:text-orange-600">
            <FontAwesomeIcon icon={faDiscord} />
          </button>
        </div>
      </div> 
    </>
  )
}
