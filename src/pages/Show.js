import React from 'react'
import { useParams } from 'react-router-dom'
import Casts from '../componetsbox/Shows/Casts';
import Details from '../componetsbox/Shows/Details';
import Seasons from '../componetsbox/Shows/Seasons';
import ShowMainData from '../componetsbox/Shows/ShowMainData';

import { useShow } from '../misc/custom-hooks';
import { InfoBlock, ShowPageWrapper } from './Show.styled';




export const Show = () => {
    const { id }=useParams();
    const {show,isLoading,error}=useShow(id)

     
        if(isLoading){
            return <div>Data is being loaded</div>
        }
        
        if (error){
            return <div>error occurrred:{error}</div>
        }

        
        
       
  return (
      <ShowPageWrapper>
          <ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres}  />

          <InfoBlock>
              <h2>Details</h2>
              <Details status={show.status} network={show.network} premiered={show.premiered} />
          </InfoBlock>
          <div>
              <h2>seasons</h2>
              {}
              <Seasons seasons={show._embedded.seasons} />
              
              <Casts cast={show._embedded.cast}/>
          </div>
          </ShowPageWrapper>
    
  )
}

export default Show