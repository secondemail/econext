import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGoogle, FaVoicemail } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Login = () => {
  return (
    <div className='tw-flex tw-justify-center tw-bg-[#f2f3f4] tw-py-[40px]'>
      <div className='tw-bg-white tw-rounded-md tw-border-[2px] tw-p-4'>
        <p className='tw-font-[600] tw-text-xl'>Sign in</p>
        <input type='text' className='tw-bg-[#f4f5f9] focus:tw-outline-[#3bb77e] focus:tw-placeholder-transparent tw-p-3 tw-rounded-md tw-w-full tw-mt-3' placeholder='Username Or Email'/>
        <input type='text' className='tw-bg-[#f4f5f9] focus:tw-outline-[#3bb77e] focus:tw-placeholder-transparent tw-p-3 tw-rounded-md tw-w-full tw-mt-3' placeholder='Password'/>
        <div className='tw-flex tw-justify-between tw-items-center'>
          <div className='tw-flex tw-gap-1 tw-justify-between tw-items-center'>
            <input  type='checkbox' />
            <span>Remember</span>
          </div>
          <span className='tw-text-[#7E7E7E] tw-mt-3 tw-cursor-pointer'>Forget Password?</span>
        </div>
        <div className='tw-text-white tw-mt-3 tw-cursor-pointer tw-bg-[#3bb77e] tw-text-center tw-p-2 tw-rounded-md'>
          Login
        </div>
        <div className='tw-flex tw-justify-between tw-items-center tw-my-3'>
          <div className='tw-bg-[#7E7E7E] tw-h-[2px] tw-w-[30%]'></div>
          <span>Or Sign in with</span>
          <div className='tw-bg-[#7E7E7E] tw-h-[2px] tw-w-[30%]'></div>
        </div>
        <div className='tw-flex tw-justify-between'>
          <div className='tw-flex tw-gap-2 hover:tw-bg-[#3bb77e] hover:tw-text-white hover:tw-border-[#3bb77e] tw-transition tw-cursor-pointer tw-items-center tw-border-2 tw-rounded-md tw-p-2'>
            <span className='tw-text-xl'>
              <FaGoogle/>
            </span>
            <span>
              Google
            </span>
          </div>
          <div className='tw-flex tw-gap-2 hover:tw-bg-[#3bb77e] hover:tw-text-white hover:tw-border-[#3bb77e] tw-transition tw-cursor-pointer tw-items-center tw-border-2 tw-rounded-md tw-p-2'>
            <span className='tw-text-xl'>
              <MdEmail/>
            </span>
            <span>
              Email
            </span>
          </div>
          <div className='tw-flex tw-gap-2 hover:tw-bg-[#3bb77e] hover:tw-text-white hover:tw-border-[#3bb77e] tw-transition tw-cursor-pointer tw-items-center tw-border-2 tw-rounded-md tw-p-2'>
            <span className='tw-text-xl'>
              <FaFacebook/>
            </span>
            <span>
              Facebook
            </span>
          </div>
        </div>
        <div className='tw-text-center tw-mt-3'>
          Dont have account ? <Link href="/signup" className='tw-text-[#3bb77e]'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login