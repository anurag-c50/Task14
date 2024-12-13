import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
   <Conatiner>
    <div className="container">
        <div className="subConatiner">
            <div className="form part">
                <form>
                    <h2>Sign Up For Our Newsletter
                    </h2>
                    <div className="twoinput">
                        <input type="text" value='Name'/>
                        <input type="text" value='Zip Code'/>
                    </div>
                    <div className="oneinput">
                        <input type="email" value='Enter Your Email'/>
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="info part">
                <h2>Contact Us</h2>
                <h2>info@healthyplaneat.com</h2>
            </div>
            <div className="socialMedia part">
                <div className="headline">Follow Us</div>
                <div className="icon">
                <span><img src="data:image/png;base64,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" alt="twitter" /></span>
                <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABHNCSVQICAgIfAhkiAAABM5JREFUaEPdm2tolmUYx39/aVlrYhs2KU1oCpppRUlp1AcxOhBY4YcyJbKQEjoYReUHydIOX6IDg05ELVbmBztQ0PxQSFSg5UhGWwtTKpUm1txK21p5xfW6d72958P97Hm368vz8jz3fV3X7z4frlcEEjObBMwD5gKzU56zCpjYA3wHdAHdwLdAh6SjIVxTJUrMbDFwLXAVcEElurLk/RrYBrRJ+rxc3SUDmlkjsBq4AzinXMMl5vseeBV4U9KhUvIWDWhmpwJ3A+uA+lKMBEzbC2wCmiX9VYzeogDN7GJgCzCzGKWjkMb76U2S/JlX8gKamX9/AHgSqCmkbJS//wmslfRKPruFAB8Bnhplx0sxZ8C9kppzZcoJaGYO5oBjQdZL8r6ZIVkBzexy4NMqbJa5CnsIuFLSZ+kJMgDN7GxgF3DGWKi6FB99+pifPo1kA/TJ1SfuyKR/6DhdvQN09Q7SP/TPiJ1LG2sTv5PPMhzYIunm1Hz/AzSzu4AXy1BcVJb9R4d4oeMw7+7ry5t+z/I5RenLkWi5pHeS30YAh6eEncCCSrTnyrt1bx+b2nv4feh4QfUVAu6QtDAb4DXAxwWtl5Ggs3eQpW37is5ZIaDbWSxpu/9IrcH3geuL9qKEhLd88hM7Dx0rOkcAwBZJt40AmtkU4GAU00KptedOBQD0rdZU33IlatDM1gLPFl3EJSR8vfs3nmjPvgGoq5nAqtkNTD+thml1/60EFw6PpiWYyZZ0laQ3koCRNc+N7T20dPsmIFO2L52ZgItIElOGhkdP92ByFIZy9b9LGmt5e8mMKEwmdR4BGhzQJx0/LohEYgR0nnMd8AbgvUjogJgBb3TASLdEMQOuc8DXgNvHaQ22OmAbcHUIQK+t9NV7Z+9A1uXZpJoJzK0/JcPsnPqJrL9oagh3XMc2B/wm1JHfrM1+vFmZBB5ddzvgfmBaZW6dyB0C8J55U7hvvi+sgsgBB/T5IsgcWIWAfQ44AEwMUV4hAFuXzCDQUs2REoB+MhVEqhCQoIDPdxzOKKite49w8NjfGe/Pqj2JZU2nZ7wP2P8SuoM20WzNIOaJfjDoIFOFgIk++ItvDoN0wixKYq7BH4NO9FVYgzuCLtWqEPADB2wBbh2nTbR5vG+X1jhgZOeh3ipiHmQWOeB04Odx2kQnJ0/VfJ/joR/BJcYaTBzhJwGfBh4OThdvE31M0oYk4CLgy3EGuEDSriSgP3+IIu4lpia6W9KFicV2stbMzONfPJoiqMQE+KCkZ9IBfe/id1yZe5gKkGMA7PEBU1LiljX9hncD8GgFPFn2g334zW66+J3EsqYgJyXpqu+X9FzyZTrgycBXwPkhIUdRV4ffUKeGeWULQnA4h3TYsSQeu+ZwDjkiueJkVgK+CJ8wRgj94n+lpM3p/uaLdIo04iJwwa2R9FI2nYVi1VYAHux2IoCl+qQfWCHpo1yuFQynNDMPU34ZuKzK+HzltVpSZz6/CgImM5uZR/huBM6MGdSjfx+X9FYxfhQN6MqGo34fAu6MAfRD7y75mmPJfTBfCZmZR0Rd51F+gEcnRiFfAA7WKulAOQZKqsFcBsysDrjCo/2A84AmwIPX/ZqooYBjvwJ+JO5LLF/wJ/5W4LsbSX+UA5Wa518kbwt3qDyWSAAAAABJRU5ErkJggg==" alt="facebook" /></span>
                <span><img src="data:image/png;base64,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" alt="instagram"/></span>
           
                </div>           </div>
        </div>
        <div className="copyrigth">
        <p>© 2020 Sustainable Planeat LLC Terms of Use | Privacy Policy</p>
        </div>
    </div>
   </Conatiner>
  )
}
const Conatiner=styled.div`
.container{
height:40vh;
background: #23a6d7;
display: flex;
justify-content: center;
flex-direction:column;
}
.subConatiner{
    height: 35vh;
        display: flex
;
    justify-content: center;
}
.copyrigth p{
color: white;
    height: 3vw;
    font-size: 19px;
    text-align: center;}
    form h2{
    color:white;
    margin:0;
    font-size: 24px;
    text-align: center;
    }
    form{
        display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 13vw;
    align-items: center;
    
}
    }
    .part{
    // border: 2px solid;
    width: 27vw;
        }
    .twoinput{
    height: 7vh;
    width: 26vw;
    display: flex;
    justify-content: space-between;
    }
    .twoinput input{
    background: #4fb8df;
    border: 0;
    color: #fff;
    font-size: 20px;
    width: 12vw;
    padding-left: 9px;
    border-radius: 6px}

        .oneinput{
    height: 7vh;
    width: 26vw;
    display: flex;
    justify-content: center;
    }
    .oneinput input{
    background: #4fb8df;
    border: 0;
    color: #fff;
    font-size: 20px;
    width: 27vw;
    padding-left: 9px;
    border-radius: 6px}
    form button{
    color: #23a6d7;
    cursor: pointer;
    font-weight: 300;
    text-transform: capitalize;
    padding: 10px 11px;
    font-size: 19px;
    width: 9vw;
    border: none;
    border-radius: 5px;
    }
    .info{
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 16px;
    align-items: center;
    }
    .info h2{
    margin-top:22px;
    margin-bottom:0;
    }
    .socialMedia{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
        align-items: center;
    }
    .headline{
margin-top: 23px;
    color: white;    }
    .icon{
    width: 13vw;
    display: flex;
    justify-content: space-around;
    margin-top: 16px;
    }
    `