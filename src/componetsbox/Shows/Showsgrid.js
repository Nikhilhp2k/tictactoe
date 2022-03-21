import React from 'react'
import Showscard from './Showscard'
import IMG_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../styled'
export const Showsgrid = ({data}) => {
  return (
    <FlexGrid>
        {
            data.map(({show})=>(
                <Showscard
                key={show.id}
                id={show.id}
                name={show.name}
                image={show.image?show.image.medium:IMG_NOT_FOUND}
                summary={show.summary}
                />
            ))
        }
        </FlexGrid>
  )
}
