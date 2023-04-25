export default function HeadingOne(props) {
  return (
    <>
        <h1 className="relative text-center text-white text-4xl font-bold tracking-tight uppercase pl-3 py-1 z-10 after:absolute after:content-[attr(data-text)] after:text-gray-800 after:text-6xl after:font-extrabold after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-z-10 after:tracking-wide" data-text={props.children}>
            { props.children }
        </h1>
    </>
  )
}
