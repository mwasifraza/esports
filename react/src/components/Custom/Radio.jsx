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
                class="
                inline-flex 
                items-center 
                justify-between 
                w-full 
                p-2 
                text-slate-300 
                border 
                border-slate-500
                bg-transparent
                rounded-md 
                cursor-pointer 
                peer-checked:border-orange-500 
                peer-checked:text-orange-500 
                hover:text-slate-200 
                hover:bg-slate-800/20
            ">

                <div class="block">
                    <div class="w-full text-sm">{props.label}</div>
                </div>
            </label>
        </div>
    </>
  )
}
