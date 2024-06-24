import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md'
import prod1 from '../../../public/product-1-1.jpg.png'
import Image from 'next/image'
import { BiArrowToLeft, BiClipboard } from 'react-icons/bi'
import { GrUpdate } from 'react-icons/gr'
import Link from 'next/link'

const Wishlist = () => {
  return (
    <Container>
      <div className='tw-pt-10'>
        <h1 className='tw-font-[600] tw-text-[30px]'>Your Wishlist</h1>
      </div>
      <Row>
        <Col lg="12">
          <div className='tw-text-[#7E7E7E] lg:tw-flex tw-justify-between tw-pb-10'>
            <p>There are <span className='tw-text-[#3BB77E]'>3</span> products in your wishlist</p>
            <div className='tw-flex tw-gap-1 tw-items-center'>
              <span><MdDelete/></span>
              <span>Clear All</span>
            </div>
          </div>
          <div>
            <div>
              <div className='lg:tw-flex tw-relative tw-mb-3 tw-justify-between tw-items-center tw-border-2 tw-rounded-lg tw-p-2'>
                <div className='tw-border-[2px] tw-flex tw-items-center tw-rounded-lg tw-p-1'>
                  <Image src={prod1} alt='prod1' width={70}/>
                  <p className="tw-font-[600] tw-text-[#3BB77E]">Seeds of Change Organic Quinoa, Brown, & Red Rice</p>
                </div>
                <span className="tw-font-[600] tw-text-[30px] tw-text-[#3BB77E]">$28.85</span>
                <div className='tw-text-[13px] tw-mb-2 lg:tw-mb-0 tw-text-[#3BB77E] tw-bg-[#def9ec] tw-rounded-md tw-text-center tw-p-2'>
                  In Stock
                </div>
                <div className='tw-text-[13px] tw-text-white tw-bg-[#3BB77E] tw-rounded-md tw-text-center tw-p-2'>
                  Add To Cart
                </div>
                <span className='tw-absolute lg:tw-static tw-top-5 tw-right-5'><MdDelete/></span>
              </div>
              <div className='lg:tw-flex tw-relative tw-mb-3 tw-justify-between tw-items-center tw-border-2 tw-rounded-lg tw-p-2'>
                <div className='tw-border-[2px] tw-flex tw-items-center tw-rounded-lg tw-p-1'>
                  <Image src={prod1} alt='prod1' width={70}/>
                  <p className="tw-font-[600] tw-text-[#3BB77E]">Seeds of Change Organic Quinoa, Brown, & Red Rice</p>
                </div>
                <span className="tw-font-[600] tw-text-[30px] tw-text-[#3BB77E]">$28.85</span>
                <div className='tw-text-[13px] tw-mb-2 lg:tw-mb-0 tw-text-[#f8719b] tw-bg-[#fde0e9] tw-rounded-md tw-text-center tw-p-2'>
                Out Stock
                </div>
                <div className='tw-text-[13px] tw-text-white tw-bg-[#3e5379] tw-rounded-md tw-text-center tw-p-2'>
                Contact Us
                </div>
                <span className='tw-absolute lg:tw-static tw-top-5 tw-right-5'><MdDelete/></span>
              </div>
              <div className='lg:tw-flex tw-relative tw-mb-3 tw-justify-between tw-items-center tw-border-2 tw-rounded-lg tw-p-2'>
                <div className='tw-border-[2px] tw-flex tw-items-center tw-rounded-lg tw-p-1'>
                  <Image src={prod1} alt='prod1' width={70}/>
                  <p className="tw-font-[600] tw-text-[#3BB77E]">Seeds of Change Organic Quinoa, Brown, & Red Rice</p>
                </div>
                <span className="tw-font-[600] tw-text-[30px] tw-text-[#3BB77E]">$28.85</span>
                <div className='tw-text-[13px] tw-mb-2 lg:tw-mb-0 tw-text-[#3BB77E] tw-bg-[#def9ec] tw-rounded-md tw-text-center tw-p-2'>
                  In Stock
                </div>
                <div className='tw-text-[13px] tw-text-white tw-bg-[#3BB77E] tw-rounded-md tw-text-center tw-p-2'>
                  Add To Cart
                </div>
                <span className='tw-absolute lg:tw-static tw-top-5 tw-right-5'><MdDelete/></span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Wishlist