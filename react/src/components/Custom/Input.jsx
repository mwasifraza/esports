import React from 'react'

export default function CustomInput(props) {
  return (
    <>
        <div class="relative">
            <input 
              type={props.type}
              id={props.id} 
              className="
              block 
              px-2 
              pb-2 
              pt-3 
              w-full 
              text-sm 
              text-gray-900 
              bg-transparent
              border-slate-200
              rounded-lg 
              appearance-none 
              focus:outline-none 
              focus:ring-0 
              focus:border-blue-600 
              peer" 
              placeholder=" " 
            />

            <label 
              htmlFor={props.id} 
              className="
              absolute 
              text-sm 
              text-gray-500 
              duration-300 
              transform 
              -translate-y-4 
              scale-75 
              top-2 
              z-10 
              origin-[0] 
              bg-white 
              px-2 
              peer-focus:px-2 
              peer-focus:text-blue-600 
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:-translate-y-1/2 
              peer-placeholder-shown:top-1/2 
              peer-focus:top-2 
              peer-focus:scale-75 
              peer-focus:-translate-y-4 
              left-1">
                {props.label}
            </label>
        </div>
    </>
  )
}
