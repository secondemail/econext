import React from 'react'
import { Container } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa'
import { GiSelfLove } from "react-icons/gi";
import { CiBookmark } from "react-icons/ci";
import avatar from '../../../../../public/image281.png'
import blogimg from '../../../../../public/blog-19.png'
import blogimg2 from '../../../../../public/blog-21.png'
import Image from 'next/image'
import { FaXTwitter,FaInstagram,FaPinterestP,FaYoutube, FaStar } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Blog = () => {
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
        <span className="tw-flex tw-text-[#3BB77E] tw-items-center tw-gap-2 ">
          Recipes
        </span>
        <span>
          |
        </span>
        <span className="tw-flex tw-items-center tw-gap-2 ">
          Best smartwatch 2022
        </span>
      </div>
      <Container>
        <div className='tw-py-7'>
          <span className='tw-text-[#3BB77E] tw-mb-3'>Recipes</span>
          <h1 className='tw-font-[600] tw-text-[30px] tw-mb-2'>
            Best smartwatch 2022: the top wearables you can buy today
          </h1>
          <div className='tw-hidden lg:tw-flex tw-justify-between tw-text-[#7E7E7E]'>
            <div className='tw-flex tw-items-center tw-gap-2'>
              <div>
                <Image className='tw-rounded-full' src={avatar} alt='avatar' width={30}/>
              </div>
              <div> 
                By <span className='tw-text-[#3BB77E]'>Sugar Rosie</span>
              </div>
              <span>|</span>
              <div>
                2 hours ago
              </div>
              <span>|</span>
              <div>
                8 mins read
              </div>
            </div>
            <div className='tw-flex tw-text-2xl tw-items-center tw-gap-3'>
              <span>
                <CiBookmark/>
              </span>
              <span>
                <GiSelfLove/>
              </span>
            </div>
          </div>
          <div className='tw-flex tw-justify-between tw-text-[#7E7E7E] lg:tw-hidden'>
            <div className='tw-flex tw-items-center tw-gap-2'>
              <div>
                <Image className='tw-rounded-full' src={avatar} alt='avatar' width={30}/>
              </div>
              <div> 
                By <span className='tw-text-[#3BB77E]'>Sugar Rosie</span>
              </div>
            </div>
            <div className='tw-flex tw-text-2xl tw-items-center tw-gap-3'>
              <span>
                <CiBookmark/>
              </span>
              <span>
                <GiSelfLove/>
              </span>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-justify-center">
          <Image src={blogimg} alt='blogimg' className='tw-w-auto tw-h-[300px] lg:tw-h-[500px]'/>
        </div>
        <div className='lg:tw-px-40 tw-py-10'>
          <p className='tw-font-[600] tw-mb-4'>
            Helping everyone live happier, healthier lives at home through their kitchen. Kitchn
            is a daily food magazine on the Web celebrating life in the kitchen through home
            cooking and kitchen intelligence.
          </p>
          <p className='tw-mb-4'>
            We've reviewed and ranked all of the best smartwatches on the market right now, and we've made a definitive list of
            the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.
          </p>
          <p className='tw-mb-4'>
            Those top-end wearables span from the Apple Watch to Fitbits, Garmin watches to Tizen-sporting Samsung watches.
            There's also Wear OS which is Google's own wearable operating system in the vein of Apple's watchOS - you’ll see it
            show up in a lot of these devices.
          </p>
          <p className='tw-font-[600] tw-mb-4'>
            Lorem ipsum dolor sit amet cons
          </p>
          <p className='tw-mb-4'>
            Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch,
            rank it against the competition and enter it into the list you'll find below.
          </p>
          <div className='tw-mb-4'>
            <Image src={blogimg2} alt='blogimg2' className='tw-w-full tw-h-[330px]'/>
          </div>
          <p className='tw-mb-4'>
            Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor
            integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque ullamcorper eu neque, augue quam quis
            lacus pretium eros est amet turpis nunc in turpis massa et eget facilisis ante molestie penatibus dolor volutpat, porta
            pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor lectus
          </p>
          <div className='tw-bg-[#F4F6FA] tw-mb-4 tw-text-[#7E7E7E] tw-px-2 lg:tw-px-20 tw-py-10 lg:tw-mx-[200px] tw-rounded-lg'>
            Integer eu faucibus dolor. Ut venenatis tincidunt<br/>
            diam elementum imperdiet. Etiam accumsan semper
            nisl eu congue. Sed aliquam magna erat, ac eleifend
            lacus rhoncus in.
          </div>
          <p className='tw-mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras
            elementum libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi
            scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada
            cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.
          </p>
          <div className='tw-mb-4 tw-border-t-2 lg:tw-flex tw-justify-between tw-py-4'>
            <div className='tw-flex tw-mb-2 lg:tw-mb-0 tw-gap-4'>
              <div className='tw-bg-[#3BB77E] tw-text-center tw-rounded-lg tw-py-2 tw-px-4 tw-text-white'>
                deer
              </div>
              <div className='tw-bg-[#3BB77E] tw-text-center tw-rounded-lg tw-py-2 tw-px-4 tw-text-white'>
                nature
              </div>
              <div className='tw-bg-[#3BB77E] tw-text-center tw-rounded-lg tw-py-2 tw-px-4 tw-text-white'>
                conserve
              </div>
            </div>
            <div className='tw-text-[#A2A2A2] tw-flex tw-items-center tw-gap-2'>
              Share this:
              <FaFacebookF/>
              <FaInstagram/>
              <FaXTwitter/>
              <FaPinterestP/>
            </div>
          </div>
          <div className='tw-mb-4 tw-border-2 tw-rounded-lg tw-p-7'>
            <div className="tw-flex tw-gap-2 tw-items-center">
              <div>
                <Image className="tw-rounded-full" src={avatar} alt='avatar' width={60}/>
              </div>
              <div>
                <p className='tw-font-[600]'>Barbara Cartland</p>
                <p className='tw-text-[#B6B6B6] tw-text-[12px]'>
                  306 posts | Since 2012
                </p>
              </div>
            </div>
            <div className='tw-pt-7'>
              <p>
                Hi there, I am a veteran food blogger sharing my daily all kinds of healthy and fresh recipes. I find inspiration in
                nature, on the streets and almost everywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id
                enim, libero sit. Est donec lobortis cursus amet, cras elementum libero
              </p>
            </div>
          </div>
          <div className='tw-mb-4 tw-border-b-2 tw-pb-7'>
            <h2 className='tw-text-[30px] tw-font-[600] tw-py-7'>Leave a Comment</h2>
            <div >
              <textarea className='tw-border-2 tw-rounded-lg tw-w-full focus:tw-outline-none tw-p-2' placeholder='Comment...'></textarea>
              <div className='lg:tw-flex tw-gap-2 tw-mb-4'>
                <input type='text' className='tw-border-2 tw-mb-3 lg:tw-mb-0 tw-w-full tw-rounded-lg focus:tw-outline-none tw-p-2' placeholder='Name' />
                <input type='text' className='tw-border-2 tw-w-full tw-rounded-lg focus:tw-outline-none tw-p-2' placeholder='Email' />
              </div>
              <div>
                <button className='tw-text-center tw-bg-[#3BB77E] tw-rounded-lg tw-text-white tw-border-none tw-p-2'>Post Comment</button>
              </div>
            </div>
          </div>
          <div className='tw-mb-4'>
            <h2 className='tw-text-[30px] tw-font-[600] tw-py-7'>Comments</h2>
            <div className='tw-border-2 tw-mb-7 tw-p-7 tw-pr-10 tw-rounded-lg tw-flex'>
              <div className='tw-pr-7'>
                <div>
                  <Image className='tw-rounded-full' src={avatar} alt='avatar' width={150}/>
                </div>
                <p className='tw-font-[600] tw-text-center tw-text-[#3BB77E]'>Sienna</p>
              </div>
              <div>
                <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                  <div className='tw-text-[#B6B6B6] tw-text-[13px]'>December 4, 2022 at 3:12 pm</div>
                  <div className='tw-text-yellow-400'>
                    <FaStar/>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
                  suscipit exercitationem accusantium obcaecati quos voluptate nesciunt
                  facilis itaque modi commodi dignissimos sequi repudiandae minus ab
                  deleniti totam officia id incidunt? 
                </div>
              </div>
            </div>
            <div className='tw-border-2 tw-mb-7 tw-p-7 tw-pr-10 tw-rounded-lg tw-flex'>
              <div className='tw-pr-7'>
                <div>
                  <Image className='tw-rounded-full' src={avatar} alt='avatar' width={150}/>
                </div>
                <p className='tw-font-[600] tw-text-center tw-text-[#3BB77E]'>Sienna</p>
              </div>
              <div>
                <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                  <div className='tw-text-[#B6B6B6] tw-text-[13px]'>December 4, 2022 at 3:12 pm</div>
                  <div className='tw-text-yellow-400'>
                    <FaStar/>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
                  suscipit exercitationem accusantium obcaecati quos voluptate nesciunt
                  facilis itaque modi commodi dignissimos sequi repudiandae minus ab
                  deleniti totam officia id incidunt? 
                </div>
              </div>
            </div>
            <div className='tw-border-2 tw-mb-7 tw-p-7 tw-pr-10 tw-rounded-lg tw-flex'>
              <div className='tw-pr-7'>
                <div>
                  <Image className='tw-rounded-full' src={avatar} alt='avatar' width={150}/>
                </div>
                <p className='tw-font-[600] tw-text-center tw-text-[#3BB77E]'>Sienna</p>
              </div>
              <div>
                <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                  <div className='tw-text-[#B6B6B6] tw-text-[13px]'>December 4, 2022 at 3:12 pm</div>
                  <div className='tw-text-yellow-400'>
                    <FaStar/>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
                  suscipit exercitationem accusantium obcaecati quos voluptate nesciunt
                  facilis itaque modi commodi dignissimos sequi repudiandae minus ab
                  deleniti totam officia id incidunt? 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Blog