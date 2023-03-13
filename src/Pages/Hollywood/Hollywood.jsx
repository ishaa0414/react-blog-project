import "./Hollywood.css"
import React, { useContext } from 'react'
import { DataContext } from '../../Context'
import Header from '../../Header/Header'
export default function Hollywood() {
  const [hollywood]=useContext(DataContext);
  return (
    <>
    <Header />
    <div className='bigFlex'>
    <div>
    <h2 className='pageName'>Hollywood</h2>
    {
      hollywood.filter((item)=>item.category === 'hollywood').map((movieh)=>{
        return(
          <>
          <div className='BollywoodFlex' id={movieh.id}>
          <div className='bollywoodList'>
            <div className='movieListFlex'>
            <img src={movieh.imgUrl} alt="jabWeMet" className='image'/>
            <div>
            <h3>{movieh.name}</h3>
            <span className="review">{movieh.review}</span>
            <br/>
           <span className="rating">{movieh.rating}</span><span>|{movieh.date}</span>
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
      hollywood.filter((item)=>item.category === 'hollywood').map((movieh)=>{
        return(
          <>
          <div className='topPostList'>
            <div>
          <img src={movieh.imgUrl} alt='moviePoster' className='image2'/>
          </div>
          <div>
          <h5>{movieh.name}</h5>
          <div>{movieh.rating}</div>
          <div>{movieh.date}</div>
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