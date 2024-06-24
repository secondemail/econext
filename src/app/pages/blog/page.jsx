import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaHome, FaSearch } from 'react-icons/fa'
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import cat1 from '../../../../public/category-1.svg.png'
import blog1 from '../../../../public/blog1.png'
import Image from 'next/image';
import { MdOutlineCategory } from "react-icons/md";
import { TbSortAscending2 } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Link from 'next/link';


const Blogs = () => {
  const list =[1,2,3,4,5]
  return (
    <Container>
      <div className='tw-bg-[#d8f1e5] tw-px-5 lg:tw-px-10 tw-my-10 tw-rounded-[7px] tw-h-[200px] lg:tw-flex tw-pt-7 lg:tw-pt-0 tw-justify-between tw-items-center'>
          <div className='tw-mb-4 lg:tw-mb-0'>
            <h1 className="tw-text-[40px] tw-mb-2 tw-font-[600]">
              Blog & News
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
                Blog & News
              </span>
            </div>
          </div>
          <div style={{scrollbarWidth:"none"}} className='tw-flex tw-gap-4 tw-overflow-x-auto tw-flex-nowrap'>
            <div className='tw-bg-white tw-rounded-full tw-flex tw-items-center tw-gap-1 tw-text-center tw-p-2 tw-px-3'>
              <span className="tw-text-2xl tw-text-[#7E7E7E]"><IoIosClose/></span>
              <span className="tw-text-[#3BB77E]" >Shopping</span>
            </div>
            <div className='tw-bg-white tw-rounded-full tw-flex tw-items-center tw-gap-1 tw-text-center tw-p-2 tw-px-3'>
              <span className="tw-text-2xl tw-text-[#7E7E7E]"><IoIosClose/></span>
              <span>Broccoli</span>
            </div>
            <div className='tw-bg-white tw-rounded-full tw-flex tw-items-center tw-gap-1 tw-text-center tw-p-2 tw-px-3'>
              <span className="tw-text-2xl tw-text-[#7E7E7E]"><IoIosClose/></span>
              <span className="tw-text-[#3BB77E]" >Kitchen</span>
            </div>
            <div className='tw-bg-white tw-rounded-full tw-flex tw-items-center tw-gap-1 tw-text-center tw-p-2 tw-px-3'>
              <span className="tw-text-2xl tw-text-[#7E7E7E]"><IoIosClose/></span>
              <span className="tw-text-[#3BB77E]" >News</span>
            </div>
            <div className='tw-bg-white tw-rounded-full tw-flex tw-items-center tw-gap-1 tw-text-center tw-p-2 tw-px-3'>
              <span className="tw-text-2xl tw-text-[#7E7E7E]"><IoIosClose/></span>
              <span className="tw-text-[#3BB77E]" >Food</span>
            </div>
          </div>
        </div>
      <div>
        <div className='lg:tw-flex tw-justify-between'>
          <div className='tw-flex tw-items-center tw-gap-2'>
            <div>
              <Image src={cat1} alt='cat1' width={30}/>
            </div>
            <h2 className='tw-font-[600] tw-text-[27px]'>Recips Articles</h2>
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
        <Row>
          {
            list.map(i=>(
              <Col key={i} lg="3">
                <Link href='/pages/blog/1'>
                  <div className="tw-py-7">
                    <div>
                      <Image src={blog1} alt={blog1} className="tw-w-full"/>
                    </div>
                    <div className='tw-text-center'>
                      <span className="tw-text-[#7E7E7E] tw-font-[600] tw-text-[12px]">Side Dish</span>
                      <h1 className='tw-font-[600] tw-text-[22px]'>
                        The Intermediate Guide to Healthy Food
                      </h1>
                      <span className="tw-text-[#7E7E7E] tw-font-[600] tw-text-[12px]">
                        25 April 2022 - 126k Views - 4 mins read
                      </span>
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
  )
}

export default Blogs
