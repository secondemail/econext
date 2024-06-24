import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa'
import prodimg from '../../../../public/product-1-1.jpg.png'
import prodimg2 from '../../../../public/cat-2.png.png'
import Image from 'next/image'
import { FaCartPlus, FaShuffle, FaStar } from 'react-icons/fa6'
import { GrFavorite } from "react-icons/gr";
import Link from 'next/link'
const Product = () => {
  const list =[1,2,3]
  return (
    <div>
      <div className="tw-flex tw-items-center tw-gap-3 tw-border-b-[2px] tw-py-3 tw-pl-7 tw-line-clamp-1">
        <span className="tw-flex tw-items-center tw-gap-2 tw-text-[#3BB77E]">
          <FaHome/>
          Home
        </span>
        <span>
          |
        </span>
        <span className="tw-flex tw-items-center tw-gap-2 tw-text-[#3BB77E] tw-line-clamp-1 ">
          Vegetables & tubers 
        </span>
        <span>
          |
        </span>
        <span className="tw-flex tw-items-center tw-gap-2 tw-line-clamp-1 ">
          Seeds of Change Organic
        </span>
      </div>
      <Container>
        <Row className='tw-py-10'>
          <Col lg="6">
            <div>
              <div className="tw-border-2 tw-rounded-lg tw-flex tw-justify-center">
                <Image src={prodimg} alt='prodimg' width={400}/>
              </div>
              <div className="tw-flex tw-gap-4 tw-my-3">
                <div className="tw-bg-[#f7f8fa] tw-rounded-lg tw-border-2 tw-border-[#A2D2C9] ">
                  <Image src={prodimg2} alt='prodimg' width={100}/>
                </div>
                <div className="tw-bg-[#f7f8fa] tw-rounded-lg ">
                  <Image src={prodimg2} alt='prodimg' width={100}/>
                </div>
                <div className="tw-bg-[#f7f8fa] tw-rounded-lg ">
                  <Image src={prodimg2} alt='prodimg' width={100}/>
                </div>
                <div className="tw-bg-[#f7f8fa] tw-rounded-lg ">
                  <Image src={prodimg2} alt='prodimg' width={100}/>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div>
              <span className='tw-text-[#F74B81] tw-bg-[#FDE0E9] tw-text-center tw-rounded-lg tw-p-2 tw-text-[13px] tw-font-[600]'>Sale Off</span>
              <h1 className='tw-text-[35px] tw-font-[600] tw-my-3'>Seeds of Change Organic Quinoa, Brown</h1>
              <div className="tw-text-[#B6B6B6] tw-flex tw-gap-1 tw-items-center">
                <span className='tw-text-[#FDC040]'><FaStar/></span>
                <span>(32 reviews)</span>
              </div>
              <div className="tw-flex tw-gap-2 tw-items-center tw-mb-3">
                <div className="tw-text-[40px] tw-font-[600] tw-text-[#3BB77E]">$38</div>
                <div className="tw-flex tw-flex-col">
                  <span className="tw-text-[#FDC040] tw-text-[12px]">26% Off</span>
                  <span className="tw-line-through tw-text-[20px] tw-text-[#B6B6B6]">$52</span>
                </div>
              </div>
              <p className="tw-text-[#7E7E7E] tw-mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
                odio minus dolore impedit fuga eum eligendi.
              </p>
              <div className='tw-text-[#7E7E7E] tw-mb-3 tw-flex tw-gap-2 tw-items-center'>
                <span>Size / Weight:</span>
                <span>50g</span>
                <span className="tw-bg-[#3BB77E] tw-rounded-lg tw-text-center tw-px-2  tw-text-white">70g</span>
                <span>100g</span>
                <span>150g</span>
              </div>
              <div className='tw-flex tw-gap-4 tw-items-center tw-mb-3'>
                <div className='tw-border-2 tw-p-2 tw-w-[80px] tw-border-[#3BB77E] tw-text-[#3BB77E] tw-rounded-lg'>
                  <input className='focus:tw-outline-none tw-w-full' min={1} value={1} type='number' />
                </div>
                <div className='tw-flex tw-gap-2 tw-text-lg tw-w-[180px] tw-h-[40px] tw-justify-center tw-items-center tw-text-white tw-text-[14px] tw-rounded-md tw-bg-[#3BB77E]'>
                  <FaCartPlus/>
                  Add To Cart
                </div>
                <div className='tw-border-2 tw-rounded-md tw-flex tw-justify-center tw-p-2'>
                  <GrFavorite/>
                </div>
                <div className='tw-border-2 tw-rounded-md tw-flex tw-justify-center tw-p-2'>
                  <FaShuffle/>
                </div>
              </div>
              <div className='tw-flex tw-gap-10 tw-pt-7'>
                <div>
                  <div>
                    <span className="tw-text-[#7E7E7E]">Type: </span>
                    <span className='tw-text-[#3BB77E]'>Organic</span>
                  </div>
                  <div>
                    <span className="tw-text-[#7E7E7E]">MFG: </span>
                    <span className='tw-text-[#3BB77E]'>Jun 4.2022</span>
                  </div>
                  <div>
                    <span className="tw-text-[#7E7E7E]">LIFE: </span>
                    <span className='tw-text-[#3BB77E]'>70 days</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span className="tw-text-[#7E7E7E]">SKU: </span>
                    <span className='tw-text-[#3BB77E]'>FWM15VKT</span>
                  </div>
                  <div>
                    <span className="tw-text-[#7E7E7E]">Tags: </span>
                    <span className='tw-text-[#3BB77E]'>Snack, Organic, Brown</span>
                  </div>
                  <div>
                    <span className="tw-text-[#7E7E7E]">Stock: </span>
                    <span className='tw-text-[#3BB77E]'>8 Items In Stock</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='tw-py-10'>
          <div className='tw-border-2 tw-rounded-lg tw-p-10'>
            <div className='tw-flex tw-items-center tw-gap-3 tw-font-[600]'>
              <div className='tw-text-[#3BB77E] tw-text-center tw-rounded-full tw-p-2 tw-border-2'>Description</div>
              <div className='tw-text-[#7E7E7E] tw-text-center tw-rounded-full tw-p-2 tw-border-2'>Additional info</div>
              <div className='tw-text-[#7E7E7E] tw-text-center tw-rounded-full tw-p-2 tw-border-2'>Reviews (3)</div>
            </div>
            <div className='tw-text-[#7E7E7E] tw-py-5'>
              <p>
                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced
                goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
              </p>
              <p>
                Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and
                wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch
                mastodon goodness gnashed a jellyfish and one however because.
              </p>
            </div>
            <div className='tw-text-[#7E7E7E] tw-mb-3'>
              <ul className="tw-list-disc">
                <li>
                  Type Of Packing : Bottle
                </li>
                <li>Color : Green, Pink, Powder Blue, Purple </li>
                <li>Quantity Per Case : 100ml </li>
                <li>Ethyl Alcohol : No </li>
                <li>Piece In One : Carton</li>
              </ul>
            </div>
            <div className='tw-text-[#7E7E7E] tw-border-y-2 tw-py-4'>
              <p>
                Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
                minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
                raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective
                limpet.
              </p>
              <p className='tw-text-[#253d4e] tw-font-[600] tw-text-[24px] tw-mt-4'>Packaging & Delivery</p>
            </div>
            <p className='tw-text-[#7E7E7E] tw-mt-4'>
              Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one
              assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much
              held one exuberantly sheep goodness so where rat wry well concomitantly.
            </p>
            <p className='tw-text-[#7E7E7E]'>
              Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and
              next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less
              across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.
            </p>
            <div className='tw-mt-4 '>
              <p className='tw-font-[600] tw-text-[24px]'>Suggested Use</p>
              <div className='tw-text-[#7E7E7E] tw-pl-5 tw-mt-2'>
                <p>Refrigeration not necessary.</p>
                <p>Stir before serving</p>
              </div>
            </div>
            <div className='tw-mt-4 '>
              <p className='tw-font-[600] tw-text-[24px]'>Other Ingredients</p>
              <div className='tw-text-[#7E7E7E] tw-pl-5 tw-mt-2'>
                <p>Organic raw pecans, organic raw cashews.</p>
                <p>This butter was produced using a LTG (Low Temperature Grinding) process</p>
                <p>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
              </div>
            </div>
            <div className='tw-mt-4 '>
              <p className='tw-font-[600] tw-text-[24px]'>Warnings</p>
              <div className='tw-text-[#7E7E7E] tw-pl-5 tw-mt-2'>
                <p>Oil separation occurs naturally. May contain pieces of shell.</p>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <p className='tw-font-[600] tw-text-[24px] tw-py-7 tw-underline'>Related products</p>
          {
            list.map(i=>(
              <Col key={i} className='tw-mb-5' lg="3">
              <Link href='/products/1'>
                <div className='tw-border-[2px] tw-relative tw-rounded-[15px] tw-border-[#ECECEC]'>
                  <span className='tw-bg-[#F74B81] tw-absolute tw-top-[-2px] tw-left-[-1px] tw-text-white tw-p-2 tw-text-center tw-rounded-tl-[15px] tw-rounded-br-[20px]'>Hot</span>
                  <div className='tw-flex tw-justify-center'>
                    <Image src={prodimg} alt='productimg' width={170}/>
                  </div>
                  <div className='tw-p-5'>
                    <span className='tw-text-[#ADADAD] tw-text-[12px]'>Snack</span>
                    <h1 className='tw-text-[#253D4E] tw-text-[16px]'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <span className='tw-flex tw-items-center tw-gap-2'>
                      <FaStar className='tw-text-yellow-500'/>
                      <span className='tw-text-[#B6B6B6] tw-text-[14px]'>(4.0)</span>
                    </span>
                    <div>
                      <span className='tw-text-[#B6B6B6] tw-text-[14px]'>By:</span>
                      <span className='tw-text-[#3BB77E] tw-text-[14px]'>NestFood</span>
                    </div>
                    <div className='tw-flex tw-justify-between tw-items-center'>
                      <div className='tw-flex tw-gap-2 tw-items-end'>
                        <span className='tw-text-[#3BB77E] tw-text-[18px]'>$28.85</span>
                        <span className='tw-text-[#ADADAD] tw-text-[14px] tw-line-through'>$32.8</span>
                      </div>
                      <div>
                        <div className='tw-flex tw-gap-2 tw-justify-center tw-items-center tw-text-[#3BB77E] tw-text-[14px] tw-px-3 tw-py-2 tw-rounded-[4px] tw-bg-[#DEF9EC]'>
                          <FaCartPlus/>
                          Add
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              </Col>
            ))
          }
      </Row>
      </Container>
    </div>
  )
}

export default Product
