import React, { useContext } from 'react'
import { DataContext } from '../../Context'
import Header from '../../Header/Header'
import './Bollywood.css'
import { useNavigate } from 'react-router-dom'

export default function Bollywood() {
  const [bollywood]=useContext(DataContext);
  const nav=useNavigate();
  const toNavigate=(id,selectedMovie)=>{
    nav(`/article/$(id)`,{state:{content:selectedMovie}});
  }
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
          <div className='BollywoodFlex' id={movie.id} onClick={()=>toNavigate(movie.id,movie)}>
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
      bollywood.filter((item)=>item.category === 'bollywood' && item.id<6).map((movie)=>{
        return(
          <>
          <div className='topPostListb'onClick={()=>toNavigate(movie.id,movie)}>
            <div>
          <img src={movie.imgUrl} alt='moviePoster' className='image2b'/>
          </div>
          <div>
          <h6 className='topimghead'>{movie.name}</h6>
          <div className='rateb'>{movie.rating}</div>
          <div className='dateb'>{movie.date}</div>
          <hr/>
          </div>
          </div>
          </>
        )
      })
    }
    </div>
    <div className='Advertisementb'>
      
    </div>
    </div>
      </div>
      </div>
    </>
  )

}
