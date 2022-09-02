import React from 'react'
import Navigation from '../component/Navigation'
import "../container/Details.css"
// import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";


function Details() {

  // const [count, setCount] = useState(0);

  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  // const reset = () => setCount(0);

  return (
    <>
      <Navigation />

      <h2 className="detail-brand-name">
        DREAM OF STYLE
      </h2>


      <div className="details-bg">
        <div className="details-full">
          <section className="my-4 mx-5 cl">
            <div className="container details-container " >
              <div className="row details-row ">
                <div className="col-lg-5">
                  <img src="./image/card/card2.jpg.webp" class="details-image" alt="..." />

                </div>
                <div className="col-lg-7 details-form">
                  <h2 className='detail-dress-name'>BLACK COLD SHOULDER BLAZER DRESS</h2>
                  <h1 className='detail-rate'>Rs. 7,495.00</h1>
                  <p className='detail-para-tag'>Tax included. Shipping calculated at checkout.</p>
                  <div>
                    <p className='detail-size'>Size</p>
                    <div>
                      <div >
                        <button className='detail-size-botton'>XS</button>{" "}
                        <button className='detail-size-botton'>X</button>{" "}
                        <button className='detail-size-botton'>M</button>{" "}
                        <button className='detail-size-botton'>L</button>{" "}
                        <button className='detail-size-botton'>XL</button>{" "}
                      </div>
                      <p className='detail-size'>QUANTITY</p>

                      {/* <div>

                        <button onClick={increment}>+</button>{" "}
                        <button onClick={reset}>0</button>
                        <button onClick={decrement}>-</button>{" "}
                        
                      </div> */}

                      <p className='detail-size'>Size Chart</p>

                      <button className='detail-addcart-desing'>ADD TO CART</button>
                      <br />
                     <Link to="/Shiping"> <button className='detail-buycard-desing'>BUY IT NOW</button></Link>

                      <p className='detail-para-tag'>This Under the radar standout piece with edgy belt detail
                        on the shoulders. The outfit you wear when you know
                        you want to be in the spotlight.</p>

                      <li className='detail-para-tag-sdark'>Crepe and Georgette</li>
                      <li className='detail-para-tag-sdark'>Dry Clean</li>
                      <li className='detail-para-tag-sdark'>Side Pockets</li>
                      <li className='detail-para-tag-sdark'>Fabric does not provide stretch</li>
                      <li className='detail-para-tag-sdark'>33.5" garment length</li>


                    </div>
                  </div>


                </div>

              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='detail-uper-footer'>
        <img src="https://img.rawpixel.com/private/static/images/website/2022-05/upwk61843118-wikimedia-image-kowc5fl7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=fa1fe774ca2208773517b43dfd2b4f46" class="detail-foot-backimg" alt="..." />
      </div>
      <div>
        <div className='container detail-imge-upcard'>
          <div className='row'>
            <div className='col-sm-4'>
              <div class="card detail-learn-container">
                <div class="card-body detail-learn-bod">
                  <p >WHY CHOOSE US?</p>
                  <h1 className='details-card-tit'>MORE POWER TO YOU</h1>
                  <p class="detail-para-tag">We are the first of its kind Made-to-Order, Ready-to-Wear Brand. No body is one perfect standard size ; and we make clothes to fit your unique body type!</p>
                  <Link to="#" class="btn  btn-dark detail-learn-button">LEAN MORE</Link>
                </div>
              </div>


            </div>

          </div>

        </div>
      </div>
      <Link to="/Home" class="btn  btn-dark detail-learn-button2">BACK TO HOME</Link>
      <div className='detail-footer'>
        <Footer />
      </div>

    </>
  )
}
export default Details
