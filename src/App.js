import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css'
function App()
{
    const APP_ID='3238c549';
    const APP_KEY='406d026e8c7a2a1dba579befeded2c08';
 
    //state for fetch API
const[recipes,setRecipes]=useState([])

//state for search
const[search,setSearch]=useState('')

const[query,setQuery]=useState('chicken')
useEffect(()=>{
    getRecipes()
},[query])

const getRecipes=async()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data=await response.json()
  console.log(data.hits)
setRecipes(data.hits)
}

const handle=(e)=>{
   setSearch(e.target.value)
   console.log(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
}
    return(<>
               <div className='app'>
               <form className='search-form' onSubmit={handleSubmit}>
                     <input className='search-bar' type='text' value={search} onChange={handle}/>
                        <button className='search-button' >Search</button>
               </form>
            <div className='recipes'>
               {
                   recipes.map((value,index)=>{
                      return(<>
                                 <Recipe  title={value.recipe.label} calories={value.recipe.calories} image={value.recipe.image} ingredients={value.recipe.ingredients}/> 
                      </>)
                   })
               }
            </div>
            
    </div>
    </>)
}
export default App;