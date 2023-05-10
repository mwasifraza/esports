import { ArrowPathRoundedSquareIcon, ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function CustomTweet({ img, name, username, comments, retweets, likes, children }) {
  return (
    <>
    <div className="bg-gray-700 p-3 rounded text-gray-200">
        <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-full bg-gray-800"></div>
            <div>
                <h3 className="text-gray-300 font-medium text-lg">{ name }</h3>
                <h4 className="text-gray-400 font-light text-sm">@{ username }</h4>
            </div>
        </div>
        <div className="mt-3 text-gray-300">
            <p>{ children }</p>
        </div>
        <div className="flex space-x-5 mt-3 text-gray-400">
            <div className="flex items-center space-x-1 cursor-pointer">
                <ChatBubbleOvalLeftIcon className="h-5 w-5" />
                <span>{ comments }</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
                <ArrowPathRoundedSquareIcon className="h-5 w-5" />
                <span>{ retweets }</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
                <HeartIcon className="h-5 w-5" />
                <span>{ likes }</span>
            </div>
        </div>
    </div>
    </>
  )
}
