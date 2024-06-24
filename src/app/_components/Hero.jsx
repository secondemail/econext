"use client"
import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import banner from '../../../public/Tabpanel.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <Container className='tw-py-10'>
      <Carousel>
        <Carousel.Item className=' tw-relative'>
          <Image src={banner} alt='banner' height={500}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={banner} alt='banner' height={500}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={banner} alt='banner' height={500}/>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Hero
