import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaHome, FaSearch } from 'react-icons/fa'
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import productimg from '../../../../public/product-1-1.jpg.png'
import Image from 'next/image'
import { FaCartPlus, FaStar } from 'react-icons/fa6'
import { MdOutlineCategory } from "react-icons/md";
import { TbSortAscending2 } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Link from 'next/link';
import Deals from '@/app/_components/Deals';


const CategoryProducts = () => {
  const list =[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      <Container>
        <div className='tw-bg-[#d8f1e5] tw-px-5 lg:tw-px-10 tw-my-10 tw-rounded-[7px] tw-h-[200px] lg:tw-flex tw-pt-7 lg:tw-pt-0 tw-justify-between tw-items-center'>
          <div className='tw-mb-4 lg:tw-mb-0'>
            <h1 className="tw-text-[40px] tw-mb-2 tw-font-[600]">
              Snack
            </h1>
            <div className="tw-flex tw-items-center tw-gap-3 tw-text-[15px] tw-text-[#7E7E7E]">
              <span className="tw-flex tw-items-center tw-gap-2 tw-text-[#3BB77E]">
                <FaHome/>
                Home
              </span>
              <span>
                <MdArrowForwardIos/>
              </span>
              <span className="tw-flex tw-items-center tw-gap-2 ">
                Shop
              </span>
              <span>
                <MdArrowForwardIos/>
              </span>
              <span className="tw-flex tw-items-center tw-gap-2 ">
                Snack
              </span>
            </div>
          </div>
          <div style={{scrollbarWidth:"none"}} className='tw-flex tw-gap-4 tw-overflow-x-auto tw-flex-nowrap'>
            <div className='tw-bg-white tw-rounded-full tw-flex tw-items-center tw-gap-1 tw-text-center tw-p-2 tw-px-3'>
              <span className="tw-text-2xl tw-text-[#7E7E7E]"><IoIosClose/></span>
              <span className="tw-text-[#3BB77E]" >Cabbage</span>
            </div>
            <div className='tw-bg-white tw-rounded-full tw-flex tw-items-center tw-gap-1 tw-text-center tw-p-2 tw-px-3'>
              <span className="tw-text-2xl tw-text-[#7E7E7E]"><IoIosClose/></span>
              <span>Broccoli</span>
            </div>
            <div className='tw-bg-white tw-rounded-full tw-flex tw-items-center tw-gap-1 tw-text-center tw-p-2 tw-px-3'>
              <span className="tw-text-2xl tw-text-[#7E7E7E]"><IoIosClose/></span>
              <span className="tw-text-[#3BB77E]" >Artichoke</span>
            </div>
            <div className='tw-bg-white tw-rounded-full tw-flex tw-items-center tw-gap-1 tw-text-center tw-p-2 tw-px-3'>
              <span className="tw-text-2xl tw-text-[#7E7E7E]"><IoIosClose/></span>
              <span className="tw-text-[#3BB77E]" >Celery</span>
            </div>
            <div className='tw-bg-white tw-rounded-full tw-flex tw-items-center tw-gap-1 tw-text-center tw-p-2 tw-px-3'>
              <span className="tw-text-2xl tw-text-[#7E7E7E]"><IoIosClose/></span>
              <span className="tw-text-[#3BB77E]" >Spinach</span>
            </div>
          </div>
        </div>
        <div>
          <div className='lg:tw-flex tw-justify-between'>
            <div className='tw-flex tw-items-center tw-text-[#7E7E7E] tw-font-[600]'>
              We found<span className='tw-text-[#3BB77E] tw-px-1'>29</span> items for you!
            </div>
            <div className='lg:tw-flex tw-gap-5'>
              <div className='tw-flex tw-justify-between tw-my-4 lg:tw-my-0 tw-gap-2'>
                <div className='tw-border-[2px] tw-text-[#7E7E7E] tw-p-2 tw-rounded-[7px] tw-flex tw-items-center'>
                  <div className='tw-flex tw-items-center tw-gap-2'>
                    <MdOutlineCategory/>
                    Show:
                  </div>
                  <div className='tw-flex tw-items-center'>
                    <select>
                      <option>50</option>
                    </select>
                  </div>
                </div>
                <div className='tw-border-[2px] tw-text-[#7E7E7E] tw-p-2 tw-rounded-[7px] tw-flex tw-items-center'>
                  <div className='tw-flex tw-items-center tw-gap-2'>
                    <TbSortAscending2/>
                    Sort:
                  </div>
                  <div className='tw-flex tw-items-center'>
                    <select>
                      <option>Featured</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='tw-w-[300px]'>
                <div className='tw-border-[2px] tw-w-full tw-text-[#7E7E7E] tw-p-2 tw-rounded-[7px] tw-flex tw-items-center'>
                  <input className='focus:tw-outline-none focus:tw-placeholder-white tw-w-full' type='search' placeholder='Search…' />
                  <sapn><FaSearch/></sapn>
                </div>
              </div>
            </div>
          </div>
          <Row className="tw-py-7">
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
          <Row>
            <div className='tw-flex tw-gap-2 tw-justify-center tw-py-10'>
              <div className="tw-bg-[#F2F3F4] tw-flex tw-items-center tw-justify-center tw-w-[40px] tw-h-[40px] tw-rounded-full tw-text-center">
                <MdOutlineKeyboardDoubleArrowLeft/>
              </div>
              <div className="tw-bg-[#F2F3F4] tw-flex tw-items-center tw-justify-center tw-w-[40px] tw-h-[40px] tw-rounded-full tw-text-center">
                1
              </div>
              <div className="tw-bg-[#3BB77E] tw-text-white tw-flex tw-items-center tw-justify-center tw-w-[40px] tw-h-[40px] tw-rounded-full tw-text-center">
                2
              </div>
              <div className=" tw-flex tw-items-center tw-justify-center tw-w-[40px] tw-h-[40px] tw-rounded-full tw-text-center">
                ...
              </div>
              <div className="tw-bg-[#F2F3F4] tw-flex tw-items-center tw-justify-center tw-w-[40px] tw-h-[40px] tw-rounded-full tw-text-center">
                5
              </div>
              <div className="tw-bg-[#F2F3F4] tw-flex tw-items-center tw-justify-center tw-w-[40px] tw-h-[40px] tw-rounded-full tw-text-center">
                6
              </div>
              <div className="tw-bg-[#F2F3F4] tw-flex tw-items-center tw-justify-center tw-w-[40px] tw-h-[40px] tw-rounded-full tw-text-center">
                <MdOutlineKeyboardDoubleArrowRight/>
              </div>
            </div>
          </Row>
        </div>
      </Container>
      <Deals/>
    </div>
  )
}

export default CategoryProducts
