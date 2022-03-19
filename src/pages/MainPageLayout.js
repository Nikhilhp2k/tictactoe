import React from 'react'
import Navigation from '../componetsbox/Navigation'
import Title from '../componetsbox/Title'

export const MainPageLayout = ({ children }) => {
  return (
    <div>
        <Title title={"BOX OFFICE"} subtitle={"YOO"}></Title>
        <Navigation/>
        {children}

    </div>
  )
}

export default MainPageLayout