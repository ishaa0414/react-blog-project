import "./Hollywood.css"
import React, { useContext } from 'react'
import { DataContext } from '../../Context'
import Header from '../../Header/Header'
import { useNavigate } from "react-router-dom"
export default function Hollywood() {
  const [hollywood]=useContext(DataContext);
  const nav=useNavigate();
  const toNavigate=(id,selectedMovieh)=>{
    nav(`/article/$(id)`,{state:{content:selectedMovieh}});
  }
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
          <div className='BollywoodFlex' id={movieh.id} onClick={()=>toNavigate(movieh.id,movieh)}>
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
      hollywood.filter((item)=>item.category === 'hollywood' && item.id<17).map((movieh)=>{
        return(
          <>
          <div className='topPostListb' onClick={()=>toNavigate(movieh.id,movieh)}>
            <div>
          <img src={movieh.imgUrl} alt='moviePoster' className='image2b'/>
          </div>
          <div>
          <h5 className="topimghead">{movieh.name}</h5>
          <div className="rateb">{movieh.rating}</div>
          <div className="dateb">{movieh.date}</div>
          <hr/>
          </div>
          </div>
          </>
        )
      })
    }
    </div>
    <div className='Advertisementbh'>
 
    </div>
    </div>
      </div>
      </div>
    </>
  )
}
