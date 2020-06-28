import React from 'react'
import style from './Recipe.module.css';
function Recipe(props)
{
    const{ingredients}=props
    return(<div className={style.recipe}>
               <h1 >{props.title}</h1>
               <ol>
                     {
                         ingredients.map((value,index)=>{
                         return(<li key={index}>{value.text}</li>)
                         })
                     }
               </ol>
                    <h3>{props.calories}</h3>
               <img src={props.image} className={style.image} alt='error' />
               
    </div>)
}

export default Recipe;