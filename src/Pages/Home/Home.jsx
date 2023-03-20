
import Header from '../../Header/Header'
import './Home.css'
import React, { useContext } from 'react'
import { DataContext } from '../../Context'
import { useNavigate } from 'react-router-dom'


export default function Home() {
  const [latest]=useContext(DataContext);
  const nav=useNavigate();
  const toNavigate=(id,selectedMovie)=>{
    nav(`/article/$(id)`,{state:{content:selectedMovie}});
  }
  return (
    <>
    <div className='background'>
    <div>
    <Header />
  <div className='posterGrid'>
    <div className='inside1'>
    <div className='poster1'>
      <div className='Caption'>
      <div className='topCaption'>Step into Golden Hour</div>
      <div className='bottomCaption'>TRAVEL | 7th March 2023</div>
      </div>
      </div>
    <div className='poster2'>
      <div className='Caption'>
    <div className='topCaption'>Escape the reality</div>
      <div className='bottomCaption'>READ | 7th March 2023</div>
      </div>
    </div>
    </div>
    <div className='inside2'>
    <div className='poster3'>
      <div className='Caption'>
    <div className='topCaption'>Treat your sight with green</div>
      <div className='bottomCaption'>PLANT | 7th March 2023</div>
      </div>
    </div>
    <div className='poster4'>
      <div className='Caption'>
    <div className='topCaption'>Paws of Love</div>
      <div className='bottomCaption'>PET | 7th March 2023</div>
      </div>
    </div>
    </div>
    </div>
    <hr/>
    <div className='latestPost1'>
      <h1 className='latestHeading'>The Latest</h1>
      <div className='latestFlex1'>
      {
      latest.filter((item)=>item.category === 'gardening' && item.id< 27).map((garden)=>{
        return(
          <>
        <div className='Border1'id={garden.id} onClick={()=>toNavigate(garden.id,garden)}>
         
           <img className='gardenImage' src={garden.imgUrl} alt='garden_latest'/>
           <h4 className='heading'>{garden.name}</h4>
          
           <div className='contentFoot'><span>Garden|</span><span>March 05 2023</span></div>
           </div>
            
          </>
        )

      })
    }
    </div> 
    <hr/>
    <h2 className='latestHeading'>LATEST WATCH</h2>
    <div className='LatestPost2'>
<div className='latestBollywood'>
{
      latest.filter((item)=>item.category === 'bollywood'&& item.id<4).map((movie)=>{
        return(
          <>
        <div className='border2'id={movie.id} onClick={()=>toNavigate(movie.id,movie)}>
         
           <div><img className='latest2Image' src={movie.imgUrl} alt='garden_latest'/></div>
           <div><h4 className='heading'>{movie.name}</h4>
           <div className='review'>{movie.review}</div>
        <div className='contentFoot'><span>Movie|</span><span>March 05 2023</span></div></div>
           </div>
            
          </>
        )

      })
    }
</div>


<div className='latestAdvertisement'></div>
    </div>

    </div>
    </div>
    <hr/>
    <h2 className='latestHeading'>LATEST EATERIES</h2>
    <div className='latestPost3'>
{
      latest.filter((item)=>item.category === 'food' && item.id<11).map((food)=>{
        return(
          <>
        <div  className='Border1'id={food.id} onClick={()=>toNavigate(food.id,food)}>
         
           <div><img className='FoodImage' src={food.imgUrl} alt='food_latest'/></div>
           <div><h4  className='heading'>{food.name}</h4>
           <div className='contentFoot'><span>Food|</span><span>March 05 2023</span></div></div>
           </div>
            
          </>
        )

      })
    }
</div>

<hr/>
<h2 className='latestHeading'>LATEST READS</h2>
<div className='latestPost4'>
<div className='bottomPoster'></div>
<div className='Top_Posts'>
{
      latest.filter((item)=>item.category === 'books' && item.id<22).map((books)=>{
        return(
          <>
        <div className='border2'id={books.id} onClick={()=>toNavigate(books.id,books)}>
         
           <div><img className='latest2Image' src={books.imgUrl} alt='book_latest'/></div>
           <div><h4 className='heading'>{books.name}</h4>
           <div className='review'>{books.review}</div>
           <div className='contentFoot'><span>Book|</span><span>March 05 2023</span></div></div>
           </div>
            
          </>
        )

      })
    }
</div>

</div>
<hr/>
<h2 className='latestHeading'>LATEST WATCH</h2>
<div className='latestPost3'>
{
      latest.filter((item)=>item.category === 'hollywood' && item.id<16).map((movieh)=>{
        return(
          <>
        <div className='Border1'id={movieh.id} onClick={()=>toNavigate(movieh.id,movieh)}>
         
           <div><img className='FoodImage' src={movieh.imgUrl} alt='movieh_latest'/></div>
           <div><h4 className='heading'>{movieh.name}</h4>
         
           <div><span>Movie</span><span>March 05 2023</span></div></div>
           </div>
            
          </>
        )

      })
    }

</div>
</div>
<hr/>
    </>
  )
}
