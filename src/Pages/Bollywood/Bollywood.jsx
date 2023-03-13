import React, { useContext } from 'react'
import { DataContext } from '../../Context'
import Header from '../../Header/Header'
import './Bollywood.css'

export default function Bollywood() {
  const [bollywood]=useContext(DataContext);
  return (
    <>
    <Header />
    <div className='bigFlex'>
    <div>
    <h2 className='pageName'>Bollywood</h2>
    {
      bollywood.filter((item)=>item.category === 'bollywood').map((movie)=>{
        return(
          <>
          <div className='BollywoodFlex' id={movie.id}>
          <div className='bollywoodList'>
            <div className='movieListFlex'>
            <img src={movie.imgUrl} alt="jabWeMet" className='image'/>
            <div>
            <h3>{movie.name}</h3>
            <span className='review'>{movie.review}</span>
            <br/>
           <span className='rating'>{movie.rating}</span><span>|{movie.date}</span>
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
      bollywood.filter((item)=>item.category === 'bollywood').map((movie)=>{
        return(
          <>
          <div className='topPostList'>
            <div>
          <img src={movie.imgUrl} alt='moviePoster' className='image2'/>
          </div>
          <div>
          <h5>{movie.name}</h5>
          <div>{movie.rating}</div>
          <div>{movie.date}</div>
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
