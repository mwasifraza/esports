import { CalendarIcon } from "@heroicons/react/24/outline";

export default function Card({ image, title, tag, date }) {
  return (
    <>
    <div className="w-full rounded-lg bg-gray-800 p-2">
        <div className="h-48 flex items-center justify-center">
            <img src={image} alt="image" className="brightness-75 object-cover w-full h-full" />
        </div>
        <div className="mt-4 px-2">
            <div>
                <div className="space-y-2">
                    <span className="text-gray-500 text-xs border border-gray-500 rounded-full px-2 py-1 cursor-pointer transition hover:bg-gray-500 hover:text-gray-900">{ tag }</span>
                    <h1 className="text-gray-200 text-2xl font-medium">{ title }</h1>
                </div>
                <div className="mt-2 flex items-center space-x-1 text-sm text-gray-300">
                    <CalendarIcon className="h-5 w-5 stroke-2" />
                    <h4>Registration Starts from <span className="text-orange-500">{ date }</span></h4>
                </div>
            </div>
            <div className="px-2 py-4 mt-4 bg-gray-900 text-gray-400 text-sm rounded">
                <h5>Tournament Organized By</h5>
            </div>
            <div className="mt-4 mb-2 flex justify-end">
                <button className="px-5 py-2 bg-green-400 rounded hover:bg-green-500">Register Now</button>
            </div>
        </div>
    </div>
    </>
  )
}
