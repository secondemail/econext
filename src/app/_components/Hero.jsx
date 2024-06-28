"use client"
import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import banner from '../../../public/Tabpanel.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <Container className='tw-pt-10'>
      <Carousel>
        <Carousel.Item className='tw-h-[200px] lg:tw-h-auto'>
          <Image src={banner} className='tw-h-[200px] lg:tw-h-auto tw-w-auto' alt='banner' height={500}/>
        </Carousel.Item>
        <Carousel.Item className='tw-h-[200px]'>
          <Image src={banner} className='tw-h-[200px] lg:tw-h-auto tw-w-auto' alt='banner' height={500}/>
        </Carousel.Item>
        <Carousel.Item className='tw-h-[200px]'>
          <Image src={banner} className='tw-h-[200px] lg:tw-h-auto tw-w-auto' alt='banner' height={500}/>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Hero
