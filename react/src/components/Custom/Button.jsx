import React from 'react'

export default function CustomButton(props) {
  return (
    <>
      <div className="flex justify-center">
        <button
          className="
          flex
          items-center
          justify-center
          rounded-md 
          bg-gradient-to-r
          from-orange-500
          to-orange-700
          w-1/2
          py-2.5 
          text-sm 
          text-white 
        ">
          { props.children }
        </button>
      </div>
    </>
  )
}
