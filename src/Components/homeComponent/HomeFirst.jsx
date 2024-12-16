import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeFirst() {
  const [slider,setSlider]=useState([
    {
      img:"https://healthyplaneat.com/static/media/banner5.786c21f3.jpg"
    },
    {
      img:"https://healthyplaneat.com/static/media/banner1.9826ecb0.jpg"
    },
    {
      img:"https://healthyplaneat.com/static/media/banner3.faa977b3.jpg"
    },
    {
      img:"https://healthyplaneat.com/static/media/banner4.640c72b0.jpg"
    },
    {
      img:"https://healthyplaneat.com/static/media/banner7.3cc209cb.jpg"
    }
  ])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
    <div className="Container">
      <div className="Home">
        <div className="homeimg">
          {/* <Slider {...settings}> */}
          {/* {slider.map((slide)=>{ */}
            {/* return(<> */}
            <img className='Banner' src="https://healthyplaneat.com/static/media/banner7.3cc209cb.jpg" alt="" />
            {/* </>)})} */}
            {/* </Slider> */}
          <div className="TaglineContainer">
          <div className="Signbutton">
            <a href="">
              <img src="https://healthyplaneat.com/static/media/farmerspost.6fb6e0fa.PNG"  />
            </a>
          </div>
          <div className="Subtag">
          <h1 className="Tag1">Healthy PlanEat</h1>   
          <h2 className="Tag2">Food For You and the Planet</h2>           
          </div>
          <div className="paragraph">
          <h3>An online marketplace with fresh food from local sustainable farms and food artisans</h3>
          </div>
          <div class="btndiv"><a href="" className="btn">Order Now</a></div>
          </div>
                  </div>

      </div>
    </div>
    </Container>
  )
}
const Container=styled.div`
    .homeimg{
    display: flex;
    justify-content: center;
    align-items: center;
    }
  .Banner{
    height: 101vh;
    width: 100vw;
    display: block;
    filter:brightness(0.8);
    object-fit: cover;
}
  .TaglineContainer{
    height: 55vh;
    width: 73vw;
    position: absolute;
  }
    .Signbutton{
    position: absolute;
    top: 143px;
    right: 50px;
    z-index: 10;
    }
    .Signbutton img{
        max-width: 19.5vw;
    height: auto;
    border-radius: 10px;
    }
    .Tag1{
    font-weight: 400;
        line-height: 1.2;
        text-shadow: 0 0 .7em #000;
            margin: 0;
    font-size: 4.5rem;
        color: #fff;

    }
        .Tag2{
           font-weight: 400;
        line-height: 1.2;
        text-shadow: 0 0 .7em #000;
            margin: 0;
    font-size: 1.5rem;
        color: #fff;
        }
        .Tag2:after{
            margin-top: 0.3em;
    content: "";
    display: block;
    width: 100px;
    height: 5px;
    border-radius: 10px;
    background: #7dcf82;
        }
    .paragraph{
    font-size: 2rem;
    line-height: 1.1;
    color: #fff;
    text-shadow: 0 0 .7em #000;
    position: relative;
    top: 23px;
    }
    .btndiv{
        text-align: center;
    }
    .btn{
        background: #fe9000;
    color: #fff;
        cursor: pointer;
            font-size: 1.3rem;
    padding: .5rem 1rem;
    line-height: 1.5;
    border-radius: .3rem;
        text-decoration: none;
    }
        .btn:hover{
        background:#e58200;
        }
            @media only screen and (max-width:1100px){
  .paragraph{
    font-size: 1rem;
    }
       .btndiv {
    margin-top: 63px;
    }

    .Signbutton img {
    max-width: 22.5vw;
    }
    }
  @media only screen and (max-width:950px){
  .Signbutton {
    top: 77px;
    }
    .Signbutton img {
    max-width: 24.5vw;
}
    }
  @media only screen and (max-width:852px){
  .Tag1{
  font-size: 2.5rem;
  }
  .Tag2 {
    font-size: 0.9rem;
    }
`