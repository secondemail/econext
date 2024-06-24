import React from 'react'
import { Container } from 'react-bootstrap'
import im1 from '../../../public/cat-2.png.png'
import im2 from '../../../public/Main.png'
import im3 from '../../../public/Main(1).png'
import im4 from '../../../public/Main(2).png'
import Image from 'next/image'
import Link from 'next/link'
const FeaturedCategory = () => {
  const list =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  return (
    <Container className='tw-py-10'>
      <h1 className='tw-mb-5 tw-text-[25px]'>Featured Categories</h1>
      <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
        {
          list.map(i=>(
            <Link key={i} href="/pages/categoryproducts">
              <div  className='tw-flex tw-flex-col tw-items-center tw-bg-[#F2FCE4] tw-rounded-lg tw-p-2'>
                <Image src={im1} alt="im1"  width={60}/>
                <h2>Strawberry</h2>
                <span className='tw-text-[#7E7E7E] tw-text-[14px]'>36 items</span>
              </div>
            </Link>
          ))
        }
      </div>
      <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-gap-10 tw-py-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
        <Image src={im2} alt='im2' height={300}/>
        <Image src={im3} alt='im2' height={300}/>
        <Image src={im4} alt='im2' height={300}/>
      </div>
    </Container>
  )
}

export default FeaturedCategory