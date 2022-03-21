import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
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
    const [state,dispatch]=useReducer(reducer,initialState)
    console.log(state)
    
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
        
        
       
  return (
      <div>
          this is a show page
      </div>

  )
}

export default Show