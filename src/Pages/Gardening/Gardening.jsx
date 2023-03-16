import React, { useContext } from 'react'
import { DataContext } from '../../Context'
import Header from '../../Header/Header'
import './Gardening.css'
import { useNavigate } from 'react-router-dom'
export default function Gardening() {
  const [gardening]=useContext(DataContext);
  const nav=useNavigate();
  const toNavigate=(id,selectedGarden)=>{
    nav(`/article/$(id)`,{state:{content:selectedGarden}});
  }
  return (
    <>
    <Header />
    <div className='bigFlex'>
    <div>
    <h2 className='pageName'>Gardening</h2>
    {
      gardening.filter((item)=>item.category === 'gardening').map((gardening)=>{
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
      gardening.filter((item)=>item.category === 'gardening').map((gardening)=>{
        return(
          <>
          <div className='topPostList'  onClick={()=>toNavigate(gardening.id,gardening)}>
            <div>
          <img src={gardening.imgUrl} alt='Plant' className='TopImage'/>
          </div>
          <div>
          <h5>{gardening.name}</h5>
          <div>{gardening.rating}</div>
          <div>{gardening.date}</div>
          <hr/>
          </div>
          </div>
          </>
        )
      })
    }
    </div>
    <div className='Advertisement'>
      Advertisement
    </div>
    </div>
      </div>
      </div>
    </>
  )

}
