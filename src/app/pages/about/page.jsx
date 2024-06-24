import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa'
import abimg from '../../../../public/Section.png'
import abimg2 from '../../../../public/about-2.png.png'
import abimg3 from '../../../../public/about-5.png.png'
import abmem from '../../../../public/Mainq.png'
import abmem2 from '../../../../public/Mainq(1).png'
import ico1 from '../../../../public/icon-1fill.png'
import ico2 from '../../../../public/icon-2.svg.png'
import ico3 from '../../../../public/icon-3.svg.png'
import ico4 from '../../../../public/icon-4.svg.png'
import ico5 from '../../../../public/icon-5.svg.png'
import ico6 from '../../../../public/icon-6.svg.png'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter,FaInstagram,FaPinterestP,FaYoutube } from "react-icons/fa6";

const About = () => {
  return (
    <div className='tw-mb-10'>
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
          About Us
        </span>
      </div>
      <Container>
        <Row className='tw-py-10'>
            <Col lg="6">
              <Image src={abimg} alt='abimg' className='tw-h-[600px] tw-w-auto'/>
            </Col>
            <Col lg="6">
              <div className="tw-py-10">
                <h1 className='tw-font-bold tw-text-[30px] tw-text-[#253D4E]'>Welcome to Nest</h1>
                <p className="tw-text-[#7E7E7E] tw-text-[15px] tw-my-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate id est laborum.
                </p>
                <p className="tw-text-[#7E7E7E] tw-text-[15px]">
                  Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
                  interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
                  orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
                  lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate id est laborum.
                </p>
              </div>
              <div style={{scrollbarWidth:"none"}} className=' tw-flex tw-py-5 tw-gap-10  tw-overflow-x-auto tw-w-[100%] tw-flex-nowrap'>
                <div>
                  <Image src={abimg2} alt="" width={150}/>
                </div>
                <div>
                  <Image src={abimg2} alt="" width={150}/>
                </div>
                <div>
                  <Image src={abimg2} alt="" width={150}/>
                </div>
              </div>
            </Col>
        </Row>
        <Row className='tw-py-10'>
          <Row className='tw-text[#253D4E] tw-font-bold tw-text-center tw-text-[30px]'>
            <h2 className='tw-underline'>What We Provide?</h2>
          </Row>
          <Row className="tw-py-10">
            <Col lg="4" className='tw-mb-5'>
              <div className='tw-border-[2px] tw-rounded-[5px] tw-p-6'>
                <div className="tw-flex tw-justify-center">
                  <Image src={ico1} alt="ico1" width={60}/>
                </div>
                <p className='tw-font-bold tw-my-5 tw-text-[20px] tw-text-center tw-text-[#253D4E]'>Best Prices & Offers</p>
                <p className='tw-text-[14px] tw-mb-5 tw-text-center tw-text-[#7E7E7E]'>
                  There are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered
                  alteration in some form
                </p>
                <p className='tw-text-[16px] tw-text-center tw-text-[#3BB77E]'>Read More</p>
              </div>
            </Col>
            <Col lg="4" className='tw-mb-5'>
              <div className='tw-border-[2px] tw-rounded-[5px] tw-p-6'>
                <div className="tw-flex tw-justify-center">
                  <Image src={ico2} alt="ico1" width={60}/>
                </div>
                <p className='tw-font-bold tw-my-5 tw-text-[20px] tw-text-center tw-text-[#253D4E]'>
                  Wide Assortment
                </p>
                <p className='tw-text-[14px] tw-mb-5 tw-text-center tw-text-[#7E7E7E]'>
                  There are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered
                  alteration in some form
                </p>
                <p className='tw-text-[16px] tw-text-center tw-text-[#3BB77E]'>Read More</p>
              </div>
            </Col>
            <Col lg="4" className='tw-mb-5'>
              <div className='tw-border-[2px] tw-rounded-[5px] tw-p-6'>
                <div className="tw-flex tw-justify-center">
                  <Image src={ico3} alt="ico1" width={60}/>
                </div>
                <p className='tw-font-bold tw-my-5 tw-text-[20px] tw-text-center tw-text-[#253D4E]'>
                Free Delivery
                </p>
                <p className='tw-text-[14px] tw-mb-5 tw-text-center tw-text-[#7E7E7E]'>
                  There are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered
                  alteration in some form
                </p>
                <p className='tw-text-[16px] tw-text-center tw-text-[#3BB77E]'>Read More</p>
              </div>
            </Col>
            <Col lg="4" className='tw-mb-5 lg:tw-mb-0'>
              <div className='tw-border-[2px] tw-rounded-[5px] tw-p-6'>
                <div className="tw-flex tw-justify-center">
                  <Image src={ico4} alt="ico1" width={60}/>
                </div>
                <p className='tw-font-bold tw-my-5 tw-text-[20px] tw-text-center tw-text-[#253D4E]'>
                Easy Returns
                </p>
                <p className='tw-text-[14px] tw-mb-5 tw-text-center tw-text-[#7E7E7E]'>
                  There are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered
                  alteration in some form
                </p>
                <p className='tw-text-[16px] tw-text-center tw-text-[#3BB77E]'>Read More</p>
              </div>
            </Col>
            <Col lg="4" className='tw-mb-5 lg:tw-mb-0'>
              <div className='tw-border-[2px] tw-rounded-[5px] tw-p-6'>
                <div className="tw-flex tw-justify-center">
                  <Image src={ico5} alt="ico1" width={60}/>
                </div>
                <p className='tw-font-bold tw-my-5 tw-text-[20px] tw-text-center tw-text-[#253D4E]'>
                100% Satisfaction
                </p>
                <p className='tw-text-[14px] tw-mb-5 tw-text-center tw-text-[#7E7E7E]'>
                  There are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered
                  alteration in some form
                </p>
                <p className='tw-text-[16px] tw-text-center tw-text-[#3BB77E]'>Read More</p>
              </div>
            </Col>
            <Col lg="4" className='tw-mb-5 lg:tw-mb-0'>
              <div className='tw-border-[2px] tw-rounded-[5px] tw-p-6'>
                <div className="tw-flex tw-justify-center">
                  <Image src={ico6} alt="ico1" width={60}/>
                </div>
                <p className='tw-font-bold tw-my-5 tw-text-[20px] tw-text-center tw-text-[#253D4E]'>
                Great Daily Deal
                </p>
                <p className='tw-text-[14px] tw-mb-5 tw-text-center tw-text-[#7E7E7E]'>
                  There are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered
                  alteration in some form
                </p>
                <p className='tw-text-[16px] tw-text-center tw-text-[#3BB77E]'>Read More</p>
              </div>
            </Col>
          </Row>
        </Row>
        <div className='tw-py-10'>
          <div>
            <div className="lg:tw-flex">
              <div>
                <Image src={abimg3} alt="abimg3" width={900}/>
              </div>
              <div className="lg:tw-p-10">
                <p className='tw-text-[#B6B6B6] tw-text-[25px]'>
                  Our performance
                </p>
                <p className='tw-text-[35px] tw-font-[600]'>
                  Your Partner for e-
                  commerce grocery
                  solution
                </p>
                <p className='tw-text-[#7E7E7E] tw-my-7'>
                  Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto
                </p>
                <p className='tw-text-[#7E7E7E]'>
                  Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                </p>
              </div>
            </div>
            <div className='lg:tw-flex tw-gap-5 tw-justify-between tw-py-7'>
              <div>
                <p className='tw-text-[25px] tw-font-[600] lg:tw-mb-5'>Who we are</p>
                <p className="tw-text-[#7E7E7E]">
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
              <div>
                <p className='tw-text-[25px] tw-font-[600] lg:tw-mb-5'>Our history</p>
                <p className="tw-text-[#7E7E7E]">
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
              <div>
                <p className='tw-text-[25px] tw-font-[600] lg:tw-mb-5'>Our mission</p>
                <p className="tw-text-[#7E7E7E]">
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='tw-w-full lg:tw-py-10'>
          <div className='tw-h-full tw-w-full tw-bg-[#6f847b] tw-rounded-lg tw-p-10 tw-pb-14 tw-text-white'>
            <Row>
              <Col xs="6"  className='tw-text-center'>
                <p className='tw-text-[50px] tw-font-bold'>15+</p>
                <p>Glorious years</p>
              </Col>
              <Col xs="6"  className='tw-text-center'>
                <p className='tw-text-[50px] tw-font-bold'>50+</p>
                <p>Happy clients</p>
              </Col>
              <Col xs="4"  className='tw-text-center'>
                <p className='tw-text-[50px] tw-font-bold'>4+</p>
                <p>Projects complete</p>
              </Col>
              <Col xs="4"  className='tw-text-center'>
                <p className='tw-text-[50px] tw-font-bold'>6+</p>
                <p>Team advisor</p>
              </Col>
              <Col xs="4"  className='tw-text-center'>
                <p className='tw-text-[50px] tw-font-bold'>20+</p>
                <p>Products Sale</p>
              </Col>
            </Row>
          </div>
        </div>
        <div className='tw-py-10'>
          <div className='tw-text[#253D4E] tw-font-bold tw-text-center tw-text-[30px]'>
            <h2 className='tw-underline'>Our Team</h2>
          </div>
          <Row className="lg:tw-p-10">
            <Col lg="4">
              <div>
                <p className="tw-text-[#3BB77E] tw-text-[12px]">Our Team</p>
                <p className="tw-text-[#253D4E] tw-text-[40px] tw-font-[600]">Meet Our Expert Team</p>
                <p className="tw-text-[#7E7E7E] tw-my-5">
                  Proin ullamcorper pretium orci. Donec necscele risque leo.
                  Nam massa dolor imperdiet neccon sequata congue idsem.
                  Maecenas malesuada faucibus finibus.
                </p>
                <p className="tw-text-[#7E7E7E] tw-mb-5">
                  Proin ullamcorper pretium orci. Donec necscele risque leo.
                  Nam massa dolor imperdiet neccon sequata congue idsem.
                  Maecenas malesuada faucibus finibus.
                </p>
                <div className="tw-bg-[#3BB77E] tw-mb-7 lg:tw-mb-0 tw-text-white tw-rounded-lg tw-p-2 tw-text-center">
                  View All Members
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className=' tw-relative tw-mb-10 lg:tw-mb-0 tw-w-full tw-h-full'>
                <div>
                  <Image src={abmem} alt='abmem' width={300}/>
                </div>
                <div className='tw-absolute tw-bottom-0 tw-left-[60px] tw-bg-white tw-shadow-lg tw-text-center tw-py-7 tw-px-12 tw-rounded-[15px]'>
                  <p className="tw-font-[600] ">H. Merinda</p>
                  <p className="tw-text-[#7E7E7E] tw-mb-4 tw-text-[12px] tw-font-[600]">CEO & Co-Founder</p>
                  <div className="  tw-flex tw-justify-between tw-text-[#3BB77E]">
                    <FaFacebookF/>
                    <FaXTwitter/>
                    <FaInstagram/>
                    <FaYoutube/>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className=' tw-relative tw-mt-10 lg:tw-mt-0  tw-w-full tw-h-full'>
                <div>
                  <Image src={abmem2} alt='abmem2' width={300}/>
                </div>
                <div className='tw-absolute tw-bottom-0 tw-left-[60px] tw-bg-white tw-shadow-lg tw-text-center tw-py-7 tw-px-12 tw-rounded-[15px]'>
                  <p className="tw-font-[600] ">Dilan Specter</p>
                  <p className="tw-text-[#7E7E7E] tw-mb-4 tw-text-[12px] tw-font-[600]">Head Engineer</p>
                  <div className="  tw-flex tw-justify-between tw-text-[#3BB77E]">
                    <FaFacebookF/>
                    <FaXTwitter/>
                    <FaInstagram/>
                    <FaYoutube/>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default About