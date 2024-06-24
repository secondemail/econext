import React from 'react'
import { SiSpinrilla } from "react-icons/si";

const Loading = () => {
  return (
    <div>
      <SiSpinrilla className='tw-w-[100px] tw-h-[100px] tw-mx-auto tw-animate-spin tw-my-10 tw-text-[#3BB77E] tw-text-center' />
    </div>
  )
}

export default Loading