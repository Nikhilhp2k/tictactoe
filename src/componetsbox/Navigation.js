import React from 'react'

import { LinkStyled, NavList } from './Navs.styled'

const LINKS=[{to:'/',text:"Home"},{to:'/starred',text:'Starred'}]
export const Navigation = () => {
  return (
    <div>
        <NavList>
            {
                LINKS.map(item => (
                    <li key={item.to}>
                        <LinkStyled to={item.to} className={item.to===location.pathname?'active':'' }>{item.text}</LinkStyled>
                    </li>
                ))
            }
        </NavList>
        
    </div>
  )
}

export default Navigation