import React from 'react'
import styled from 'styled-components'
export default function SignupPop({NavmenuOtpion,setNavmenuOtpion}) {
    const  signupFields = [
        {
          id: 1,
          type: 'text',
          name: 'First Name',
          placeholder:"First Name",
          classname:"Signupinput"
        },
        {
          id: 2,
          type: 'text',
          name: 'First Name',
          placeholder:"First Name",
          classname:"Signupinput"
        },     
        {
            id: 2,
            type: 'text',
            name: 'Last Name',
            placeholder:"Last Name",
            classname:"Signupinput"
        },
        {
            id: 3,
          type: 'email',
          name: 'Email Address',
          placeholder:"Email Address",
          classname:"Signupinput"
        },
        {
          id: 4,
          type: 'Select User Type',
          name: 'SelectUserType Name',
          placeholder:"Select User Type",
          classname:"Signupinput"
        },
        {      id: 5,
            type: 'password',
            name: 'Password',
            placeholder:"Password",
          classname:"Signupinput"
        },
        {  id: 6,
            type: 'password',
            name: 'CPassword',
            placeholder:"ConfirmPassword",
          classname:"Signupinput"},
          {      id: 7,
            type: 'text',
            name: 'Adressfirst',
            placeholder:"Enter Adresss Line 1...",
          classname:"Signupinput"
        },
        {      id: 8,
            type: 'text',
            name: 'Adressfirst',
            placeholder:"Enter Adresss Line 2...",
          classname:"Signupinput"
        },
        {      id: 9,
            type: 'text',
            name: 'Adressfirst',
            placeholder:"Enter Adresss Line 2...",
          classname:"Signupinput",
          
        },
        {      id: 10,
            type: 'text',
            name: 'State',
            placeholder:"Enter City.",
          classname:"Signupinput",
          
        },
        {      id: 10,
            type: 'text',
            name: 'City',
            placeholder:"Enter Zip Code...",
          classname:"Signupinput",
          
        },
      ];
   const DeactiveSignupPop=(e)=>{
    e.preventDefault()
    console.log(3)
    setNavmenuOtpion({ ...NavmenuOtpion, SignupPop: false });
   }
  return (
    <>
    <Container>
        <div className="Signup">
            <div className="img">
                <div className="tag">
                    <h2>Create Account</h2>
                </div>
                <img src="https://healthyplaneat.com/static/media/providerfarm.5a403c07.png" />
            </div>
            <div className="signupform">
            <button className="colsedebutton" onClick={(e)=>{DeactiveSignupPop(e)}}>
                <span>X</span>
            </button>
                <form action="">
                    <div className="Headline">
                        <h2>Sign Up</h2>
                    </div>
                    {signupFields.map((field)=>{
                        return(
                            <>
                    <div className="fields" key={field.id}>
                        <input type={field.type} name={signupFields.name} classsname={field.classname} placeholder={field.placeholder}/>
                    </div></>
                        )
                    })}
                    <label className="termsCondition">
                        <div className="checkbox">
                        <input name="address" type="checkbox" class="form-check-input" checked={false}/>
                        </div>I agree to the &nbsp;<a href="/termsofuse" target="_blank"> term and conditions.
                         </a>
                        </label>
                        <button type="button" className="btn">Sign Up</button>
                    <p className="Sigin">
                        <small>Already have an account? 
                        <span>Sign In</span>
                        </small>
                    </p>
                </form>
            </div>
        </div>
        </Container></>
  )
}
const Container = styled.div`
.Sigin {
    text-align: left;
    margin: 0;
        color: #47525e;
        font-size:0.8rem;
}
        .Sigin span{
    font-weight: 700;
    cursor: pointer;
}
.btn{
    text-align: center;
    vertical-align: middle;
        background: #23a6d7;
    border-color: #23a6d7;
    display: block;
    margin-top: 21px;
    padding: 11px 12px;
    width: 100%;
    margin-bottom: 27px;
    font-size: 19px;
    color: white;
    border: none;
    border-radius: 5px;
}
    .termsCondition{
display: flex;
    text-align: left;
    padding-left: 20px;
    font-size: 14px;
    }
    .termsCondition a
    {font-size: 15px;
    text-decoration: none;
    color: #8f8f8f;}
    .checkbox{
    margin-top:-1px;}
    label {
    color: #47525e;
}
.Signup{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 1000;
    height: calc(100vh - 21px);
    width: 69vw;
    background:white;
    display: flex;
    justify-content: center;
    flex-direction:row;
    overflow: auto;
}
    .img{
        height: 137%;
    width: 50%;
    }
    .img img{
        height: 100%;
    width: 100%;}
    
    .signupform{
      height: 130%;
    width: 50%;
    display: flex
;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-top: 44px;
    }
    form{
    width: 90%;
    display: flex;
    height: 98%;
    justify-content: space-around;
    flex-direction: column;        
        }
    .tag{
        position: absolute;
    left: 25px;
    top: 61px;
    color: white;
    font-size: 1rem;
    }
    .Headline h2{
    margin:0;
        font-family: baloo;
    font-size: 28px;
    font-family: FuturaPT, sans-serif;
    color: #47525e;

    }
    .fields input:focus{
    border-radius: 0px;
    border: 3px solid #7cbdd8;
    outline:none;
    
    }
    .fields input{
    background: #ecedee;
    display: block;
    padding: .375rem .75rem;
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out;
    box-shadow .15s ease-in-out;
    width:91%;
    }
    .colsedebutton{
    position: absolute;
    top: 25px;
    right: 26px;
    padding: 0 6px;
    border-radius: 50px;
    background: #6c757d;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    opacity: 1;
    height: 25px;
    z-index: 9;
    }
    .colsedebutton :hover{    cursor: pointer;
}
    .colsedebutton span{
        display: block;
    height: 11px;
    margin: -5px 0 0;
    }
        @media only screen and (max-width:1239px){
        .tag h2{
        font-size:1rem}
        }
                @media only screen and (max-width:1025px){
.signupform {
    width: 100%;
}.img {
    width: 100%;
}
.Signup {
    flex-direction: column;
}
        }
`
