import { createContext,useState } from "react";
import React from 'react';
export const DataContext=createContext();
function DataContextProvider(props){
    const [data,setData]=useState([{
        category:"bollywood",
        id:1,
       imgUrl:"https://wallpapercave.com/wp/wp6239429.jpg",
       name:"JAB WE MET" ,
       review:"Imtiaz Ali's 'Jab We Met' is cinema at its best! One of the finest Romanctic love stories to come out of Indian Cinema.  'Jab We Met' holds your attention from almost start to end, leaving the viewer completely satisfied. The film was a success at the box office, and has remained to be a fan favorite. Thumbs up!",
       rating:"IMDb rating:8/10",
      date:"5th March 2023"
    },
    {
        category:"bollywood",
        id:2,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BODVkNjU4NGMtODMwNi00ZWU4LWI3ZmYtNjgxNzIyNjY5MmI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
       name:"MAIN HOON NA" ,
       review:"An army major goes undercover as a college student. His mission is both professional and personal: to protect his general's daughter from a radical militant, and to find his estranged half-brother.",
       rating:"IMDb rating:7.0/10",
      date:"5th March 2023"
    },
    {
        category:"bollywood",
        id:3,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BYmVjNDIxODAtNWZiZi00ZDBlLWJmOTUtNDNjMGExNTViMzE1XkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_.jpg",
       name:"KAL HO NA HO" ,
       review:"Naina, an introverted, perpetually depressed girl's life changes when she meets Aman. But Aman has a secret of his own which changes their lives forever. Embroiled in all this is Rohit, Naina's best friend who conceals his love for her.",
       rating:"IMDb rating:7.9/10",
      date:"5th March 2023"
    },
    {
        category:"bollywood",
        id:4,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
       name:"ZINDAGI NA MILEGI DOBARA" ,
       review:"Three friends decide to turn their fantasy vacation into reality after one of their friends gets engaged.Zindagi Na Milegi Dobara (You Only Live Once), also abbreviated as ZNMD, is a 2011 Indian Hindi-language buddy road comedy drama film directed by Zoya Akhtar and produced by Farhan Akhtar and Ritesh Sidhwani under Excel Entertainment. ",
       rating:"IMDb rating:8.2/10",
      date:"5th March 2023"
    },
    {
        category:"bollywood",
        id:5,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BMjRjMTYwMTYtMmRkNi00MmVkLWE0MjQtNmM3YjI0NWFhZDNmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
       name:"DIL CHAHTA HAI" ,
       review:"Three inseparable childhood friends are just out of college. Nothing comes between them - until they each fall in love, and their wildly different approaches to relationships creates tension.",
       rating:"IMDb rating:8.1/10",
      date:"5th March 2023"
    },
    {
        category:"bollywood",
        id:6,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BMDc1ZDBkODMtYjI0MC00NDcyLWFhMGUtYzM4NDQyMzgyYzg1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
       name:"WAKE UP SID" ,
       review:"The story of a lazy Mumbai college student who does absolutely nothing, with a turn of events will Sid realize his potential in this world and become a success in the fast-paced life of Mumbai.",
       rating:"IMDb rating:7.6/10",
      date:"5th March 2023"
    },
{
    category:"food",
    id:7,
   imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Indian-Cuisine.jpg",
   name:"TASTE OF INDIA  " ,
   review:"No vacation is complete without enjoying a wholesome Indian meal. Indian cuisine offers some of the most yummy dishes like Tandoori Chicken, Paneer Butter Masala, Naan bread, and many more. Those who had the chance too tuck into the best, have always licked their fingers after each meal.Apart from some of these dishes mentioned above, Indian cuisine is known for its deserts right from Gulab Jamun, Halwa and much more. They say no meal is complete without desert, so when are you giving yourself a treat?",
   rating:"FOOD",
  date:"5th March 2023"  

},
{
    category:"food",
        id:8,
        name:"TASTE OF FRANCE",
       imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/French-Cuisine.jpg" ,
       review:"Known for its class and finest ingredients, French cuisine is home to the best gourmet meal and Michelin guide.  Right from truffles, sea food, croissants and baguette, each dish is cooked to detail and had with a glass of wine. Every flavour and spice will burst in one's mouth and will leave them craving for more.If you haven't given those taste buds a treat to the finest yet, then what are you waiting for? It is time you let your taste buds have a part of its own.",
       rating:"FOOD",
      date:"5th March 2023"
},
{
    category:"food",
        id:9,
       imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Chinese-Cuisine.jpg",
       name:"TASTE OF CHINA" ,
       review:"One of the most diverse cuisines in the world, Chinese cuisine has been around for over 200 years. Some of the ingredients are chosen from the greens in the mountains and some of the finest people should tuck into is the fresh, salty seafood and lamb. It is one of the various types of cuisines that has remained a favourite throughout.",
       rating:"FOOD",
      date:"5th March 2023"
},
{
    category:"food",
        id:10,
       imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Japanese-Cuisine.jpg",
       name:"TASTE OF JAPAN" ,
       review:"Have you ever eaten with chopsticks? if you haven't, then you should tuck into some of the finest Japanese food with chopsticks. Some of the most well known Japanese cuisines are Sushi and Tofu.  The flavours has always a rich taste one's mouth, which is not something that happens with every dish. These are dishes that can be eaten with fried vegetables and boiled rice.",
       rating:"FOOD",
      date:"5th March 2023"
},
{
    category:"food",
        id:11,
       imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Italian-Cuisine.jpg",
       name:"TASTE OF ITALY" ,
       review:"Spaghetti, Pasta, Pizza and a few others, are some of the various types of Italian cuisines people from around the world love and are ordering it at restaurants or eating at home. Italian cuisine is one of the best and the true taste they say is only found in Italy.Some of the typical Italian products are tomatoes and basil, olive oil and Prosciutto de Parma. Cheese, cakes, ice-cream, fruit, sweets and cookies are some of the most favorite deserts among the Italians.",
       rating:"FOOD",
      date:"5th March 2023"
},
{

        category:"food",
            id:12,
           imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Spanish-Cuisine.jpg",
           name:"TASTE OF SPAIN" ,
           review:"Every time people hear of Spanish cuisines, they feel the need to go to Spain. Well, they aren’t entirely wrong.  Spanish cuisine has a character of its own as it offers a diverse range of seafood along with Paella, tapas, stews, chorizo, Serrano ham and beans. The cuisine is not homogeneous and the culture of the country is defined by its food.",
           rating:"FOOD",
          date:"5th March 2023"
    
},
{
    

        category:"hollywood",
            id:13,
           imgUrl:"https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_FMjpg_UX1000_.jpg",
           name:"HARRY POTTER" ,
           review:"As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
           rating:"IMDb rating:8/10",
          date:"5th March 2023"
    

},{

    category:"hollywood",
        id:14,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
       name:"INCEPTION" ,
       review:"Every time people hear of Spanish cuisines, they feel the need to go to Spain. Well, they aren't entirely wrong.  Spanish cuisine has a character of its own as it offers a diverse range of seafood along with Paella, tapas, stews, chorizo, Serrano ham and beans. The cuisine is not homogeneous and the culture of the country is defined by its food.",
       rating:"IMDb rating:8.8/10",
      date:"5th March 2023"

},{

    category:"hollywood",
        id:15,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BYjBmM2FhMmYtNjU1My00OTI1LWFjNjQtYzgyNWQ4Y2E0ZmQxL2ltYWdlXkEyXkFqcGdeQXVyNzE4NDc2Mjc@._V1_.jpg",
       name:"INTERSTELLAR" ,
       review:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival",
       rating:"IMDb rating:8.6/10",
      date:"5th March 2023"

},{

    category:"hollywood",
        id:16,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BMTU1NTUwMjQxN15BMl5BanBnXkFtZTgwOTQ2MjEyMDE@._V1_.jpg",
       name:"THE SHAWSHANK REDDEMPTION" ,
       review:"Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
       rating:"IMDb rating:9.3/10",
      date:"5th March 2023"

},{

    category:"hollywood",
        id:17,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
       name:"THE GODFATHER" ,
       review:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
       rating:"IMDb rating:9.2/10",
      date:"5th March 2023"

},
{

    category:"books",
        id:18,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659289885i/52529.jpg" ,
       name:"THE SECRET",
       review:"The Secret contains wisdom from modern-day teachers—men and women who have used it to achieve health, wealth, and happiness. By applying the knowledge of The Secret, they bring to light compelling stories of eradicating disease, acquiring massive wealth, overcoming obstacles, and achieving what many would regard as impossible.",
       rating:"Goodreads rating:3.72/5",
      date:"5th March 2023"

},
{

    category:"books",
        id:19,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg" ,
       name:"THE ALCHEMIST",
       review:"Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.",
       rating:"Goodreads rating:3.72/5",
      date:"5th March 2023"

},
{

    category:"books",
        id:20,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638425885i/16299.jpg" ,
       name:"AND THEN THERE WERE NONE",
       review:"First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion:",
       rating:"Goodreads rating:4.28/5",
      date:"5th March 2023"

},
{

    category:"books",
        id:21,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg" ,
       name:"TO KILL A MOCKING BIRD",
       review:"The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
       rating:"Goodreads rating:4.27/5",
      date:"5th March 2023"

},
{

    category:"books",
        id:22,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210.jpg" ,
       name:"JANE EYRE",
       review:"again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. She falls in love. ",
       rating:"Goodreads rating:4.14/5",
      date:"5th March 2023"

},
{

    category:"books",
        id:23,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630487234i/24213.jpg" ,
       name:"ALICE'S ADVENTURE IN WONDERLAND",
       review:"When Alice sees a white rabbit take a watch out of its waistcoat pocket she decides to follow it, and a sequence of most unusual events is set in motion. This mini book contains the entire topsy-turvy stories of Alice's Adventures in Wonderland and Through the Looking-Glass, accompanied by practical notes and Martina Pelouso's memorable full-colour illustrations.",
       rating:"Goodreads rating:4.06/5",
      date:"5th March 2023"

},
{

    category:"gardening",
        id:24,
       imgUrl:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglxBScz8_nee3bBiQrjfuRpDHauZL75DgTXSD2rPf79LJ9QmQbChoceld8GTZI7UZNwcbQr8-8DBpS0X-pzxtv45S1NbDvGJC9UA0hIKd_ve_SFNR2-ZOhsxZf2x1EKthMR2CYhy6im7F2tzl5xWPmnwiNkhPGWGc9FUjTXGqgBHvzgq0_gE1Wwk3K/s16000/jade_plant.jpg" ,
       name:"3 THINGS TO REMEMBER WHILE GROWING JADE PLANT",
       review:"Jade plants are low-maintenance, succulent houseplants that are easy to grow in indoors, and they are capable to live for longer time spans if handled with good care! In this article, we'll share those three things which you should keep in mind when you are growing Jade plants.",
       rating:"JADE PLANT",
      date:"5th March 2023"

},
{

    category:"gardening",
        id:25,
       imgUrl:"https://1.bp.blogspot.com/-EHu67UMJ5ok/YTdzJGtFAKI/AAAAAAAAA5A/gL4vose1ZmQes4tRDrVvxtO3lKe-HBfxgCLcBGAsYHQ/s16000/ixora_chinensis.jpg" ,
       name:"HOW TO GROW AND CARE IXORA CHINESIS",
       review:"Native to Asia, Ixora Chinensis plants are attractive, small shrubs that grow in subtropical regions. Grown around the globe, Ixora plants feature bright, colorful clusters of flowers that look like puffballs.Although these plants are easy to grow under the right conditions, growing Ixora plants can be a challenge even for experienced growers.",
       rating:"IXORA CHINESIS",
      date:"5th March 2023"

},
{

    category:"gardening",
        id:26,
       imgUrl:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigVbheyds0dV5fAMXykLxapNo5AbeabQxQdHwC2d7HdAX11Jg20MPcbeX27k1w5P0957wXD9KN4erV4RgL129ltbU3Vr8hYo7j-jPra6SCjgdFUvHHaz7VzIkXMXGPa2zLlJug7JvPAuaol_kvv2PSBxgBydFrlTAaq2JG_nD2REgJch7t625rL-FD/s16000/tecoma_stans.jpg" ,
       name:"HOW TO GROW AND CARE TECOMA PLANT",
       review:"Tecoma Stans plant is a species of flowering plant native to the Americas. It is known for its bright bell-shaped flowers. Its beautiful leaves too offer a beautiful backdrop to the trumpet-shaped flowers.While the hybrids can produce colorful flowers no variety can beat the hardiness of Tecoma Stans which makes it a perfect plant for beginner gardeners. ",
       rating:"TECOMA PLANT",
      date:"5th March 2023"

},
{

    category:"gardening",
        id:27,
       imgUrl:"https://1.bp.blogspot.com/-Vk3QpPnPHZ0/YTdgWsOiABI/AAAAAAAAA44/1TBpiTtnZ78qpDw5G0Z1Rdi4f_H22HyIQCLcBGAsYHQ/s16000/holy_basil_plant.jpg" ,
       name:"HOW TO GROW AND CARE BASIL PLANT",
       review:"Native to the Indian subcontinent, Holy Basil is a herbal plant with religious and cultural importance. People in other parts of the world might use it as a food ingredient, but for Hindus, this plant is sacred.Holy Basil is majorly grown in tropical areas as a perennial herb.",
       rating:"BASIL PLANT",
      date:"5th March 2023"

}
]);
    return(
        <DataContext.Provider value={[data,setData]}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;