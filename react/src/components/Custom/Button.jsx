import React from 'react'

export default function CustomButton(props) {
  return (
    <>
      <div className="text-center">
        <button
          className="
          rounded-md 
          bg-gradient-to-r
          from-orange-500
          to-orange-700
          px-6
          py-2.5 
          text-sm 
          text-white 
          focus:outline 
          focus:outline-2 
          focus:outline-offset-2 
          focus:outline-orange-600
        ">
          { props.children }
        </button>
      </div>
    </>
  )
}
