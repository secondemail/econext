"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footerimg from '../../../public/Footer.png'
import playimg from '../../../public/google-play.jpg.png'
import appimg from '../../../public/app-store.jpg.png'
import payimg from '../../../public/payment-method.png.png'
import Image from 'next/image'
import ico from '../../../public/icon-1fill.png'
import logo from '../../../public/logo.svg.png'
import { IoLocationOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuSend } from "react-icons/lu";
import { BsClockHistory } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter,FaInstagram,FaPinterestP,FaYoutube } from "react-icons/fa6";
import { usePathname } from 'next/navigation';

const Footer = () => {
  const router = usePathname();
  const list =[1,2,3,4,5]
  return (
    <Container className={router==="/receipt" || router==="/login" || router==="/signup" ? "tw-hidden" : ""}>
      <div>
        <Image src={footerimg} alt='' className='tw-h-[170px] lg:tw-h-auto' height={500}/>
      </div>
      <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-py-5 tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
        {
          list.map(i=>(
            <div key={i} className='tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-items-center tw-gap-2 tw-p-4 tw-bg-[#F4F6FA] tw-rounded-[5px]'>
              <div>
                <Image src={ico} width={50} alt=""/>
              </div>
              <div className='tw-flex tw-items-center tw-flex-col tw-justify-center'>
                <h2>Best prices & offers</h2>
                <span className='tw-text-[#ADADAD] tw-text-[12px]'>Orders $50 or more</span>
              </div>
            </div>
          ))
        }
      </div>
      <Row className='tw-py-3'>
        <Col xs="12" lg="3">
          <div>
            <Image src={logo} alt='logo' width={180}/>
          </div>
          <div className='tw-mb-7 tw-mt-4'>
            Awesome grocery store website template
          </div>
          <div className='tw-flex tw-gap-1 tw-mb-3'>
            <span className='tw-text-[#3BB77E] tw-text-[20px]'>
              <IoLocationOutline/>
            </span>
            <span className='tw-text-[13px]'>
              Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States
            </span>
          </div>
          <div className='tw-flex tw-gap-1 tw-mb-3'>
            <span className='tw-text-[#3BB77E] tw-text-[20px]'>
              <TfiHeadphoneAlt/>
            </span>
            <span className='tw-text-[13px]'>
              Call Us:(+91) - 540-025-124553
            </span>
          </div>
          <div className='tw-flex tw-gap-1 tw-mb-3'>
            <span className='tw-text-[#3BB77E] tw-text-[20px]'>
              <LuSend/>
            </span>
            <span className='tw-text-[13px]'>
              Email:sale@Nest.com
            </span>
          </div>
          <div className='tw-flex tw-gap-1 tw-mb-3'>
            <span className='tw-text-[#3BB77E] tw-text-[20px]'>
              <BsClockHistory/>
            </span>
            <span className='tw-text-[13px]'>
              Hours:10:00 - 18:00, Mon - Sat
            </span>
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div>
            <h2 className='tw-text-[19px] tw-font-bold'>Company</h2>
            <ul>
              <li className='tw-my-4 tw-text-[13px]'>About Us</li>
              <li className='tw-mb-4 tw-text-[13px]'>Delivery Information</li>
              <li className='tw-mb-4 tw-text-[13px]'>Privacy Policy</li>
              <li className='tw-mb-4 tw-text-[13px]'>Terms & Conditions</li>
              <li className='tw-mb-4 tw-text-[13px]'>Contact Us</li>
              <li className='tw-mb-4 tw-text-[13px]'>Support Center</li>
              <li className='tw-text-[13px]'>Careers</li>
            </ul>
          </div>
        </Col>
        <Col xs="6" lg="3">
          <div>
            <h2 className='tw-text-[19px] tw-font-bold'>Account</h2>
            <ul>
              <li className='tw-my-4 tw-text-[13px]'>Sign In</li>
              <li className='tw-mb-4 tw-text-[13px]'>View Cart</li>
              <li className='tw-mb-4 tw-text-[13px]'>My Wishlist</li>
              <li className='tw-mb-4 tw-text-[13px]'>Track My Order</li>
              <li className='tw-mb-4 tw-text-[13px]'>Help Ticket</li>
              <li className='tw-mb-4 tw-text-[13px]'>Shipping Details</li>
              <li className='tw-text-[13px]'>Compare products</li>
            </ul>
          </div>
        </Col>
        <Col xs="12" lg="3">
          <div className='tw-pt-7'>
            <h2 className='tw-text-[19px] tw-font-bold'>Install App</h2>
            <div className='tw-my-2'>
              <h2 className='tw-py-4 tw-text-[13px]'>From App Store or Google Play</h2>
              <div className='tw-text-[13px] tw-flex tw-gap-2'>
                <Image src={playimg} alt='' width={100}/>
                <Image src={appimg} alt=''  width={100}/>
              </div>
            </div>
            <div className='tw-mt-10'>
              <h2 className='tw-text-[12px] tw-mb-4'>Secured Payment Gateways</h2>
              <Image src={payimg} alt=''  width={200}/>
            </div>
          </div>
        </Col>
      </Row>
      <hr/>
      <div className='tw-py-7 lg:tw-flex tw-justify-between tw-items-center'>
        <div>
          <p className='tw-text-[#7E7E7E] tw-text-[12px]'>
            © 2022, <span className='tw-text-[#3BB77E]'>Nest</span> - HTML Ecommerce Template All rights reserved
          </p>
        </div>
        <div className='tw-flex tw-gap-4 tw-my-4'>
          <div className='tw-flex tw-items-center tw-gap-2'>
            <div className='tw-text-3xl tw-text-[#7E7E7E]'>
              <FiPhoneCall/>
            </div>
            <div>
              <div className='tw-text-[#3BB77E] tw-text-[20px] tw-font-bold'>
                1900 - 6666
              </div>
              <div className='tw-text-[#7E7E7E] tw-text-center tw-text-[10px]' >
                Working 8:00 - 22:00
              </div>
            </div>
          </div>
          <div className='tw-flex tw-items-center tw-gap-2'>
            <div className='tw-text-3xl tw-text-[#7E7E7E]'>
              <FiPhoneCall/>
            </div>
            <div>
              <div className='tw-text-[#3BB77E] tw-text-[20px] tw-font-bold'>
                1900 - 6666
              </div>
              <div className='tw-text-[#7E7E7E] tw-text-center tw-text-[10px]' >
                Working 8:00 - 22:00
              </div>
            </div>
          </div>
        </div>
        <div className='tw-my-4'>
          <div className='tw-flex tw-gap-3 tw-justify-center lg:tw-justify-start'>
            <div className='tw-text-white tw-bg-[#3BB77E] tw-p-2 tw-rounded-full'>
              <FaFacebookF/>
            </div>
            <div className='tw-text-white tw-bg-[#3BB77E] tw-p-2 tw-rounded-full'>
              <FaInstagram/>
            </div>
            <div className='tw-text-white tw-bg-[#3BB77E] tw-p-2 tw-rounded-full'>
              <FaPinterestP/>
            </div>
            <div className='tw-text-white tw-bg-[#3BB77E] tw-p-2 tw-rounded-full'>
              <FaXTwitter/>
            </div>
            <div className='tw-text-white tw-bg-[#3BB77E] tw-p-2 tw-rounded-full'>
              <FaYoutube/>
            </div>
          </div>
          <div className="tw-text-[10px] tw-text-[#7E7E7E] tw-text-center tw-mt-3">
            Up to 15% discount on your first subscribe
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
