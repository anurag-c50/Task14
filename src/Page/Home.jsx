import React from 'react'
import styled from 'styled-components'
export default function Home() {
  return (
    <Container>
      <div className="Container">
        <div className='navbar'>
           <div className="header">
            Welcome to Healthy PlanEat
          </div>
          <div className="menu">
            <div className="submenu">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Farms</a>
              <a href="">Markets and Pop-Ups</a>
              <a href="">
                <img src="data:image/png;base64,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" alt="Logo"></img>
              </a>
              <a href="">To Your Door</a>
              <a href="">Schools</a>
              <a href="">Recipes</a>
              <a href="">Sign Up /</a>
              <a href="">Sign In</a>
            </div>
            </div> 
        </div>
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
    </Container>
  )
}
const Container=styled.div`
.Container{
height: 100vh;
}
.header{
    text-align: center;
    background: #7dcf82;
    color: #fff;
    font-size: 20px;
    padding: 10px 15px;
    margin: 0;
}
.menu{
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .submenu{
    width: 73%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0;
    font-size: 20px;
    font-weight: 300;}
    a{
        color: #23a6d7;
    text-decoration: none;
    }
    a:hover{
        color: #fe9000;
    }
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
    }
`