import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGoogle, FaVoicemail } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Signup = () => {
  return (
    <div className='tw-flex tw-justify-center tw-bg-[#f2f3f4] tw-py-[40px]'>
      <div className='tw-bg-white tw-rounded-md tw-border-[2px] tw-p-4'>
        <p className='tw-font-[600] tw-text-xl'>Create an Account</p>
        <p className="tw-mt-3">Email</p>
        <input type='text' className='tw-bg-[#f4f5f9] focus:tw-outline-[#3bb77e] focus:tw-placeholder-transparent tw-p-3 tw-rounded-md tw-w-full ' placeholder='Your Email'/>
        <p className="tw-mt-3">create Password</p>
        <input type='text' className='tw-bg-[#f4f5f9] focus:tw-outline-[#3bb77e] focus:tw-placeholder-transparent tw-p-3 tw-rounded-md tw-w-full' placeholder='Create Password'/>
        <p className="tw-mt-3">Phone</p>
        <div className='tw-flex tw-items-center tw-gap-2'>
          <select className='tw-bg-[#f4f5f9] focus:tw-outline-[#3bb77e] focus:tw-placeholder-transparent tw-p-2 tw-rounded-md '>
            <option>+20</option>
          </select>
          <input type='text' className='tw-bg-[#f4f5f9] focus:tw-outline-[#3bb77e] focus:tw-placeholder-transparent tw-p-3 tw-rounded-md tw-w-full ' placeholder='ex:01009891587'/>
        </div>
        <p className='tw-text-[#c2bdc2] tw-text-[15px] tw-font-[600] tw-mt-3 tw-text-center'>
          By signing up , You confirm that you have read and accepted <br/> our User Notice and Privacy Policy .
        </p>
        <div className='tw-text-white tw-mt-3 tw-cursor-pointer tw-bg-[#3bb77e] tw-text-center tw-p-2 tw-rounded-md'>
          Create Account
        </div>
        <div className='tw-flex tw-justify-between tw-items-center tw-my-3'>
          <div className='tw-bg-[#7E7E7E] tw-h-[2px] tw-w-[30%]'></div>
          <span>Or Sign Up with</span>
          <div className='tw-bg-[#7E7E7E] tw-h-[2px] tw-w-[30%]'></div>
        </div>
        <div className='tw-flex tw-gap-4 tw-justify-between'>
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
          Dont have account ? <Link href="/login" className='tw-text-[#3bb77e]'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup