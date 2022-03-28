import React from 'react'
import Showscard from './Showscard'
import IMG_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../styled'
import { useShows } from '../../misc/custom-hooks'


export const Showsgrid = ({data}) => {

  const [starredShows,dispatchStarred]=useShows()

  return (
    <FlexGrid>
        {
            data.map(({show})=>{

              const isStarred=starredShows.includes(show.id)

              const onStarClick = ()=>{
                
                if(isStarred){
                  console.log(isStarred)
                  dispatchStarred({type:'REMOVE',showId:show.id})
                }
                else{
                  dispatchStarred({type:'ADD',showId:show.id})
                }

              }

              return (
                <Showscard
                key={show.id}
                id={show.id}
                name={show.name}
                image={show.image?show.image.medium:IMG_NOT_FOUND}
                summary={show.summary}
                onStarClick={onStarClick}
                isStarred={isStarred}

                />
            )
            }
            
            
            )
        }
        </FlexGrid>
  )
}
