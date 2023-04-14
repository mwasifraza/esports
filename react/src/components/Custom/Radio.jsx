import React from 'react'

export default function CustomRadio(props) {
  return (
    <>
        <div>
            <input 
                type="radio" 
                id={props.value} 
                name={props.name} 
                value={props.value} 
                class="hidden peer" />
            <label 
                htmlFor={props.value} 
                class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">

                <div class="block">
                    <div class="w-full text-sm">{props.label}</div>
                </div>
            </label>
        </div>
    </>
  )
}
