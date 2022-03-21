import React from 'react'
import MainPageLayout from './MainPageLayout'
import { useState } from 'react'
import { apiGet } from '../misc/config'
import { Showsgrid } from '../componetsbox/Shows/Showsgrid'
import {Actorsgrid} from '../componetsbox/Actors/Actorsgrid'




export const Home = () => {
    const[input,setInputValue]=useState('')
    const[result,setResult]=useState(null)
    const[searchOption,setSearchOption]=useState('shows')
    
   
    const onInputChange =(ev) =>{
        setInputValue(ev.target.value)
    
    }
    const onSearch=()=>{
        apiGet(`/search/${searchOption}?q=${input}`).then(result=>
            {
                return(setResult(result))
            }
            

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
            return(result[0].show?
                <Showsgrid data={result}/> 
            :<Actorsgrid data= {result}/>
                
            )
        }
        return null
    }
    const onRadioChange=(ev)=>{
        setSearchOption(ev.target.value)
    }
  return (
    <MainPageLayout>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} placeholder="Search anything" value={input}></input>
        <label htmlFor='search-shows'>
            Shoes
            <input id="search-shows" type="radio" value="shows" onChange={onRadioChange } name="choice"/>
        </label>
        <label htmlFor='search-actors'>
            Actors
            <input id="search-actors" type="radio" value="people" onChange={onRadioChange } name="choice"/>
        </label>
        <button type="button" onClick={onSearch}>Search</button>
        {renderResults()}
    </MainPageLayout>
  )
}

export default Home