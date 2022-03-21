import React from 'react'
import Actorscard from './Actorscard'
import IMG_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../styled'

export const Actorsgrid = ({data}) => {
  return (
    <FlexGrid>{
    
    data.map(({person}) =>(
    
        <Actorscard
        key={person.id}
        name={person.name}
        country={person.country?person.country:null}
        birthday={person.birthday}
        deathday={person.deathday}
        gender={person.gender}
        image={person.image?person.image.medium:IMG_NOT_FOUND}
        />
        ))} 
    

    </FlexGrid>
  )
}

export default Actorsgrid