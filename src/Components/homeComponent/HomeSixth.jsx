import React from 'react'
import styled from 'styled-components'
export default function HomeSixth() {
  return (
    <Container>
        <div className="Conatiner">
            <div className="img">
                <img src="https://healthyplaneat.com/static/media/sign-up-today.1044712d.png" />
            </div>
            <div className="content">
                <h2>
                Register Today</h2>
                <h3>Signing up is free for everyone,<br /> and takes less than a minute</h3>
                <button>Sign Up</button>
            </div>
        </div>
    </Container>
  )
}
const Container=styled.div`
.Conatiner{
height: 100vh;
    display: flex;
    justify-content: center;
}
      .img{
    width: 50%;
      }
    .img img{    
width: 100%;
    height: 100vh;
}
    .content{
    width: 45.5%;
        padding-left: 67px;
    display: flex
;
    justify-content: center;
    flex-direction: column;}
    .content h2{
    margin-bottom: 1.2em;
    font-size: 35px;
    margin-top:0;
    font-family: baloo, sans-serif;
    color: #47525e;}
    .content h3{
    margin-bottom: 1.2em;
    font-size: 30px;
    margin-top:0;
        font-weight: 400;
    font-family: baloo, sans-serif;
    color: #47525e;}
    button{
border-color: #23a6d7;
    background: #23a6d7;
    color: #fff;
    font-size: 19px;
    font-weight: 300;
    text-transform: capitalize;
    padding: 10px 30px;
    border: none;
    width: 9vw;
    border-radius: 7px;
    }
    button:hover{
        background: #0890c3;
    cursor: pointer;
    }
`