
import Header from '../../Header/Header'
import React from 'react'
// import { DataContext } from '../../Context'
import './Food.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Food() {
  // const [food]=useContext(DataContext);

  const nav=useNavigate();
  const toNavigate=(id,selectedFood)=>{
    nav(`/article/$(id)`,{state:{content:selectedFood}});
  }
  const[food,setfood]=useState([])
  useEffect(()=>{
      fetch("http://localhost:5000/food")
   .then(res=>res.json())
   .then((data)=>{setfood(data)})})
  return (
    <>
 
    <Header />
    
    <div className='bigFlex'>
   
    <div>
    <h2 className='pageName'>Food</h2>
    {
      food.filter((item)=>item.category === 'food').map((food)=>{
        return(
          <>
          <div className='BollywoodFlex' id={food.id}  onClick={()=>toNavigate(food.id,food)}>
          <div className='bollywoodList'>
            <div className='movieListFlex'>
            <img src={food.imgUrl} alt="Foods" className='image1'/>
            <div>
            <h3>{food.name}</h3>
            <span className='review'>{food.review}</span>
            <br/>
           <span className='rating'>{food.rating}</span><span>|{food.date}</span>
            </div>
            </div>
            <hr/>
          </div>        
            </div>          
          </>
        )

      })
    }
      </div>
      <div>
      <h2 className='pageName'>Top Posts</h2>
     <div className='topFlex'>
      <div>
      {
      food.filter((item)=>item.category === 'food').map((food)=>{
        return(
          <>
          <div className='topPostLists'  onClick={()=>toNavigate(food.id,food)}>
            <div>
          <img src={food.imgUrl} alt='moviePoster' className='imageSide'/>
          </div>
          <div >
          <div className='fontSize2'>{food.name}</div>
          <div className='fontSize'>{food.rating}</div>
          <div className='fontSize'>{food.date}</div>
          <hr/>
          </div>
          </div>
          </>
        )
      })
    }
    </div>
    <div className='Advertisementbf'>
    
    </div>
    </div>
      </div>
      </div>
    </>
  )
}
