import React from 'react'
import { Container, ProgressBar } from 'react-bootstrap'
import imgseller from '../../../public/div.banner-img.png'
import productimg from '../../../public/product-1-1.jpg.png'
import Image from 'next/image'
import { FaCartPlus, FaStar } from 'react-icons/fa6'
import Link from 'next/link'
const BestSeller = () => {
  const list =[1,2,3,4,5,6,7,8]
  return (
    <Container>
      <h1 className=' tw-text-[25px]'>Best Seller</h1>
      <div className='tw-flex tw-items-center tw-gap-3 tw-py-7'>
        <div className='tw-hidden lg:tw-block'>
          <Image src={imgseller} alt="imgseller" width={300}/>
        </div>
        <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
          {
            list.map(i=>(
              <div key={i} className='tw-mb-5 tw-w-[300px]'>
                <Link href='/products/1'>
                  <div className='tw-border-[2px] tw-w-[300px] tw-relative tw-rounded-[15px] tw-border-[#ECECEC]'>
                    <span className='tw-bg-[#3BB77E] tw-absolute tw-top-[-2px] tw-left-[-1px] tw-text-white tw-p-2 tw-text-center tw-rounded-tl-[15px] tw-rounded-br-[20px]'>
                      Save 35%
                    </span>
                    <div className='tw-flex tw-justify-center'>
                      <Image src={productimg} alt='productimg' width={170}/>
                    </div>
                    <div className='tw-p-5'>
                      <span className='tw-text-[#ADADAD] tw-text-[12px]'>Snack</span>
                      <h1 className='tw-text-[#253D4E] tw-text-[16px]'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                      <span className='tw-flex tw-items-center tw-gap-2'>
                        <FaStar className='tw-text-yellow-500'/>
                        <span className='tw-text-[#B6B6B6] tw-text-[14px]'>(4.0)</span>
                      </span>
                      <div>
                        <span className='tw-text-[#B6B6B6] tw-text-[14px]'>By:</span>
                        <span className='tw-text-[#3BB77E] tw-text-[14px]'>NestFood</span>
                      </div>
                      <div className='tw-flex tw-gap-2 tw-items-end'>
                        <span className='tw-text-[#3BB77E] tw-text-[18px]'>$28.85</span>
                        <span className='tw-text-[#ADADAD] tw-text-[14px] tw-line-through'>$32.8</span>
                      </div>
                      <div className='tw-mt-2'>
                        <ProgressBar className='tw-h-2' striped variant="success" now={70} />
                        <div className='tw-text-[#253D4E] tw-text-[13px]'>
                          <span>Sold: 90/100</span>
                        </div>
                      </div>
                      <div className='tw-text-center tw-bg-[#3BB77E] tw-text-white tw-p-2 tw-rounded-[4px] tw-mt-2'>
                        Add To Cart
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
      </div>
      </div>
    </Container>
  )
}

export default BestSeller