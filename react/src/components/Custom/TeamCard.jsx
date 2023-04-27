export default function TeamCard({ image, name, members }) {
  return (
    <>
        <div className="w-full bg-gray-800 rounded-md overflow-hidden shadow">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="px-3 py-4">
                <h2 className="text-white text-xl font-medium">{ name }</h2>
                <h4 className="text-gray-400">{ members } members</h4>
                <div>
                    <button className="w-full bg-green-400 rounded mt-4 py-2 text-lg uppercase hover:bg-green-500">Join</button>
                </div>
            </div>
        </div>
    </>
  )
}
