import React from 'react'
// import image1 from "./images/image1.avif"
import{Container,Row,Col} from 'react-bootstrap';
import './Styles/home.css';
import { FaArrowRightLong } from "react-icons/fa6";
// import {
//     MinusOutlined,
//     PlusOutlined,
//   } from "@ant-design/icons";
  import { Collapse } from "antd";
  import { FaStarOfLife } from "react-icons/fa6";
  // import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Home =()=>{
   
    return (
        <>
        <Container fluid className='one'>
            <Row>
                <Col lg={6} className='mt-5'>
                <h2 className='mt-5 ms-5'>Modern Interior Design Studio</h2>
                <p className='ms-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                
                <button className='ms-5 mx-60'>Shop Now</button> <span className='ms-5 yie px-4 py-2'>Explore</span>
              </Col>
              <Col lg={6}>
              <img src='https://themewagon.github.io/furni/images/couch.png' style={{width:"100%"}}/>
              </Col>
            </Row>
        </Container>
        <Container>
           <Row>
            <Col lg={3}>
            <h3 className='mt-5 '>Crafted with excellent material.</h3>
            <p className='mt-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <button className='mt-4  px-4 exp'>Explore</button>
            </Col>
            <Col lg={3}>
            <img src="https://themewagon.github.io/furni/images/product-1.png"style={{width:"100%"}} alt="" />
            <p className='mt-2 ms-5'>Nordic Chair</p>
            <p className='mt-2 ms-5'>$50.00</p>
            </Col>
            <Col lg={3}>
            <img src="https://themewagon.github.io/furni/images/product-2.png" style={{width:"100%"}}alt="" />
            <p className='mt-2 ms-5'>KruzoAaero Chair</p>
            <p className='mt-2 ms-5'>$78.00</p>
            </Col>
            <Col lg={3}>
            <img src="https://themewagon.github.io/furni/images/product-3.png" style={{width:"100%"}}alt="" />
            <p className='mt-2 ms-5'>KruzoAaero Chair</p>
            <p className='mt-2 ms-5'>$78.00</p>
            </Col>
           </Row>
        </Container>
        <Container className='ele'>
            <Row>
              <Col lg={6}>
              <h3 className='mt-5'>Why Choose Us</h3>
              <p className='mt-2'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.

Image</p>
<Row>
  <Col lg={6} mt-4>
<img src="https://themewagon.github.io/furni/images/truck.svg " alt="" />
<h6 className='mt-2'>Fast & Free Shipping</h6>
<p className='mt-2'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate</p>
</Col>
<Col lg={6} mt-4>
<img src="https://themewagon.github.io/furni/images/bag.svg" alt="" />
<h6 className='mt-2'>Easy to Shop</h6>
<p className='mt-2'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

</Col>
</Row>
<Row>
  <Col lg={6}  className='mt-4'>
  <img src="https://themewagon.github.io/furni/images/support.svg" alt="" />
  <h6>24/7 Support</h6>
  <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
  </Col>
  <Col lg={6} className='mt-4'>
  <img src="https://themewagon.github.io/furni/images/return.svg" alt="" />
  <h6>Hassle Free Returns</h6>
  <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
  </Col>
</Row>
             
              </Col>
              <Col lg={6}>
              <img src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg" alt="" style={{width:"90%",height:"90%"}} className='mt-5 ms-4'/>
              </Col>
            </Row>
        </Container>
        <Container>
         <Row className='layout'>
            <Col lg={4}className=''>
            <img src="https://themewagon.github.io/furni/images/img-grid-1.jpg" alt="" style={{width:"100%"}}/>
            
            </Col>
            <Col lg={3}>
            <img src="https://themewagon.github.io/furni/images/img-grid-2.jpg" alt="" style={{width:"60%"}} />
            <img src="https://themewagon.github.io/furni/images/img-grid-3.jpg" style={{width:"60%",height:"50%"}} alt="" className='' />
            </Col>
            <Col lg={5} className='mt-6'>
            <h3 className='mt-5 '>We Help You Make Modern Interior Design</h3>
            <p className='mt-5 '>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
            <Row>
              <Col lg={6}>
              <FaStarOfLife /> <span>Donec vitae odio quis nisl dapibus malesuada</span>
              </Col>
              <Col>
              <FaStarOfLife /> <span>Donec vitae odio quis nisl dapibus malesuada</span>
              </Col>

            </Row>
            <Row>
              <Col lg={6} className='mt-3'>
              <FaStarOfLife /> <span >Donec vitae odio quis nisl dapibus malesuada</span>
        
              </Col>
              <Col lg={6} className='mt-3'>
              <FaStarOfLife />  <span>Donec vitae odio quis nisl dapibus malesu</span>
              </Col>
              </Row>
           <button className='mt-4 px-4 py-2 '>Explore</button>
            </Col>
          </Row>
          </Container>
          <Container className='mt-5'>
            <Row className='edit'>
                <Col lg={2}>
               <img src="https://themewagon.github.io/furni/images/product-1.png"style={{width:"100%"}} alt="" />
               
                </Col>
                <Col lg={2}>
                <h6>Nordic Chair</h6>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <button>Read More</button>
                </Col>
                <Col lg={2}>
                <img src="https://themewagon.github.io/furni/images/product-2.png"style={{width:"100%"}}  alt="" />

                </Col>
                <Col lg={2}>
                <h6>Kruzo Aero Chair</h6>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <button>Read More</button>
                </Col>
                <Col lg={2}>
                <img src="https://themewagon.github.io/furni/images/product-3.png" style={{width:"100%"}}  alt="" />
                </Col>
                <Col lg={2}>
                <h6>Ergonomic Chair</h6>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <button>Read More</button>
                </Col>
            </Row>
          </Container>

                  <Container>
            <Row className='promote mt-5'>
                <Col lg={12} className='mt-5'>
                <h2 className='text-center'>Testimonials</h2>
                
                </Col>
            </Row>
          </Container>
          {/* <Container>
          <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Container> */}
          
          <Container>
            <Row className='reach text-center'>
                <Col lg={6}>
               <h2 className='mt-5'>Recent Blog</h2>
                </Col>
                <Col lg={6}>
                <h6 className='mt-5'>View all post</h6>
                </Col>
            </Row>
          </Container>

          
        </>
        
    )
}

export default Home