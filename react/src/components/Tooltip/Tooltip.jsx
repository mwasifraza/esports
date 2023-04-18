export default function Tooltip(props) {
  return (
    <>
    {/* tooltip */}
    <div data-tip={props.text} className={`
      relative
      before:content-[attr(data-tip)] 
      before:absolute before:text-xs
      ${
        props.top ? "before:left-1/2 before:-top-2 before:-translate-x-1/2 before:-translate-y-full" : 
        props.bottom ? "before:left-1/2 before:-bottom-2 before:-translate-x-1/2 before:translate-y-full" : 
        props.right ? "before:-right-2 before:top-1/2 before:translate-x-full before:-translate-y-1/2" : 
        props.left ? "before:-left-2 before:top-1/2 before:-translate-x-full before:-translate-y-1/2" : null
      }
      before:px-3 before:py-1
      before:w-max before:max-w-xs 
      before:bg-gray-950 before:text-white 
      before:rounded before:opacity-0 
      before:transition-all 

      after:absolute
      ${
        props.top ? "after:left-1/2 after:-top-2 after:border-t-gray-950 after:-translate-x-1/2" : 
        props.bottom ? "after:left-1/2 after:-bottom-2 after:border-b-gray-950 after:-translate-x-1/2" :
        props.right ? "after:-right-2 after:top-1/2 after:border-r-gray-950 after:-translate-y-1/2" :
        props.left ? "after:-left-2 after:top-1/2 after:border-l-gray-950 after:-translate-y-1/2" : null
      }
      after:h-0 after:w-0
      after:border-[6px]
      after:border-transparent
      after:opacity-0 after:transition-all

      hover:after:opacity-100
      hover:before:opacity-100
    `}>
        { props.children }
    </div>
    </>
  )
}
