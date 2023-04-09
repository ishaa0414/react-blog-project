import React from 'react'
// import { DataContext } from '../../Context'
import Header from '../../Header/Header'
import './Gardening.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
export default function Gardening() {
  // const [gardening]=useContext(DataContext);
  const nav=useNavigate();
  const toNavigate=(id,selectedGarden)=>{
    nav(`/article/$(id)`,{state:{content:selectedGarden}});
  }
  const[garden,setgarden]=useState([])
  useEffect(()=>{
    fetch("https://reactblogbackend-ysbt.onrender.com/gardening")
 .then(res=>res.json())
 .then((data)=>{setgarden(data)})})
  return (
    <>
    <Header />
    <div className='bigFlex'>
    <div>
    <h2 className='pageName'>Gardening</h2>
    {
      garden.map((gardening)=>{
        return(
          <>
          <div className='BollywoodFlex' id={gardening.id}  onClick={()=>toNavigate(gardening.id,gardening)}>
          <div className='bollywoodList'>
            <div className='movieListFlex'>
            <img src={gardening.imgUrl} alt="Plant" className='MainImage'/>
            <div>
            <h3>{gardening.name}</h3>
            <span className='review'>{gardening.review}</span>
            <br/>
           <span className='rating'>{gardening.rating}</span><span>|{gardening.date}</span>
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
      garden.filter((item)=>item.category === 'gardening').map((gardening)=>{
        return(
          <>
          <div className='topPostListb'  onClick={()=>toNavigate(gardening.id,gardening)}>
            <div>
          <img src={gardening.imgUrl} alt='Plant' className='image2bg'/>
          </div>
          <div>
          <h5 className='topimgheadg'>{gardening.name}</h5>
          <div className='rateb'>{gardening.rating}</div>
          <div className='dateb'>{gardening.date}</div>
          <hr/>
          </div>
          </div>
          </>
        )
      })
    }
    </div>
    <div className='Advertisementbg'>
  
    </div>
    </div>
      </div>
      </div>
    </>
  )

}
