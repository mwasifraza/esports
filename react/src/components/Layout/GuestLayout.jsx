import React, { useLayoutEffect, useState } from 'react'
import { banner } from '../../assets/index';
import { Outlet, useNavigate } from 'react-router-dom'

export default function GuestLayout() {
    const [markerPosition, setMarkerPosition] = useState(false);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        let path = window.location.pathname;
        if(path == "/login"){
            setMarkerPosition(false);
        }else{
            setMarkerPosition(true);
        }
    }, []);

  return (
    <>
        <div className='w-full h-[100vh] flex justify-center items-center bg-slate-900/95'>
            <div className='w-9/12 h-[75vh] grid grid-cols-3 bg-slate-700 rounded-md overflow-hidden'>
                <div className='col-span-2'>
                    <img src={banner} alt="banner" className='w-full h-full object-cover contrast-50' />
                </div>
                <div className='relative col-span-1 flex flex-col bg-slate-700 p-5'>
                    <div className='border border-slate-500 w-4/5 mx-auto mt-4 p-1 rounded'>
                        <div className='relative grid grid-cols-2 gap-1 rounded z-10'>
                            <div className={`
                                absolute top-0 
                                bg-gradient-to-r 
                                from-orange-500 
                                to-orange-700 
                                w-1/2 h-full -z-10 
                                transition-all rounded
                                ${markerPosition ? 'left-1/2' : 'left-0'}
                                `}></div>
                            <button 
                                onClick={() => { navigate('/login'); setMarkerPosition(false) }} 
                                className='py-1.5 text-center rounded text-slate-200'>
                                Login
                            </button>
                            <button 
                                onClick={() => { navigate('/register'); setMarkerPosition(true) }} 
                                className='py-1.5 text-center rounded text-slate-200'>
                                Register
                            </button>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>   
    </>
  )
}
