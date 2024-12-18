import React from 'react'
import styled from 'styled-components'
import HomeSecond from '../Components/homeComponent/HomeSecond'
import "../App.css"
import HomeThird from '../Components/homeComponent/HomeThird'
import HomeFourth from '../Components/homeComponent/HomeFourth'
import HomeFIfth from '../Components/homeComponent/HomeFIfth'
import HomeSixth from '../Components/homeComponent/HomeSixth'
import HomeFirst from '../Components/homeComponent/HomeFirst'
import SignupPop from '../Components/MenuComponent/SignupPop'
export default function Home({NavmenuOtpion}) {
  return (
    <>
      <HomeFirst />
      {!NavmenuOtpion.SignupPop&&<HomeSecond/>}
      <HomeThird/>
      <HomeFourth/>
      <HomeFIfth/>
      <HomeSixth/>
    </>
  )
}
