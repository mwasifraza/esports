import React from 'react'
import { banner, banner2 } from '../../assets/index';
import { Outlet, useNavigate } from 'react-router-dom'

export default function GuestLayout() {
    const navigate = useNavigate();

  return (
    <>
        <div className='w-full h-[100vh] flex justify-center items-center bg-slate-900/95'>
            <div className='w-9/12 grid grid-cols-3 bg-slate-700 rounded-md overflow-hidden'>
                <div className='col-span-2'>
                    <img src={banner} alt="banner" className='w-full h-full object-cover contrast-50' />
                </div>
                <div className='col-span-1 bg-slate-700 p-5'>
                    <div className='grid grid-cols-2 border border-slate-500 p-1 gap-2 rounded w-4/5 mx-auto'>
                        <button 
                            onClick={() => navigate('/')} 
                            className='py-1.5 text-center rounded text-slate-300'>
                            Login
                        </button>
                        <button 
                            onClick={() => navigate('/register')} 
                            className='py-1.5 text-center rounded text-slate-300'>
                            Register
                        </button>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>   
    </>
  )
}
