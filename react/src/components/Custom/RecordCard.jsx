export default function RecordCard(props) {
  return (
    <>
        <div className="h-56 bg-gradient-to-br from-transparent to-gray-800 flex flex-col justify-between">
            <div className="p-4">
                <props.icon className="h-14 w-14 text-orange-600 stroke-1" />
            </div>
            <div className="p-4">
                <h3 className="text-xl text-gray-200 italic tracking-wide">{ props.number }</h3>
                <h5 className="text-sm text-gray-300 uppercase tracking-wider">{ props.title }</h5>
            </div>
        </div>
    </>
  )
}
