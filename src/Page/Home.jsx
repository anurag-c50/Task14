import React from 'react'
import styled from 'styled-components'
import HomeSecond from '../Components/homeComponent/HomeSecond'
import "../App.css"
import HomeThird from '../Components/homeComponent/HomeThird'
import HomeFourth from '../Components/homeComponent/HomeFourth'
import HomeFIfth from '../Components/homeComponent/HomeFIfth'
import HomeSixth from '../Components/homeComponent/HomeSixth'
export default function Home() {
  return (
    <Container>
      <div className="Container">
        <div className="Home">
          <div className="homeimg">
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
      <HomeSecond/>
      <HomeThird/>
      <HomeFourth/>
      <HomeFIfth/>
      <HomeSixth/>
    </Container>
  )
}
const Container=styled.div`
    .homeimg{
  background-image: url("https://healthyplaneat.com/static/media/banner5.786c21f3.jpg");
      min-height: 90vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    }
  .TaglineContainer{
    height: 55vh;
    width: 73vw;
        position: relative;

  }
    .Signbutton{
    position: absolute;
    top: 100px;
    right: 50px;
    z-index: 10;
    }
    .Signbutton img{
        max-width: 300px;
    height: auto;
    border-radius: 10px;
    }
    .Tag1{
    font-weight: 400;
        line-height: 1.2;
        text-shadow: 0 0 .7em #000;
            margin: 0;
    font-size: 90px;
        color: #fff;

    }
        .Tag2{
           font-weight: 400;
        line-height: 1.2;
        text-shadow: 0 0 .7em #000;
            margin: 0;
    font-size: 30px;
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
    font-size: 40px;
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
            font-size: 27px;
    padding: .5rem 1rem;
    line-height: 1.5;
    border-radius: .3rem;
        text-decoration: none;
    }
`