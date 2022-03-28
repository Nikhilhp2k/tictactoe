import React from 'react'
import MainPageLayout from './MainPageLayout'
import { useState } from 'react'
import { apiGet } from '../misc/config'
import { Showsgrid } from '../componetsbox/Shows/Showsgrid'
import {Actorsgrid} from '../componetsbox/Actors/Actorsgrid'
import { useLastQuery } from '../misc/custom-hooks'
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from '../componetsbox/Home.styled'
import CustomRadio from '../componetsbox/CustomRadio'




export const Home = () => {
    const[input,setInputValue]=useLastQuery()
    const[result,setResult]=useState(null)
    const[searchOption,setSearchOption]=useState('shows')
    const isShowsSearch = searchOption ==='shows';
   
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
    const onRadioChange=(env)=>{       
        setSearchOption(env.target.value)
    }
  return (
    <MainPageLayout>
        <SearchInput type="text" onChange={onInputChange} onKeyDown={onKeyDown} placeholder="Search anything" value={input}/>
        <RadioInputsWrapper>
            <div><CustomRadio id="show-search" value="shows" label="Shows" checked={isShowsSearch} onChange={onRadioChange}/></div>
            <div><CustomRadio id="actors-search" value="people" label="Actors" checked ={!isShowsSearch} onChange={onRadioChange}/></div>            
        </RadioInputsWrapper>
        <SearchButtonWrapper>

        
        <button type="button" onClick={onSearch}>Search</button>
        {renderResults()}
        </SearchButtonWrapper>
    </MainPageLayout>
  )
}

export default Home