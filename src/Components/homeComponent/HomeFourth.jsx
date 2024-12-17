import React from 'react'
import styled from 'styled-components'
export default function HomeFourth() {
  return (
    <Container>
      <div className="Conatiner">
        <div className="headline">
          <h2>Farmers Post For Local Customers</h2>
          <h3>Are you a Connecticut resident interested in having local food sent directly to your door? Visit <a href>To Your Door</a> to see what's available.</h3>
          <h3>If you live outside Connecticut and would like Healthy PlanEat available where you live, let us know:</h3>
        </div>
        <div className="formImg">
          <form >
            <div className="form">            <label>First Name</label>
            <input type="text" name="First_Name" placeholder="First Name"/>
            <label>Last Name</label>
            <input type="text" name="Last_Name" placeholder="Last Name" />
            <label>Email Address</label>
            <input type="text" name="email" placeholder="Email Adress" />
            <label>Zip Code</label>
            <input type="number" name="Zip_Code" placeholder="Zip Code" />
            <button>Submit</button>
            </div>

          </form>
          <div className="img">
            <img src="	https://healthyplaneat.com/static/media/farmerspostveg.3555cf2a.png"/>
          </div>
        </div>
        <div className="headline">
          <h2>Farmers Post For Local Farmers</h2>
          <h3>Are you a farmer who would like to be part of our Farmers Post pilot?</h3>
          <h3>Click <a href>Sign Up</a> to share information about your farm. We will be in touch soon if you are a good match for our next pilot program.</h3>
          <h3>Read the World Wildlife Fund report on Farmers Post <a href>here</a> .</h3>
        </div>
      </div>
    </Container>
  )
}
const Container= styled.div`
.Conatiner{
  height: 154vh;
  display: flex;
      padding-left: 168px;
    padding-right: 168px;
    flex-direction: column;
        flex-direction: column;
    padding: 36px 184px 40px 201px;
}
    .headline{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    height: 41vh;
    }
     .headline h2:after{
        margin-top: 0.3em;
    content: "";
    display: block;
    width: 114px;
    height: 5px;
    border-radius: 10px;
    background: #7dcf82;
}
    .headline h2{
    font-family: baloo, sans-serif;
    color: #47525e;
    margin-top: 0.1em;
    margin-bottom: 1.2em;
    font-size: 35px;
    width: 67vw;
    text-align: center;
    }
    .headline h3{
        margin-top: 0;
                text-align: center;

            font-size:27px;
    margin-bottom: .5em;
font-family: FuturaPT, sans-serif;
    color: #47525e;
    }
     .headline h3 a{
         color: #23a6d7;
    text-decoration: none;
     }
    .formImg{
        display: flex;
        margin-bottom: 21px;
    }
    form{
    height: auto;
    width: 36vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .form{
    width: 30vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    }
    .img{
    width: 38vw;
    }
    .img img{
height: 64vh;
    width: 38vw;
    }
    input{
    display: block;
    padding: .375rem .75rem;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: .25rem;
        margin-bottom:12px;
        }
    label{
        color: #47525e;
    margin-bottom:12px;
    }
    button{
        background: #7dcf82;
    color: #fff;
    font-weight: 400;
    text-align: center;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    border-color: #007bff;
}
  @media only screen and (max-width:1147px){
  .headline h2 {
    font-size: 1rem;
    }
    .headline h3 {
    font-size: 0.8rem;
}
}
  @media only screen and (max-width:1000px){
.Conatiner {
    padding: 36px 20px 30px 29px;
}
    .formImg{
    justify-content: center;}
}
  @media only screen and (max-width:760px){
      label {
    font-size: 0.7rem;
}

    input {
    font-size: 1rem;
}
.Conatiner {
    height: 208vh;
}
  .formImg {
    justify-content: center;
    flex-direction: column;
    align-items: center;
}}
      @media only screen and (max-width:567px){
          label {
    font-size: 0.9rem;
}

    input {
    font-size: 0.7rem;
}
   .Conatiner {
        height: 227vh;
    }
}
          @media only screen and (max-width:403px){
              label {
    font-size: 0.6rem;
}

    input {
    font-size: 0.5rem;
}
     .headline h2 {
    font-size: 0.7rem;
    }
    .headline h3 {
    font-size: 0.6rem;
    }
}

`