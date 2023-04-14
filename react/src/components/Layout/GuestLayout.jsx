import React from 'react'
import { banner } from '../../assets/index';
import { Outlet, useNavigate } from 'react-router-dom'

export default function GuestLayout() {
    const navigate = useNavigate();

  return (
    <>
        <div className='w-full h-[100vh] flex justify-center items-center bg-slate-900'>
            <div className='w-9/12 grid grid-cols-3 bg-slate-700 rounded-md overflow-hidden'>
                <div className='col-span-2'>
                    <img src={banner} alt="banner" className='contrast-50' />
                </div>
                <div className='col-span-1 bg-white p-5'>
                    <div className='grid grid-cols-2 bg-slate-100 p-2 gap-2 rounded'>
                        <button 
                            onClick={() => navigate('/')} 
                            className='py-2 text-center rounded'>
                            Login
                        </button>
                        <button 
                            onClick={() => navigate('/register')} 
                            className='py-2 text-center rounded'>
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
