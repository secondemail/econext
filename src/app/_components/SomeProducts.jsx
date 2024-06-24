import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import prodim from '../../../public/thumbnail-11.jpg.png'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'
import Link from 'next/link'

const SomeProducts = () => {
  const list =[1,2,3,4]
  return (
    <Container className='tw-pb-10'>
      <Row>
        {
          list.map(i=>(
            <Col key={i} lg="3">
              <div>
                <div>
                  <h1 className=' tw-text-[24px]  tw-text-[#253D4E]'>
                    Top Selling
                  </h1>
                  <div className='tw-border-b-[3px] tw-w-[80px] tw-mt-3 tw-border-[#BCE3C9]'></div>
                </div>
                <hr/>
                <div>
                  {
                    list.slice(0,3).map(i=>(
                      <Link key={i} href='/products/1'>
                        <div  className='tw-flex tw-mb-2 tw-items-center'>
                          <div>
                            <Image src={prodim} alt="prodim" width={150}/>
                          </div>
                          <div>
                            <div className='tw-p-5'>
                              <h1 className='tw-text-[#253D4E] tw-text-[13px] tw-line-clamp-1 tw-font-bold'>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h1>
                              <span className='tw-flex tw-items-center tw-gap-2'>
                                <FaStar className='tw-text-yellow-500'/>
                                <span className='tw-text-[#B6B6B6] tw-text-[12px]'>(4.0)</span>
                              </span>
                              <div className='tw-flex tw-justify-between tw-items-center'>
                                <div className='tw-flex tw-gap-2 tw-items-end'>
                                  <span className='tw-text-[#3BB77E] tw-text-[15px]'>$32.85</span>
                                  <span className='tw-text-[#ADADAD] tw-text-[12px] tw-line-through'>$33.8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default SomeProducts