import React, { useContext } from 'react'
import { DataContext } from '../../Context'
import { useNavigate } from 'react-router-dom'
import './ArticleFooter.css'

export default function ArticleFooter() {
    const [articleFooter]=useContext(DataContext);
    const nav=useNavigate();
    const toNavigate=(id,selectedArticle)=>{
      nav(`/article/$(id)`,{state:{content:selectedArticle}});
    }
  return (
<>
<div className='flex'>
{
      articleFooter.filter((item)=>item.id===3 || item.id===12 || item.id===15||item.id===20|| item.id===25).map((movie)=>{
        return(
          <>
         
          <div className='internalFlex' id={movie.id} onClick={()=>toNavigate(movie.id,movie)}>
          <div>
            <div >
            <img src={movie.imgUrl} alt="jabWeMet" className='imageA'/>
            <div>
            <h3 className='hA'>{movie.name}</h3>
            <br/>
           <span className='ratinga'>{movie.rating}</span><span>|{movie.date}</span>
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
</>
  )
}




