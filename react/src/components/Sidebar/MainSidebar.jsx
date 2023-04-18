import { logoRegular, logoSolid } from "../../assets";
import { 
    HomeIcon, 
    CreditCardIcon, 
    EnvelopeIcon, 
    TrophyIcon, 
    Squares2X2Icon, 
    ChartBarIcon, 
    UserCircleIcon, 
    MoonIcon, 
    ArrowRightOnRectangleIcon 
} from "@heroicons/react/24/outline";

export default function MainSidebar() {
  return (
    <>
    <aside id="sidebar" className="flex-none fixed inset-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <ul className="space-y-5 font-medium">
            <li>
                <a href="#" className="flex items-center justify-center">
                    <img src={logoSolid} alt="" />
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center p-2 text-gray-400 rounded-lg hover:text-orange-500">
                    <HomeIcon className="w-7 h-7 stroke-[2px]" />
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center p-2 text-gray-400 rounded-lg hover:text-orange-500">
                    <CreditCardIcon className="w-7 h-7 stroke-[2px]" />
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center p-2 text-gray-400 rounded-lg hover:text-orange-500">
                    <span className="relative after:absolute after:top-0 after:-right-1 after:w-2.5 after:h-2.5 after:rounded-full after:bg-orange-500 after:border-2 after:border-gray-800">
                        <EnvelopeIcon className="w-7 h-7 stroke-[2px]" />
                    </span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center p-2 text-gray-400 rounded-lg hover:text-orange-500">
                    <TrophyIcon className="w-7 h-7 stroke-[2px]" />
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center p-2 text-gray-400 rounded-lg hover:text-orange-500">
                    <ChartBarIcon className="w-7 h-7 stroke-[2px]" />
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center p-2 text-gray-400 rounded-lg hover:text-orange-500">
                    <Squares2X2Icon className="w-7 h-7 stroke-[2px]" />
                </a>
            </li>
        </ul>

        <ul className="space-y-5 font-medium">
            <li>
                <a href="#" className="flex items-center justify-center p-2 text-gray-400 rounded-lg hover:text-orange-500">
                    <MoonIcon className="w-7 h-7 stroke-[2px]" />
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center p-2 text-gray-400 rounded-lg hover:text-orange-500">
                    <UserCircleIcon className="w-7 h-7 stroke-[2px]" />
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center p-2 text-gray-400 rounded-lg hover:text-orange-500">
                    <ArrowRightOnRectangleIcon className="w-7 h-7 stroke-[2px]" />
                </a>
            </li>
        </ul>
    </div>
    </aside>
    </>
  )
}
