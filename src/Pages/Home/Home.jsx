
import Header from '../../Header/Header'
import './Home.css'
import React, { useContext } from 'react'
import { DataContext } from '../../Context'



export default function Home() {
  const [latest]=useContext(DataContext);
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
    <div className='latestPost1'>
      <h1>The Latest</h1>
      <div className='latestFlex1'>
      {
      latest.filter((item)=>item.category === 'gardening' ).map((garden)=>{
        return(
          <>
        <div >
         
           <img className='gardenImage' src={garden.imgUrl} alt='garden_latest'/>
           <h4>{garden.name}</h4>
           <div className='reviewWidth'>{garden.review}</div>
           <div><span>Garden</span><span>March 05 2023</span></div>
           </div>
            
          </>
        )

      })
    }
    </div> 
    <div className='LatestPost2'>
<div className='latestBollywood'>
{
      latest.filter((item)=>item.category === 'bollywood').map((movie)=>{
        return(
          <>
        <div className='latestBollywoodContent'>
         
           <div><img className='gardenImage' src={movie.imgUrl} alt='garden_latest'/></div>
           <div><h4>{movie.name}</h4>
           <div className='reviewWidth'>{movie.review}</div>
           <div><span>Movie</span><span>March 05 2023</span></div></div>
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
    
    <div className='latestPost3'>
{
      latest.filter((item)=>item.category === 'food').map((food)=>{
        return(
          <>
        <div className='latestFoodContent'>
         
           <div><img className='FoodImage' src={food.imgUrl} alt='food_latest'/></div>
           <div><h4>{food.name}</h4>
           <div className='reviewWidth'>{food.review}</div>
           <div><span>Food</span><span>March 05 2023</span></div></div>
           </div>
            
          </>
        )

      })
    }
</div>
<div className='latestPost4'>
<div className='bottomPoster'></div>
<div className='Top_Posts'>
{
      latest.filter((item)=>item.category === 'books' && item.id<22).map((books)=>{
        return(
          <>
        <div className='latestbooksContent'>
         
           <div><img className='bookImage' src={books.imgUrl} alt='book_latest'/></div>
           <div><h4>{books.name}</h4>
           <div className='reviewWidth'>{books.review}</div>
           <div><span>Book</span><span>March 05 2023</span></div></div>
           </div>
            
          </>
        )

      })
    }
</div>
</div>
<div className='latestPost5'>
{
      latest.filter((item)=>item.category === 'hollywood' && item.id<22).map((movieh)=>{
        return(
          <>
        <div className='latesthollywooodContent'>
         
           <div><img className='moviehImage' src={movieh.imgUrl} alt='movieh_latest'/></div>
           <div><h4>{movieh.name}</h4>
           <div className='reviewWidth'>{movieh.review}</div>
           <div><span>Movie</span><span>March 05 2023</span></div></div>
           </div>
            
          </>
        )

      })
    }

</div>
</div>
    </>
  )
}
