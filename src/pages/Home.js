import React from 'react'
import MainPageLayout from './MainPageLayout'
import { useState } from 'react'
import { apiGet } from '../misc/config'




export const Home = () => {
    const[input,setInputValue]=useState('')
    const[result,setResult]=useState(null)
    const onInputChange =(ev) =>{
        setInputValue(ev.target.value)
    
    }
    const onSearch=()=>{
        apiGet(`/search/shows?q=${input}`).then(result=>
            setResult(result)
        )
    }
    const onKeyDown=(ev)=>{
        if(ev.keyCode===13)
        {
            onSearch()
        }
    }
    const renderResults=()=>{
        if(result&&result.length===0){
            return (
                <div>Result not found</div>
            )
        }
        if(result && result.length>0){
            return(
                <div>
                    {
                        result.map( (item)=>{
                            return <div key={item.show.id}>{item.show.name}</div>
                        })
                    }
                    
                </div>
            )
        }
        return null
    }
  return (
    <MainPageLayout>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}></input>
        <button type="button" onClick={onSearch}>Search</button>
        {renderResults()}
    </MainPageLayout>
  )
}

export default Home