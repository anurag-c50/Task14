import React from 'react'
import styled from 'styled-components'
export default function HomeFIfth() {
  return (
    <Container>
        <div className="Conatiner">
            <div className="Subscribe">
                <div className="headline">
                    <h2>Keep Up to Date</h2>
                    <h3>Sign up for our newsletter to discover new vendors, weekly specials, events, and seasonal recipes</h3>
                </div>
                <form >
                    <div className="twoinput">
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Zip Code"></input>
                    </div>
                    <div className="oneinput">
                        <input type="email" placeholder="Your Email"/>
                    </div>
                    <button>Subscribe</button>
                </form>
            </div>
            <div className="img">
                <img src="https://healthyplaneat.com/static/media/food-grid.a267c8aa.png" alt="" /></div>
        </div>
    </Container>
  )
}
const Container=styled.div`
.Conatiner{
height: 100vh;
    background: #23a6d7;
    display: flex;
    justify-content: center;
}
    .headline{
        padding: 0px 59px 0px 18px;
    }
        form{
        width:47vw;}
        .headline h2{
            color: white;
        }
        .headline h3{
        font-size: 20px;
    color: white
        }
      .Subscribe{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;    
    }
      .img{
    width: 50%;
      }
    .img img{    
width: 100%;
    height: 100vh;
}
    .oneinput{
        height: 5vh;
    width: 40vw;
    display: flex;
    justify-content: center;
    }
    .oneinput input{
        height: 4.5vh;
    border-radius: 5px;
    padding-left:11px;
          background: white;

    width: 40vw;
    border: none;
    margin-top: 21px;
    }
    .twoinput{
    height: 5vh;
    width: 40vw;
    display: flex;
    justify-content: space-between;
    }
    .twoinput input{
        height: 4.5vh;
    border-radius: 5px;
      background: white;
    padding-left:11px;
    width: 18vw;
    border: none;
    }
    button{
  background: #7dcf82;
    color: #fff;
    font-weight: 400;
    text-align: center;
    user-select: none;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 4px;
    width: 9vw;
    margin-top: 54px;
    padding: 9px 8px;
    }
`