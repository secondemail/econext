import React from 'react'
import { Container, Table } from 'react-bootstrap'
import logo from '../../../public/logo.svg.png'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter,FaInstagram,FaPinterestP,FaYoutube } from "react-icons/fa6";
import { BiDownload, BiHome, BiPrinter } from 'react-icons/bi';
import Link from 'next/link';
const Receipt = () => {
  return (
    <div className='tw-bg-[#f2f3f4] tw-py-[70px]'>
      <Link href='/'>
        <div className="tw-text-[#3BB77E] tw-flex tw-gap-1 tw-items-center tw-pl-10 tw-pb-10">
          <span><BiHome/></span>
          <span>HomePage</span>
        </div>
      </Link>
      <Container>
        <div className='tw-bg-white tw-rounded-lg'>
          <div className='tw-bg-[#73caa2] lg:tw-flex tw-text-end tw-px-4 lg:tw-text-start tw-justify-between tw-rounded-t-lg tw-py-10 lg:tw-px-20'>
            <div>
              <Image src={logo} alt='logo' width={150}/>
            </div>
            <div className='tw-font-[600]'>
              <p>Date: 30 Nov 2024</p>
              <p>INVOICE NO: #IVSF1970191</p>
            </div>
          </div>
          <div className='lg:tw-px-20 tw-py-5'>
            <div className='tw-flex tw-justify-between'>
              <div className="tw-text-[#7E7E7E]">
                <p className='tw-font-[600] tw-text-black tw-mb-2'>Invoice To</p>
                <p>NestMart Inc</p>
                <p>billing@NestMart.com</p>
                <p>205 North Michigan Avenue.</p>
                <p>Suite 810 Chicago,60601,USA</p>
              </div>
              <div className="tw-text-[#7E7E7E]">
                <p className='tw-font-[600] tw-text-black tw-mb-2'>Bill To</p>
                <p>NestMart Inc</p>
                <p>billing@NestMart.com</p>
                <p>205 North Michigan Avenue.</p>
                <p>Suite 810 Chicago,60601,USA</p>
              </div>
            </div>
          </div>
          <div className='tw-flex tw-justify-evenly lg:tw-px-20 tw-py-7 tw-text-[#7E7E7E]'>
            <div>
              <p className='tw-font-[600] tw-text-black tw-mb-2'>Due Date:</p>
              <p>30 November 2024</p>
            </div>
            <div>
              <p className='tw-font-[600] tw-text-black tw-mb-2'>Payment Method:</p>
              <p>Via PayPal</p>
            </div>
          </div>
          <hr/>
          <div className='lg:tw-px-20 tw-py-7'>
            <Table variant="light" striped bordered hover>
            <thead>
              <tr className='tw-text-center'>
                <th>#</th>
                <th>Item Name</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>Amount</th>
              </tr>
            </thead>
              <tbody>
                <tr className='tw-text-center'>
                  <td>1</td>
                  <td>Seeds of Change Organic Quinoa, Brown, & Red Rice</td>
                  <td>$10</td>
                  <td>4</td>
                  <td>$40</td>
                </tr>
                <tr className='tw-text-center'>
                  <td>2</td>
                  <td>Seeds of Change Organic Quinoa, Brown, & Red Rice</td>
                  <td>$10</td>
                  <td>4</td>
                  <td>$40</td>
                </tr>
                <tr className='tw-text-center'>
                  <td>3</td>
                  <td>Seeds of Change Organic Quinoa, Brown, & Red Rice</td>
                  <td>$10</td>
                  <td>4</td>
                  <td>$40</td>
                </tr>
                <tr className='tw-text-center tw-font-bold'>
                  <td colSpan={2} >SubTotal</td>
                  <td colSpan={3}>$1710.99</td>
                </tr>
                <tr className='tw-text-center tw-font-bold'>
                  <td colSpan={2} >Tax</td>
                  <td colSpan={3}>$85.99</td>
                </tr>
                <tr className='tw-text-center tw-font-bold'>
                  <td colSpan={2} >Total</td>
                  <td colSpan={3}>$1795.99</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='lg:tw-flex tw-justify-between lg:tw-px-20 tw-py-7 tw-text-[#7E7E7E]'>
            <div>
              <p className='tw-text-black tw-font-[600] tw-text-[25px]'>Important Note</p>
              <div className="tw-text-[12px] tw-pl-4">
                <p>All amounts shown on this invoice are in US dollars.</p>
                <p>Finance charge of 1.5% will be made on unpaid balance after 30 days.</p>
                <p>Once order done,money cant refund.</p>
                <p>Delivery might delay due to some external depandency.</p>
              </div>
            </div>
            <div className='tw-mt-4 lg:tw-mt-0'>
              <p>Thank you for your trust</p>
              <p>NestMart Co.</p>
              <div className='tw-pt-7'>
                <div className='tw-flex tw-gap-3'>
                  <div>Follow Us:</div>
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
              </div>
            </div>
          </div>
        </div>
        <div className='tw-flex tw-justify-center tw-pt-10 tw-gap-10'>
          <div className='tw-flex tw-gap-1 tw-bg-[#253d4e] tw-text-white tw-justify-center tw-items-center tw-py-2 tw-px-5 tw-rounded-sm'>
            <span><BiPrinter/></span>
            <span>Print</span>
          </div>
          <div className='tw-flex tw-gap-1 tw-bg-[#3BB77E] tw-text-white tw-justify-center tw-items-center tw-py-2 tw-px-5 tw-rounded-sm'>
            <span><BiDownload/></span>
            <span>Download</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Receipt
