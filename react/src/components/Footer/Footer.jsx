import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDiscord, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const nav1 = ["Play", "Leaderboard", "Tournament", "Contact Us"];
const nav2 = ["About Us", "FAQs", "Blogs", "Register Now", "Become an Organizer"];
const socials = [
    {icon: faFacebookF},
    {icon: faTwitter},
    {icon: faInstagram},
    {icon: faYoutube},
    {icon: faDiscord}
];


export default function Footer() {
  return (
    <>
    <footer className="py-10 mt-10 bg-gray-900">
      <div className="w-3/4 mx-auto">
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <h2 className="relative text-xl font-bold text-gray-200 uppercase mb-4 after:absolute after:w-16 after:h-0.5 after:bg-orange-500 after:top-full after:left-0">Useful links</h2>
            <div className="grid grid-cols-2">
              <div>
                <ul>
                  {
                    nav1.map(item => (
                      <li className="py-1 px-2"><a className="text-gray-300 text-lg font-medium transition hover:text-orange-500" href="#">
                        { item }
                      </a></li>
                    ))
                  }
                </ul>
              </div>

              <div>
                <ul>
                  {
                    nav2.map(item => (
                      <li className="py-1 px-2"><a className="text-gray-300 text-lg font-medium transition hover:text-orange-500" href="#">
                        { item }
                      </a></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="relative text-xl font-bold text-gray-200 uppercase mb-4 after:absolute after:w-16 after:h-0.5 after:bg-orange-500 after:top-full after:left-0">You can reach us</h2>
            <div>
              <ul className="flex space-x-2">
                {
                  socials.map(item => (
                    <li>
                      <a href="#" className="flex justify-center items-center rounded-md w-9 h-9 text-xl bg-gray-800 text-gray-200 transition hover:bg-orange-500">
                        <FontAwesomeIcon icon={item.icon} />
                      </a>
                    </li>
                  ))
                } 
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-center text-gray-400 text-md">
            Copyright <FontAwesomeIcon icon={faCopyright} /> 2023 | Designed by Wasif Raza
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}
