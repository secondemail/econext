import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mapbanner from '../../../../public/MainSection.png'
import contactimg from '../../../../public/contact-2.png'
import { IoLocationOutline } from "react-icons/io5";
import { FaHome } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <div className="tw-flex tw-items-center tw-gap-3 tw-border-b-[2px] tw-py-3 tw-pl-7">
        <span className="tw-flex tw-items-center tw-gap-2 tw-text-[#3BB77E]">
          <FaHome/>
          Home
        </span>
        <span>
          |
        </span>
        <span className="tw-flex tw-items-center tw-gap-2 ">
          Pages
        </span>
        <span>
          |
        </span>
        <span className="tw-flex tw-items-center tw-gap-2 ">
          Contact
        </span>
      </div>
      <Container>
        <Row className="tw-pt-10">
          <p className='tw-text-[#3BB77E] tw-text-lg tw-font-[600]'>How can help you ?</p>
          <Col lg="4">
            <div className='tw-py-2'>
              <h1 className='tw-text-[40px] tw-font-[600] tw-mb-5'>Let us know how we can help you</h1>
              <p className='tw-text-[#7E7E7E] tw-text-[13px] tw-mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
              <p className='tw-text-[#7E7E7E] tw-text-[13px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
          </Col>
          <Col lg="4">
            <div className='tw-pt-[60px]'>
              <div className='tw-mb-5'>
                <p className='tw-font-[600] tw-mb-3'>01. Visit Feedback</p>
                <p className='tw-text-[#7E7E7E] tw-text-[13px] tw-mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div>
                <p className='tw-font-[600] tw-text-[#3BB77E] tw-mb-3'>02. Billing Inquiries</p>
                <p className='tw-text-[#7E7E7E] tw-text-[13px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className='tw-pt-[60px]'>
              <div className='tw-mb-5'>
                <p className='tw-font-[600] tw-mb-3'>03. Employer Services</p>
                <p className='tw-text-[#7E7E7E] tw-text-[13px] tw-mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div>
                <p className='tw-font-[600]  tw-mb-3'>04.General Inquiries</p>
                <p className='tw-text-[#7E7E7E] tw-text-[13px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='tw-px-7 tw-mt-10'>
        <Image src={mapbanner} alt='mapbanner' className="tw-w-full" height={300}/>
      </div>
      <Container>
        <Row className="tw-py-10">
          <Col lg="4">
            <div>
              <p className='tw-text-[#3BB77E] tw-font-[600] tw-text-xl tw-mb-3'>Office</p>
              <p className='tw-text-[#7E7E7E] tw-text-[14px] tw-mb-3'>
                205 North Michigan Avenue, Suite 810 <br/>
                Chicago, 60601, USA<br/>
                Phone: (123) 456-7890<br/>
                Email: contact@Evara.com
              </p>
              <div className="tw-flex">
                <div className='tw-text-white tw-flex tw-justify-center tw-items-center tw-bg-[#3BB77E] tw-rounded-lg tw-p-2'>
                  <span><IoLocationOutline/></span>
                  <span>View map</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div>
              <p className='tw-text-[#3BB77E] tw-font-[600] tw-text-xl tw-mb-3'>Studio</p>
              <p className='tw-text-[#7E7E7E] tw-text-[14px] tw-mb-3'>
                205 North Michigan Avenue, Suite 810 <br/>
                Chicago, 60601, USA<br/>
                Phone: (123) 456-7890<br/>
                Email: contact@Evara.com
              </p>
              <div className="tw-flex">
                <div className='tw-text-white tw-flex tw-justify-center tw-items-center tw-bg-[#3BB77E] tw-rounded-lg tw-p-2'>
                  <span><IoLocationOutline/></span>
                  <span>View map</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div>
              <p className='tw-text-[#3BB77E] tw-font-[600] tw-text-xl tw-mb-3'>Shop</p>
              <p className='tw-text-[#7E7E7E] tw-text-[14px] tw-mb-3'>
                205 North Michigan Avenue, Suite 810 <br/>
                Chicago, 60601, USA<br/>
                Phone: (123) 456-7890<br/>
                Email: contact@Evara.com
              </p>
              <div className="tw-flex">
                <div className='tw-text-white tw-flex tw-justify-center tw-items-center tw-bg-[#3BB77E] tw-rounded-lg tw-p-2'>
                  <span><IoLocationOutline/></span>
                  <span>View map</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="tw-py-10">
          <Col lg="8">
            <div>
              <div className='tw-mb-3'>
                <p className='tw-text-[#3BB77E] tw-font-[600] tw-mb-2'>Contact form</p>
                <p className='tw-text-[30px] tw-font-[600] tw-mb-2'>Drop Us a Line</p>
                <p className='tw-text-[#B6B6B6] tw-text-[14px]'>Your email address will not be published. Required fields are marked *</p>
              </div>
              <div>
                <Row>
                  <Col lg="6">
                    <div className='tw-mb-4'>
                      <input className='tw-w-full focus:tw-border-[#3BB77E] focus:tw-outline-none tw-border-2 tw-p-3 focus:tw-placeholder-transparent tw-rounded-md' type="text" placeholder='First Name' />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className='tw-mb-4'>
                      <input className='tw-w-full focus:tw-border-[#3BB77E] focus:tw-outline-none tw-border-2 tw-p-3 focus:tw-placeholder-transparent tw-rounded-md' type="text" placeholder='Your Email' />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className='tw-mb-4'>
                      <input className='tw-w-full focus:tw-border-[#3BB77E] focus:tw-outline-none tw-border-2 tw-p-3 focus:tw-placeholder-transparent tw-rounded-md' type="text" placeholder='Your Phone' />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className='tw-mb-4'>
                      <input className='tw-w-full focus:tw-border-[#3BB77E] focus:tw-outline-none tw-border-2 tw-p-3 focus:tw-placeholder-transparent tw-rounded-md' type="text" placeholder='Subject' />
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className='tw-mb-4'>
                      <textarea rows={7} className='tw-w-full focus:tw-border-[#3BB77E] focus:tw-outline-none tw-border-2 tw-p-3 focus:tw-placeholder-transparent tw-rounded-md' placeholder='Message'></textarea>
                    </div>
                  </Col>
                  <div>
                    <button className='tw-text-center tw-rounded-md tw-text-white tw-bg-[#253D4E] tw-p-3'>Send message</button>
                  </div>
                </Row>
              </div>
            </div>
          </Col>
          <Col className='tw-hidden lg:tw-block' lg="4">
            <div className='tw-flex tw-items-center tw-h-full tw-justify-center'>
              <Image src={contactimg} alt='contactimg' height={300}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
