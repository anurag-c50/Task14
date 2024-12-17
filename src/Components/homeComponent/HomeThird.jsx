import React from 'react'
import styled from 'styled-components'

export default function HomeThird() {
    const Card=[{
        id:1,
        img:"https://healtyplanet.nyc3.digitaloceanspaces.com/marketIcon_1700226479419_Mystic_Icon-removebg-preview.png",
        imgHeadline:"Mystic CT Pick Up",
        imgparagraph:"The Ditty Bag",
        headline1: 'ORDER WINDOW',
        Timing1:"Sunday 5 am - Thursdays 9 pm",
        headline2: 'Pick UP',
        Timing2:"Saturdays 11 am - 4 pm",
        colour:"rgb(203, 107, 230)"
    },{
        id:2,
        img:"https://healtyplanet.nyc3.digitaloceanspaces.com/marketIcon_1700226543895_EL_Regular-removebg-preview%20copy.png",
        imgHeadline:"East Lyme CT Pick Up",
        imgparagraph:"Niantic Green (Liberty Green)",
        headline1: 'ORDER WINDOW',
        Timing1:"Sunday 5 am - Thursdays 9 pm",
        headline2: 'Pick UP',
        Timing2:"Saturdays 10 am - 11 am",
        colour:"rgb(242, 121, 128"
    },{
        id:3,
        img:"https://healtyplanet.nyc3.digitaloceanspaces.com/marketIcon_1700226519472_Middletown_Icon-removebg-preview.png",
        imgHeadline:"Middletown CT Pick Upp",
        imgparagraph:"Rockfall Foundation",
        headline1: 'ORDER WINDOW',
        Timing1:"Sunday 5 am - Thursdays 9 pm",
        headline2: 'Pick UP',
        Timing2:"Saturdays 1 pm - 2 pm",
        colour:"rgb(255, 145, 77)"
    
    }]
  return (
    <Container>
        <div className="Container">
            <div className="Headline">
                <h2>
                Order for Pickup, Delivery,<br />
                or Sustainable Shipping
                </h2>
            </div>
            <div className="Content">
                <div className="LoctaionButton">
                    <div className="buttons">
                    <button  id='button1'>Pick Up</button>
                    <button className='button'>Delivery</button>
                    <button className='button'>Shipping</button>
                    </div>
                    <div className="fillter">
                        <h3>All Pick Up Locations</h3>
                    </div>
                </div>
                <div className="info">
                    <h2>Pick Ups offer products from multiple farms, all picked up at a single location.
                    </h2>
                    <button>X</button>
                </div>
                <div className="cards">
                    {Card.map((card)=>{
                        return(
                    <div key={card.id} className="card">
                        <div style={{backgroundColor: card.colour,}} className="img">
                            <img src={card.img} alt="" />
                            <div className="imageheadline">
                            <h2>{card.imgHeadline}</h2>
                            <h3>{card.imgparagraph}</h3>
                            </div>
                        </div>
                        <div className="content">
                            <h4 className="cardinfo">
                                <span className='headline'>{card.headline1}</span>
                                <span className='timing'>{card.Timing1}</span>
                            </h4>
                            <h4 className="cardinfo">
                            <span className='headline'>{card.headline2}</span>
                            <span className='timing'>{card.Timing2}</span>
                            </h4>
                        </div>
                        <div className="orderbutton">
                        <button>Order Now</button>
                        </div>
                    </div>)
                    })}
                </div>
            </div>
        </div>
           </Container>
  )
}
const Container=styled.div`
.Container{
  height: 116vh;
  display: flex;
      padding-left: 168px;
    padding-right: 168px;
    flex-direction: column;

}
.Headline h2{
    margin-bottom: 0.9em;
    font-size: 1.5rem;
    font-family: baloo, sans-serif;
    color: #47525e;
}
    .Headline h2:after{
        margin-top: 0.3em;
    content: "";
    display: block;
    width: 114px;
    height: 5px;
    border-radius: 10px;
    background: #7dcf82;
    }
    .LoctaionButton{
    display: flex;
    justify-content: space-between;
    align-items: center;}
    #button1{
        background: #8ec788;
    color: #fff;
    border: 1px solid #e5e2d6;
    box-shadow: 0 0 4px #e5e2d6;
    border-radius: 6px 0 0 6px;
    margin-left: 0;
        height: 40px;
    padding: 4px 25px;
    font-size: 0.9rem;
}
    .fillter{
    font-size: 0.8rem;
    border-radius: 4px;
    color: #49525d;
    }
    .button{
    height: 40px;
    background: #fcfaf4;
    border: 1px solid #e5e2d6;
    padding: 4px 25px;
    color: #898e96;
    font-size: 19px;
    margin-left: -1px;
    }
    .button:hover{
        cursor: pointer;
    }
    #button1:hover{
            cursor: pointer;
    }
            .info{
background: #a3dbf0;
    border: 2px solid #77cae9;
    height: auto;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 11px;
    padding-right: 11px;
        flex-direction: row;
    color: #0c5460;}
    .info h2{
    margin: 0;
    font-size: 0.65rem;
    }
    .info button{
        font-size: 11px;
    border: none;
    line-height: 1.1;
    cursor: pointer;
    color: inherit;
    background: #a3dbf0;
    }
       .info button:hover{
       font-size: 13px;
    color: black;
    }
    .cards{
    height: 56vh;
    margin-top: 58px;
    display: flex;
    justify-content: space-between;
    
}
    .card{
  width: 23vw;
      border: 1px solid #e5e2d6;
    border-radius: 6px;
    box-shadow: 0 0 3px 0 #e5e2d6;
    height: 100%;
    transition: box-shadow .2s;
    background-size: cover;
      position: relative;
}

  .img{
    height: 31vh;
    border-radius: 6px 6px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
    .img img{
    height: 15vh;
    }
    .content{
    height: 12vw;
    padding: 0px 0px 0px 10px;
    height: 12vw;
}
    .orderbutton{
        position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    }
    .imageheadline h2
    {
        font-size: 25px;
    color: white;
    margin: 0;
    }
    .imageheadline h3{
    font-size: 17px;
    color: white;
    margin: 0;
    text-align: center;
    }
    .cardinfo .headline{
    display: block;
    font-weight: 500;
    font-size: 14px;
    color: #898e96;
    margin-bottom: .4em;
    }
    .cardinfo .timing{
        display: block;
    font-weight: 500;
    font-size: 14px;
color: #2f3237;    
    margin-bottom: .4em;
    }
    .orderbutton button{
    border: none;
    background: #23a6d7;
    color: #fff;
     font-size: 0.8rem;
    border-radius: 3px;
    height: 6vh;
    width: 10vw;
    }
    .button:hover{
    background: #f5f3ee;
    }
         @media only screen and (max-width:1159px){
    .Headline h2 {
    font-size: 1.2rem;}
    #button1 {
    font-size: 0.7rem;
}
    .fillter {
    font-size: 0.7rem;
}
.info h2 {
    font-size: 0.6rem;
}
             .imageheadline h2 {
    font-size: .9rem;
    text-align: center;
}
    .imageheadline h3 {
    font-size: 0.6rem;
    text-align: center;
}
.orderbutton button {
    font-size: 0.8rem;
}
    .lnKNqG .card{
    margin: 0px 7px;
}
}

    @media only screen and (max-width:990px){
    .LoctaionButton {
    justify-content: flex-start;
    flex-direction: column;
    align-items:normal;
}
}
    @media only screen and (max-width:681px){
    .Container {
    padding-left: 100px;
    padding-right: 57px;
    }
}
        @media only screen and (max-width:499px){

            .Container {
      height: 138vh;
    }
              @media only screen and (max-width:374px){
            .Container {
      height: 152vh;
    }
}
}

`