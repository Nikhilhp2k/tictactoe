import React from 'react'
import MainPageLayout from './MainPageLayout'
import { useState } from 'react'




export const Home = () => {
    const[input,setInputValue]=useState('')
    const onInputChange =(ev) =>{
        setInputValue(ev.target.value)
    
    }
    const onSearch=()=>{
        console.log(input)
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r=>r.json()).then(result=>console.log(result))
    }
    const onKeyDown=(ev)=>{
        if(ev.keyCode===13)
        {
            console.log("clicked enter")
            onSearch()
        }
    }
  return (
    <MainPageLayout>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}></input>
        <button type="button" onClick={onSearch}>Search</button>
    </MainPageLayout>
  )
}

export default Home