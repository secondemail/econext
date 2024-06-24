import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md'
import prod1 from '../../../public/product-1-1.jpg.png'
import Image from 'next/image'
import { BiArrowToLeft, BiClipboard } from 'react-icons/bi'
import { GrUpdate } from 'react-icons/gr'
import Link from 'next/link'

const Cart = () => {
  return (
    <Container>
      <div className='tw-pt-10'>
        <h1 className='tw-font-[600] tw-text-[30px]'>Your Cart</h1>
      </div>
      <Row>
        <Col lg="8">
          <div className='tw-text-[#7E7E7E] lg:tw-flex tw-justify-between tw-pb-10'>
            <p>There are <span className='tw-text-[#3BB77E]'>3</span> products in your cart</p>
            <div className='tw-flex tw-gap-1 tw-items-center'>
              <span><MdDelete/></span>
              <span>Clear Cart</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="8">
          <div>
            <div>
              <div className='lg:tw-flex tw-relative tw-mb-3 tw-justify-between tw-items-center tw-border-2 tw-rounded-lg tw-p-2'>
                <div className='tw-border-[2px] tw-flex tw-items-center tw-rounded-lg tw-p-1'>
                  <Image src={prod1} alt='prod1' width={70}/>
                  <p>Seeds of Change Organic Quinoa, Brown, & Red Rice</p>
                </div>
                <span>Unit Price: $28.85</span>
                <div className='tw-border-2 tw-p-2 tw-w-[80px] tw-border-[#3BB77E] tw-text-[#3BB77E] tw-rounded-lg'>
                  <input className='focus:tw-outline-none tw-w-full' min={1} value={1} type='number' />
                </div>
                <span className='tw-text-[#3BB77E]'>$28.85</span>
                <span className='tw-absolute lg:tw-static tw-top-5 tw-right-5'><MdDelete/></span>
              </div>
              <div className='lg:tw-flex tw-relative tw-mb-3 tw-justify-between tw-items-center tw-border-2 tw-rounded-lg tw-p-2'>
                <div className='tw-border-[2px] tw-flex tw-items-center tw-rounded-lg tw-p-1'>
                  <Image src={prod1} alt='prod1' width={70}/>
                  <p>Seeds of Change Organic Quinoa, Brown, & Red Rice</p>
                </div>
                <span>Unit Price: $28.85</span>
                <div className='tw-border-2 tw-p-2 tw-w-[80px] tw-border-[#3BB77E] tw-text-[#3BB77E] tw-rounded-lg'>
                  <input className='focus:tw-outline-none tw-w-full' min={1} value={1} type='number' />
                </div>
                <span className='tw-text-[#3BB77E]'>$28.85</span>
                <span className='tw-absolute lg:tw-static tw-top-5 tw-right-5'><MdDelete/></span>
              </div>
              <div className='lg:tw-flex tw-relative tw-mb-3 tw-justify-between tw-items-center tw-border-2 tw-rounded-lg tw-p-2'>
                <div className='tw-border-[2px] tw-flex tw-items-center tw-rounded-lg tw-p-1'>
                  <Image src={prod1} alt='prod1' width={70}/>
                  <p>Seeds of Change Organic Quinoa, Brown, & Red Rice</p>
                </div>
                <span>Unit Price: $28.85</span>
                <div className='tw-border-2 tw-p-2 tw-w-[80px] tw-border-[#3BB77E] tw-text-[#3BB77E] tw-rounded-lg'>
                  <input className='focus:tw-outline-none tw-w-full' min={1} value={1} type='number' />
                </div>
                <span className='tw-text-[#3BB77E]'>$28.85</span>
                <span className='tw-absolute lg:tw-static tw-top-5 tw-right-5'><MdDelete/></span>
              </div>

            </div>
            <div className="tw-flex tw-justify-between tw-mb-3">
              <Link href='/'>
                <div className='tw-bg-[#3BB77E] tw-text-white tw-flex tw-gap-1 tw-justify-center tw-items-center tw-p-2 tw-rounded-lg'>
                  <span><BiArrowToLeft/></span>
                  <sapn>Continue Shopping</sapn>
                </div>
              </Link>
              <div className='tw-bg-[#3BB77E] tw-text-white tw-flex tw-gap-1 tw-justify-center tw-items-center tw-p-2 tw-rounded-lg'>
                <span><GrUpdate/></span>
                <sapn>Update Cart</sapn>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4">
          <div className='tw-border-2 tw-rounded-lg tw-p-2'>
            <div className='tw-mb-3'>
              <div >
                <p className='tw-text-[20px] tw-font-[600]'>Apply Copon</p>
                <p className="tw-text-[#7E7E7E] tw-text-[12px]">Using A Promo Code ?</p>
              </div>
              <div className="tw-flex tw-gap-3 tw-justify-between">
                <input type="text" placeholder='Copon Code' className='tw-border-2 tw-w-full tw-rounded-md tw-p-2 focus:tw-outline-none'/>
                <div className='tw-bg-[#3BB77E] tw-text-white tw-flex tw-gap-1 tw-justify-center tw-items-center tw-p-2 tw-rounded-md '>
                  <span><BiClipboard/></span>
                  <span>Apply</span>
                </div>
              </div>
            </div>
            <div className='tw-text-[#7E7E7E]'>
              <div className='tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-p-2'>
                <span>SubTotal</span>
                <span className='tw-font-[600]'>$40</span>
              </div>
              <div className='tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-p-2'>
                <span>Discount</span>
                <span className='tw-font-[600] tw-text-black'>10%</span>
              </div>
              <div className='tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-p-2'>
                <span>Shipping</span>
                <span className='tw-font-[600] tw-text-black'>Free</span>
              </div>
              <div className='tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-p-2'>
                <span>Estimate For</span>
                <span className='tw-font-[600] tw-text-black'>United Kingdom</span>
              </div>
              <div className='tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-p-2'>
                <span>Total</span>
                <span className='tw-font-[600] tw-text-[#3BB77E]'>$36</span>
              </div>
              <Link href='/receipt'>
                <div className='tw-text-center tw-text-white tw-bg-[#3BB77E] tw-p-2 tw-rounded-sm tw-mt-3'>
                  Proceed To Checkout
                </div>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart