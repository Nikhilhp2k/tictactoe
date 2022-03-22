import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import Casts from '../componetsbox/Shows/Casts';
import Details from '../componetsbox/Shows/Details';
import Seasons from '../componetsbox/Shows/Seasons';
import ShowMainData from '../componetsbox/Shows/ShowMainData';
import { apiGet } from '../misc/config';

const reducer = (prevState,action)=>
{
    switch(action.type){
        case 'FETCH_SUCCESS':{
            return {isLoading:false,error:null,show:action.show}
        }
        case 'FETCH_FAILED':{
            return {
                ...prevState,isLoading:false,error:action.error
            }
        }


        default:return prevState
    }
}

const initialState={
    show:null,
    isLoading:true,
    error:null
}
export const Show = () => {
    const { id }=useParams();
    const [{show,isLoading,error},dispatch]=useReducer(reducer,initialState)
    
    
    useEffect(()=>{
       let isMounted=true
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result=>{
            
                if(isMounted){

                    dispatch({type:"FETCH_SUCCESS",show:result})

            
            }}).catch(err=>{
                if(isMounted){
                    dispatch({type:"FETCH_FAILED",error:err.message})}
            })
        
            return ()=>{
                isMounted=false
            }
        },[id])
        console.log(show)

        if(isLoading){
            return <div>Data is being loaded</div>
        }
        
        if (error){
            return <div>error occurrred:{error}</div>
        }
        
        
       
  return (
      <div>
          <ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres}  />

          <div>
              <h2>Details</h2>
              <Details status={show.status} network={show.network} premiered={show.premiered} />
          </div>
          <div>
              <h2>seasons</h2>
              {console.log(show._embedded.seasons)}
              <Seasons seasons={show._embedded.seasons} />
          </div>
          <div>
              <h2>Casts cast={show._embedded.cast}</h2>
              <Casts/>
          </div>

      </div>

  )
}

export default Show