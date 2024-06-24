import React from 'react'
import { Container } from 'react-bootstrap'
import bannerdeal from '../../../public/banner-5.png.png'
import Image from 'next/image'
import { FaCartPlus, FaStar } from 'react-icons/fa6'
import Link from 'next/link'

const Deals = () => {
  const list =[1,2,3,4,5,6,7,8]
  return (
    <Container className='tw-pt-10'>
      <h1 className=' tw-text-[25px] tw-text-[#253D4E]'>Deals Of The Day</h1>
      <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-py-5 tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
        {
          list.map(i=>(
            <div key={i} className='tw-relative tw-h-[500px] tw-flex tw-flex-shrink-0 tw-flex-grow-0'>
              <div>
                <Link href='/products/1'>
                  <Image src={bannerdeal} alt='banner' width={350}/>
                </Link>
              </div>
              <div className='tw-absolute tw-bottom-[110px] tw-left-[40px] tw-bg-white tw-rounded-[10px] tw-shadow-lg tw-w-[270px]'>
                <div className='tw-p-5'>
                  <h1 className='tw-text-[#253D4E] tw-text-[16px]'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                  <span className='tw-flex tw-items-center tw-gap-2'>
                    <FaStar className='tw-text-yellow-500'/>
                    <span className='tw-text-[#B6B6B6] tw-text-[14px]'>(4.0)</span>
                  </span>
                  <div>
                    <span className='tw-text-[#B6B6B6] tw-text-[14px]'>By:</span>
                    <span className='tw-text-[#3BB77E] tw-text-[14px]'>NestFood</span>
                  </div>
                  <div className='tw-flex tw-justify-between tw-items-center'>
                    <div className='tw-flex tw-gap-2 tw-items-end'>
                      <span className='tw-text-[#3BB77E] tw-text-[18px]'>$28.85</span>
                      <span className='tw-text-[#ADADAD] tw-text-[14px] tw-line-through'>$32.8</span>
                    </div>
                    <div>
                      <div className='tw-flex tw-gap-2 tw-justify-center tw-items-center tw-text-[#3BB77E] tw-text-[14px] tw-px-3 tw-py-2 tw-rounded-[4px] tw-bg-[#DEF9EC]'>
                        <FaCartPlus/>
                        Add
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default Deals
