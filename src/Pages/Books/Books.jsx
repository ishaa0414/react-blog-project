import React, { useContext } from 'react'
import { DataContext } from '../../Context'
import Header from '../../Header/Header'
import './Books.css'

export default function Books() {
  const [books]=useContext(DataContext);
  return (
    <>
    <Header />
    <div className='bigFlex'>
    <div>
    <h2 className='pageName'>Books</h2>
    {
      books.filter((item)=>item.category === 'books').map((books)=>{
        return(
          <>
          <div className='BollywoodFlex' id={books.id}>
          <div className='bollywoodList'>
            <div className='movieListFlex'>
            <img src={books.imgUrl} alt="jabWeMet" className='image'/>
            <div>
            <h3>{books.name}</h3>
            <span className='review'>{books.review}</span>
            <br/>
           <span className='rating'>{books.rating}</span><span>|{books.date}</span>
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
     books.filter((item)=>item.category === 'books').map((books)=>{
        return(
          <>
          <div className='topPostList'>
            <div>
          <img src={books.imgUrl} alt='moviePoster' className='image2'/>
          </div>
          <div>
          <h5>{books.name}</h5>
          <div>{books.rating}</div>
          <div>{books.date}</div>
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
