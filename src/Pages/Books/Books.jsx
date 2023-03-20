import React, { useContext } from 'react'
import { DataContext } from '../../Context'
import Header from '../../Header/Header'
import './Books.css'
import { useNavigate } from 'react-router-dom'
export default function Books() {
  const [books]=useContext(DataContext);
  const nav=useNavigate();
  const toNavigate=(id,selectedBook)=>{
    nav(`/article/$(id)`,{state:{content:selectedBook}});
  }
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
          <div className='BollywoodFlex' id={books.id} onClick={()=>toNavigate(books.id,books)}>
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
     books.filter((item)=>item.category === 'books' && item.id<21).map((books)=>{
        return(
          <>
          <div className='topPostListb' onClick={()=>toNavigate(books.id,books)}>
            <div>
          <img src={books.imgUrl} alt='moviePoster' className='image2b'/>
          </div>
          <div>
          <h5 className='topimghead'>{books.name}</h5>
          <div className='rateb'>{books.rating}</div>
          <div className='dateb'>{books.date}</div>
          <hr/>
          </div>
          </div>
          </>
        )
      })
    }
    </div>
    <div className='Advertisementbook'>
     
    </div>
    </div>
      </div>
      </div>
    </>
  )

}
