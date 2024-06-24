"use client"
import React,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap'
import logo from '../../../public/logo.svg.png'
import Image from 'next/image'
import { IoSearchOutline,IoLocationOutline,IoGitCompareOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { BiCategory, BiLogInCircle } from "react-icons/bi";
import { VscFlame } from "react-icons/vsc";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { CiBoxList } from "react-icons/ci";



const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = usePathname();
  const [path,setPath]=useState("")
  useEffect(()=>{
    setPath(router)
  },[router])
  return (
    <nav className={router==="/receipt" ? "tw-hidden" : ""}>
      <div className='tw-border-b-[2px] tw-py-1 tw-hidden md:tw-block'>
        <Container>
          <div className='tw-flex tw-justify-between tw-items-center'>
            <div>
              <span className='tw-border-r-2 tw-pr-4 tw-text-[13px] tw-text-[#7E7E7E] tw-font-[500]'>About Us</span>
              <span className='tw-border-r-2 tw-px-4 tw-text-[13px] tw-text-[#7E7E7E] tw-font-[500]'>My Account</span>
              <span className='tw-border-r-2 tw-px-4 tw-text-[13px] tw-text-[#7E7E7E] tw-font-[500]'>Wishlist</span>
              <span className='tw-pl-4 tw-text-[13px] tw-text-[#7E7E7E] tw-font-[500]'>Order Tracking</span>
            </div>
            <div>
              <p className='tw-text-[#7E7E7E] tw-text-[14px] tw-font-[600]'>100% Secure delivery without contacting the courier</p>
            </div>
            <div>
              <span className='tw-border-r-2 tw-pr-4 tw-text-[13px] tw-text-[#7E7E7E] tw-font-[400]'>Need help? Call Us:<span className='tw-text-[#3BB77E] tw-font-[600]'>+ 1800 900</span></span>
              <span className='tw-border-r-2 tw-px-4 tw-text-[13px] tw-text-[#7E7E7E] tw-font-[500]'>English</span>
              <span className='tw-pl-4 tw-text-[13px] tw-text-[#7E7E7E] tw-font-[500]'>USD</span>
            </div>
          </div>
        </Container>
      </div>

      <div className='tw-border-b-[2px] tw-py-1 md:tw-hidden '>
        <Container>
          <div>
            <div>
              <p className='tw-text-[#7E7E7E] tw-text-[14px] tw-font-[600]'>100% Secure delivery without contacting the courier</p>
            </div>
            <div>
              <span className='tw-border-r-2 tw-pr-4 tw-text-[13px] tw-text-[#7E7E7E] tw-font-[400]'>Need help? Call Us:<span className='tw-text-[#3BB77E] tw-font-[600]'>+ 1800 900</span></span>
              <span className='tw-border-r-2 tw-px-4 tw-text-[13px] tw-text-[#7E7E7E] tw-font-[500]'>English</span>
              <span className='tw-pl-4 tw-text-[13px] tw-text-[#7E7E7E] tw-font-[500]'>USD</span>
            </div>
          </div>
        </Container>
      </div>

      <div className='tw-border-b-[2px] tw-py-7 tw-hidden lg:tw-block '>
        <div className='px-4'>
          <div className='tw-flex tw-justify-between tw-items-center'>
            <div>
              <Image src={logo} width={150} alt='logo' />
            </div>
            <div className=' tw-p-3 tw-border-2 tw-flex tw-items-center tw-border-[#BCE3C9] tw-rounded-[4px]'>
              <select className='tw-border-r-2'>
                <option>All Categories</option>
              </select>
              <div className='tw-px-2 tw-flex tw-items-center'>
                <input className='tw-text-[14px] tw-w-[400px] focus:tw-outline-none ' type='search' placeholder='Search for items ...' />
                <span className='tw-text-[#7E7E7E] tw-text-2xl'><IoSearchOutline/></span>
              </div>
            </div>
            <div className='tw-border-2 tw-shadow-md tw-rounded-[5px] tw-p-2 tw-border-[#ECECEC] tw-flex tw-items-center'>
              <span className='tw-text-[#7E7E7E] tw-text-2xl'><IoLocationOutline/></span>
              <select className='tw-text-[#3BB77E]'>
                <option>Your Location</option>
              </select>
            </div>
            <div className='tw-flex tw-items-center'>
              <div className='tw-flex tw-items-end tw-border-r-2 tw-pr-2'>
                <span className='tw-relative'>
                  <span className='tw-text-3xl'>
                    <IoGitCompareOutline/>
                  </span>
                  <span className='tw-bg-[#3BB77E] tw-rounded-full tw-absolute tw-right-[-5px] tw-top-[-7px] tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-text-[12px] tw-text-white '>3</span>
                </span>
                <span className='tw-text-[#7E7E7E]'>Compare</span>
              </div>
              <Link href='/wishlist'>
                <div className='tw-flex tw-items-end tw-border-r-2 tw-px-2'>
                  <span className='tw-relative'>
                    <span className='tw-text-3xl'>
                      <GrFavorite/>
                    </span>
                    <span className='tw-bg-[#3BB77E] tw-rounded-full tw-absolute tw-right-[-5px] tw-top-[-7px] tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-text-[12px] tw-text-white '>3</span>
                  </span>
                  <span className='tw-text-[#7E7E7E]'>Wishlist</span>
                </div>
              </Link>
              <Link href='/cart'>
                <div className='tw-flex tw-items-end tw-border-r-2 tw-px-2'>
                  <span className='tw-relative'>
                    <span className='tw-text-3xl'>
                      <FiShoppingCart/>
                    </span>
                    <span className='tw-bg-[#3BB77E] tw-rounded-full tw-absolute tw-right-[-5px] tw-top-[-7px] tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-text-[12px] tw-text-white '>3</span>
                  </span>
                  <span className='tw-text-[#7E7E7E]'>Cart</span>
                </div>
              </Link>
              <Link href='/login'>
                <div className='tw-flex tw-items-end  tw-pl-2'>
                  <span>
                    <span className='tw-text-3xl'>
                      <RiAccountPinCircleLine/>
                    </span>
                  </span>
                  <span className='tw-text-[#7E7E7E]'>Account</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='tw-border-b-[2px] tw-py-7 lg:tw-hidden '>
        <div className='px-4'>
          <div className='tw-flex tw-justify-between tw-items-center'>
            <Link href="/">
              <Image src={logo} width={150} alt='logo' />
            </Link>
            <div>
              <Button variant="none" className='tw-text-[30px] tw-text-[#3BB77E]'  onClick={handleShow}>
                <CiBoxList/>
              </Button>
              <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title><Image src={logo} width={150} alt='logo' /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className='tw-p-3 tw-border-2 tw-flex tw-items-center tw-border-[#BCE3C9] tw-rounded-[4px]'>
                    <select className='tw-border-r-2'>
                      <option>All Categories</option>
                    </select>
                    <div className='tw-px-2 tw-flex tw-items-center'>
                      <input className='tw-text-[14px] focus:tw-outline-none ' type='search' placeholder='Search for items ...' />
                      <span className='tw-text-[#7E7E7E] tw-text-2xl'><IoSearchOutline/></span>
                    </div>
                  </div>
                  <div className='tw-font-[700] tw-flex tw-justify-between tw-py-10'>
                    <Link onClick={handleClose} href='/' className={path === '/' ? 'tw-text-[#3BB77E]' : ''}>Home</Link>
                    <Link onClick={handleClose} href='/pages/about' className={path === '/pages/about' ? 'tw-text-[#3BB77E]' : ''}>About</Link>
                    <Link onClick={handleClose} href='/pages/blog' className={path === '/pages/blog' ? 'tw-text-[#3BB77E]' : ''}>Blog</Link>
                    <Link onClick={handleClose} href='/pages/contact' className={path === '/pages/contact' ? 'tw-text-[#3BB77E]' : ''}>Contact</Link>
                  </div>
                  <div className='tw-flex tw-justify-center tw-items-center tw-gap-2'>
                    <div className='tw-text-[50px]'>
                      <TfiHeadphoneAlt/>
                    </div>
                    <div>
                      <div className='tw-text-[#3BB77E] tw-font-bold tw-text-[26px]'>
                        1900 - 888
                      </div>
                      <div className='tw-text-[#7E7E7E] tw-text-[12px] tw-text-center'>
                        24/7 Support Center
                      </div>
                    </div>
                  </div>
                </Offcanvas.Body>
                <div className='tw-flex tw-items-end  tw-justify-center tw-border-t-2 tw-py-7'>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='tw-flex tw-gap-2 tw-items-center tw-text-white'>
                      <span>
                        <span className='tw-text-3xl'>
                          <RiAccountPinCircleLine/>
                        </span>
                      </span>
                      <span >Account</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <div className='tw-flex tw-justify-between tw-mb-2 tw-items-center tw-px-2'>
                        <div className='tw-flex tw-items-center tw-gap-2'>
                          <span className='tw-text-3xl'>
                            <IoGitCompareOutline/>
                          </span>
                          <span className='tw-text-[#7E7E7E]'>Compare</span>
                        </div>
                        <span className='tw-bg-[#3BB77E] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-text-[12px] tw-text-white '>3</span>
                      </div>
                      <Link onClick={handleClose} href='/wishlist'>
                        <div className='tw-flex tw-mb-2 tw-justify-between tw-items-center tw-px-2'>
                          <div className='tw-flex tw-items-center tw-gap-2'>
                            <span className='tw-text-3xl'>
                              <GrFavorite/>
                            </span>
                            <span className='tw-text-[#7E7E7E]'>Wishlist</span>
                          </div>
                          <span className='tw-bg-[#3BB77E] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-text-[12px] tw-text-white '>3</span>
                        </div>
                      </Link>
                      <Link onClick={handleClose} href='/cart'>
                        <div className='tw-flex tw-mb-2 tw-justify-between tw-items-center tw-px-2'>
                          <div className='tw-flex tw-items-center tw-gap-2'>
                            <span className='tw-text-3xl'>
                              <FiShoppingCart/>
                            </span>
                            <span className='tw-text-[#7E7E7E]'>Cart</span>
                          </div>
                          <span className='tw-bg-[#3BB77E] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-text-[12px] tw-text-white '>3</span>
                        </div>
                      </Link>
                      <hr/>
                      <Link href="/login">
                        <div className='tw-flex  tw-my-2 tw-justify-between tw-items-center tw-px-2'>
                          <div className='tw-flex tw-items-center tw-gap-2'>
                            <span className='tw-text-3xl'>
                              <BiLogInCircle/>
                            </span>
                            <span className='tw-text-[#7E7E7E] '>Login</span>
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Offcanvas>
            </div>
          </div>
        </div>
      </div>

      <div className='tw-border-b-[2px] tw-py-4 tw-hidden lg:tw-block '>
        <div className='px-4'>
          <div className='tw-flex tw-items-center tw-justify-between'>
            <div className='tw-bg-[#3BB77E] tw-border-none tw-rounded-[5px] tw-p-2 tw-flex tw-items-center'>
              <span className='tw-text-white'>
                <BiCategory/>
              </span>
              <select className='tw-bg-transparent tw-text-white'>
                <option>Browse All Categoties</option>
              </select>
            </div>
            <div className='tw-font-[700] tw-flex tw-gap-10 tw-items-center'>
              <span className='tw-flex tw-items-center tw-gap-1'>
                <span className="tw-text-[#3BB77E] tw-text-3xl">
                  <VscFlame/>
                </span>
                <span>Deals</span>
              </span>
              <Link href='/' className={path === '/' ? 'tw-text-[#3BB77E]' : ''}>Home</Link>
              <Link href='/pages/about' className={path === '/pages/about' ? 'tw-text-[#3BB77E]' : ''}>About</Link>
              <Link href='/pages/blog' className={path === '/pages/blog' ? 'tw-text-[#3BB77E]' : ''}>Blog</Link>
              <Link href='/pages/contact' className={path === '/pages/contact' ? 'tw-text-[#3BB77E]' : ''}>Contact</Link>
            </div>
            <div className='tw-flex tw-items-center tw-gap-2'>
              <div className='tw-text-[50px]'>
                <TfiHeadphoneAlt/>
              </div>
              <div>
                <div className='tw-text-[#3BB77E] tw-font-bold tw-text-[26px]'>
                  1900 - 888
                </div>
                <div className='tw-text-[#7E7E7E] tw-text-[12px] tw-text-center'>
                  24/7 Support Center
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar