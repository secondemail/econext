"use client"
import React from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import productimg from '../../../public/product-1-1.jpg.png'
import Image from 'next/image'
import { FaCartPlus, FaStar } from 'react-icons/fa6'
import Link from 'next/link'
import { BiArrowToBottom } from 'react-icons/bi'

const PopularProducts = () => {
  const list =[1,2,3,4]
  return (
    <Container className='tw-py-10'>
      <div className='tw-flex tw-justify-between tw-mb-5'>
        <h1 className=' tw-text-[25px] tw-text-[#253D4E]'>Popular Products</h1>
        <div className='md:tw-flex tw-gap-4 tw-text-[16px] tw-hidden '>
          <span className='tw-text-[#3BB77E] tw-cursor-pointer'>All</span>
          <span className='tw-cursor-pointer'>Milks & Dairies</span>
          <span className='tw-cursor-pointer'>Coffes & Teas</span>
          <span className='tw-cursor-pointer'>Pet Foods</span>
          <span className='tw-cursor-pointer'>Meats</span>
          <span className='tw-cursor-pointer'>Vegetables</span>
          <span className='tw-cursor-pointer'>Fruits</span>
        </div>
        <div className='md:tw-hidden' >
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className='tw-flex tw-gap-2 tw-items-center tw-text-white'>
              <span className='tw-text-lg'>
                Sort
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className='tw-text-center'>
              <div className=' tw-cursor-pointer  tw-py-2 tw-bg-[#3BB77E] tw-text-white'>All</div>
              <div className=' tw-cursor-pointer  tw-py-2 hover:tw-bg-[#3BB77E] hover:tw-text-white'>Milks & Dairies</div>
              <div className=' tw-cursor-pointer  tw-py-2 hover:tw-bg-[#3BB77E] hover:tw-text-white'>Coffes & Teas</div>
              <div className=' tw-cursor-pointer  tw-py-2 hover:tw-bg-[#3BB77E] hover:tw-text-white'>Pet Foods</div>
              <div className=' tw-cursor-pointer  tw-py-2 hover:tw-bg-[#3BB77E] hover:tw-text-white'>Meats</div>
              <div className=' tw-cursor-pointer  tw-py-2 hover:tw-bg-[#3BB77E] hover:tw-text-white'>Vegetables</div>
              <div className=' tw-cursor-pointer  tw-py-2 hover:tw-bg-[#3BB77E] hover:tw-text-white'>Fruits</div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Row>
        {
          list.map(i=>(
            <Col key={i} className='tw-mb-5' lg="3">
              <Link href='/products/1'>
                <div className='tw-border-[2px] tw-relative tw-rounded-[15px] tw-border-[#ECECEC]'>
                  <span className='tw-bg-[#F74B81] tw-absolute tw-top-[-2px] tw-left-[-1px] tw-text-white tw-p-2 tw-text-center tw-rounded-tl-[15px] tw-rounded-br-[20px]'>Hot</span>
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
              </Link>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default PopularProducts
