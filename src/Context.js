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
      date:"5th March 2023",
      article:"Devasted by the news that his recently widowed mother has decided to remarry and that his fiancé has chosen another man to wed, a wealthy businessman by the name of Aditya D. Kashyap (Shahid Kapoor) boards a train in Mumbai to get away from it all. He doesn't know where the train is heading and doesn't really care. He just wants to be left alone and, in his misery, even contemplates suicide while on the train. It's during this time that he happens to meet a young woman by the name of Geet Kaur Dhillon (Kareena Kapoor) who is not only extremely talkative but also radiates a positive personality as well. To that extent, she even suggests that he travels with her to her small village in order to marry her younger sister Roop Kaur Dhillon (Saumya Tandon) at the same time she elopes with her secret boyfriend Anshuman (Pawan Malhotra) so that the two of them can be related by law. Needless to say, Aditya thinks she is completely insane but when the two of them temporarily disembark from the train-and subsequently become stranded in another village--he finds himself becoming more enmeshed in her crazy scheme. Now rather than reveal any more I will just say that I stumbled upon this film quite by accident and I didn't know whether I would like it or not. To my surprise, I found it to be a really cute romantic-comedy which passed the time extremely well. I especially liked the performances of both Shahid Kapoor and Kareena Kapooro who played their parts quite well and seemed to enjoy working with one another. That being said, I enjoyed this film and I have rated it accordingly. Above average."
    },
    {
        category:"bollywood",
        id:2,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BODVkNjU4NGMtODMwNi00ZWU4LWI3ZmYtNjgxNzIyNjY5MmI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
       name:"MAIN HOON NA" ,
       review:"An army major goes undercover as a college student. His mission is both professional and personal: to protect his general's daughter from a radical militant, and to find his estranged half-brother.",
       rating:"IMDb rating:7.0/10",
      date:"5th March 2023",
      article:"Main Hoon Na tells the story of Major Ram Prasad Sharma (Shahrukh Khan) and his efforts to foil the terrorist Raghavan (Sunil Shetty). Major Sharma is simultaneously attempting to mend relations with his father's estranged first wife and his half-brother Lakshman; complications ensue.Major Ram Prasad Sharma yearns to see the ambitious project Mission Milaap become a reality. The mission may prove to be the dawn of a new tomorrow, ending the long-standing enmity between two countries. But, some forces do not want that dawn to come. One of them is Raghavan who will do anything, including threatening the life of General Amarjeet Bakshi's daughter Sanjana.To protect Sanjana, Ram Prasad poses as a student at her school. But, Ram Prasad also has another agenda. He must fulfill the dying wish of his martyred father Brigadier Shekhar Sharma. This task involves intense emotions and long-standing misunderstandings, and strangely, the key to its success also can be found at Sanjana's school. As Ram Prasad Sharma struggles to carry out his dual missions of love and violence, his only mantra is Main Hoon Na!"
    },
    {
        category:"bollywood",
        id:3,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BYmVjNDIxODAtNWZiZi00ZDBlLWJmOTUtNDNjMGExNTViMzE1XkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_.jpg",
       name:"KAL HO NA HO" ,
       review:"Naina, an introverted, perpetually depressed girl's life changes when she meets Aman. But Aman has a secret of his own which changes their lives forever. Embroiled in all this is Rohit, Naina's best friend who conceals his love for her.",
       rating:"IMDb rating:7.9/10",
      date:"5th March 2023",
      article:"Kal Ho Naa Ho film eventually grossed over Rs 600 million worldwide, becoming the top grossing Bollywood Film Worldwide, second top-grossing movie in India, as well as the top-grossing Bollywood film in the overseas market that year. Naina is an Indian girl who lives with her father, mother and grandmother in India. Unable to handle the constant bickering between his mother and his wife, he kills himself. Naina resigns herself to a live a life amidst the constant arguments. She hopes to eventually wed Rohit, and live with him, despite his failings.Then Aman moves in next door, and both fall in love with each other. Naina would like to get married to him, but he would like Naina to get married to Rohit. Naina must now find out why Aman is refusing to marry her, and if at all, there is another woman in his life"
    },
    {
        category:"bollywood",
        id:4,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
       name:"ZINDAGI NA MILEGI DOBARA" ,
       review:"Three friends decide to turn their fantasy vacation into reality after one of their friends gets engaged.Zindagi Na Milegi Dobara (You Only Live Once), also abbreviated as ZNMD, is a 2011 Indian Hindi-language buddy road comedy drama film directed by Zoya Akhtar and produced by Farhan Akhtar and Ritesh Sidhwani under Excel Entertainment. ",
       rating:"IMDb rating:8.2/10",
      date:"5th March 2023",
      article:"Zindagi Na Milegi Dobara movie is about male bonding and things and situations that challenge friendship.The story revolves around 3 young men take a  holiday that changes their lives forever.Kabir (Abhay Deol) has just met Natasha. 6 months later they are engaged. He wants to go on an extended bachelor party. A 3 week road trip with Imraan (Farhan Akhtar) and Arjun (Hrithik Roshan)- his 2 best friends since school. The only problem is Arjun is too tied up with work. After much emotional blackmail and cajoling the boys set off on a journey they were meant to take 4 years ago. A fantasy holiday they had planned to take after college but never happened. A road trip where each one gets to do the ultimate sport of his choice and the other 2 just have to do it with him. Whether they want to or not Kabir Imraan and Arjun meet up in Barcelona and set off on an adventure that will not only make them iron out their differences but also face their fears, after their perception, unravel their fabric, force them to break out of the box and teach them to seize the day.In other words a holiday that will change their lives forever."
    },
    {
        category:"bollywood",
        id:5,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BMjRjMTYwMTYtMmRkNi00MmVkLWE0MjQtNmM3YjI0NWFhZDNmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
       name:"DIL CHAHTA HAI" ,
       review:"Three inseparable childhood friends are just out of college. Nothing comes between them - until they each fall in love, and their wildly different approaches to relationships creates tension.",
       rating:"IMDb rating:8.1/10",
      date:"5th March 2023",
      article:"Dil Chahta Hai is about three distinct characters, Akash (Aamir Khan), Sameer (Saif Ali Khan) and Siddharth (Akshaye Khanna), their individual relationships and the effect that these relationships have on them.Akash is fun-loving, non-believer in love. Sameer is always ready for love-but does not know its true meaning. Siddharth is the more serious of the trio. He is sensitive, understanding, caring ... in short the perfect man for any girl. He falls in love with a middle-aged, slightly alcoholic divorcée Tara Jaiswal. Akash cannot understand this relationship and when he insults Siddharth's true love, Siddharth slaps him. This causes a rift between both and they go their separate ways. Subsequently Akash too realizes the meaning of true love when the vivacious, bubbly Shalini comes in his life. Same happens with Sameer when he meets Pooja. So finally we get to see how these boys become men."
    },
    {
        category:"bollywood",
        id:6,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BMDc1ZDBkODMtYjI0MC00NDcyLWFhMGUtYzM4NDQyMzgyYzg1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
       name:"WAKE UP SID" ,
       review:"The story of a lazy Mumbai college student who does absolutely nothing, with a turn of events will Sid realize his potential in this world and become a success in the fast-paced life of Mumbai.",
       rating:"IMDb rating:7.6/10",
      date:"5th March 2023",
      article:"Wake Up Sid movie is Mumbai-based romance about urban relationships and revolves around a good looking young guy (Ranbir Kapoor) who falls for an older and simple woman (Konkona Sen Sharma), a writer from Kolkata.The film starts with the story of Sidharth Mehra (Ranbir Kapoor), a lazy, unmotivated slacker from Mumbai whose life undergoes a series of changes after taking his final year college exams. Sid's world is breezy, carefree, and without any true responsibilities. The most important elements in his life are his friends, his camera, his car, and his X-box 360.Sid thrives around his two best friends, Rishi (Namit Das) and Laxmi (Shikha Talsania), very rarely communicates with his mother Sarita (Supriya Pathak) and takes his father Ram Mehra (Anupam Kher), and all his hard earned wealth for granted. Despite all these traits, Sid is an honest boy; sweet, funny, and above all, a good friend. Aisha Bannerjee (Konkona Sen Sharma), an aspiring writer from Calcutta, learns this soon enough when her path crosses with Sid's on her first day in Bombay, Ambitious, well-read, and driven, Aisha has come to Bombay to realize her dreams as a writer. Despite their contrasting personalities. Sid becomes Aisha's first friend in the city.As Aisha sets up her life in Bombay, with the help of Sid and his gang, Sid allows for time to fly by over long drives, parties that stretch well into dawn, and endless hours doing absolutely nothing. But summers vary rarely dull these days and Sid's summer is no different. A series of circumstances and events compel him to take stock of his life and take a hard look at himself. Will he, at some point figure out what he's supposed to be doing with his life?"
    },
{
    category:"food",
    id:7,
   imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Indian-Cuisine.jpg",
   name:"TASTE OF INDIA  " ,
   review:"No vacation is complete without enjoying a wholesome Indian meal. Indian cuisine offers some of the most yummy dishes like Tandoori Chicken, Paneer Butter Masala, Naan bread, and many more. Those who had the chance too tuck into the best, have always licked their fingers after each meal.Apart from some of these dishes mentioned above, Indian cuisine is known for its deserts right from Gulab Jamun, Halwa and much more. They say no meal is complete without desert, so when are you giving yourself a treat?",
   rating:"FOOD",
  date:"5th March 2023",
  article:"India has several thousand castes and tribes, sixteen official languages and several hundred dialects, six major world religions, and many ethnic and linguistic groups. Food in India is an identity marker of caste, class, family, kin- ship, tribe affiliation, lineage, religiosity, ethnicity, and increasingly, of secular group identification. How one eats, what one eats, with whom, when, and why, is key to understanding the Indian social landscape as well as the relationships, emotions, statuses, and transactions of people within it.Food (Sanskrit— bhojana,“that which is to be enjoyed,” Hindi— khana, Tamil— shapad) presents a way to understand everyday Indian culture as well as the complexities of identity and interaction with other parts of the world that are both veiled and visible. In India today,with a growing economy due to liberalization and more consumption than ever in middle class life, food as something to be enjoyed and as part of Indian culture is a popular topic. From a 1960s food economy verging on famine, India is now a society where food appears plentiful, and the aesthetic possibilities are staggering. Cooking shows that demonstrate culinary skills on television, often with celebrity chefs or unknown local housewives who may have won a competition, dominate daytime ratings. Local indigenous specialties and ways of cooking are the subjects of domestic and international tourism brochures. Metropolitan restaurants featuring international cuisines are filled with customers. Packaged Indian and foreign foods sell briskly in supermarkets, and indigenous street food and hole-in-the wall cafés have never been as popular. Yet lifestyle magazines tout healthy food, nutritious diets, locally sourced ingredients, and sustainable and green alternatives. India’s understanding of its own cultures and its complex historical and contemporary relations with foreign cultures are deeply evident in public conceptualizations of food as well as in culinary and gastronomic choices and lifestyles."
},
{
    category:"food",
        id:8,
        name:"TASTE OF FRANCE",
       imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/French-Cuisine.jpg" ,
       review:"Known for its class and finest ingredients, French cuisine is home to the best gourmet meal and Michelin guide.  Right from truffles, sea food, croissants and baguette, each dish is cooked to detail and had with a glass of wine. Every flavour and spice will burst in one's mouth and will leave them craving for more.If you haven't given those taste buds a treat to the finest yet, then what are you waiting for? It is time you let your taste buds have a part of its own.",
       rating:"FOOD",
      date:"5th March 2023",
      article:"Some of the inspiration for French cuisine can be traced back to medieval times. Back then, nobility dined on multi-course meals composed of wild game, meat, fruit, and grains, while peasants ate diets high in vegetables and legumes. Expensive salt and imported spices were widely used in the kitchens of the elite and were considered a status symbol.With few ways to preserve food, people in ancient times decided what ingredients to use based on what they had immediately available. Modern French cooking also utilizes fresh, seasonal ingredients.Members of the upper class often utilized these seasonal ingredients to host banquets or feasts that showed off their wealth. These dishes were elaborately presented to impress guests, and this emphasis on presentation is maintained in modern French cooking.Haute cuisine translates to “high cuisine” and refers to a shift in French cooking from an emphasis on abundance and quantity to an emphasis on moderation and quality. Marie-Antoine Carême is often credited with leading this charge in the 1800s. He taught French cooking as a sophisticated art form that required technique and precision, and his recipe manuals made French cuisine more accessible.Georges Auguste Escoffier, known as the King of Chefs and Chef of Kings and our school’s namesake, brought haute cuisine to the modern world. He revolutionized the fundamentals of French cooking including how food is presented and how it’s served. With his publication of Le Guide Culinaire in 1903, Escoffier adapted haute cuisine to be more modern."
},
{
    category:"food",
        id:9,
       imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Chinese-Cuisine.jpg",
       name:"TASTE OF CHINA" ,
       review:"One of the most diverse cuisines in the world, Chinese cuisine has been around for over 200 years. Some of the ingredients are chosen from the greens in the mountains and some of the finest people should tuck into is the fresh, salty seafood and lamb. It is one of the various types of cuisines that has remained a favourite throughout.",
       rating:"FOOD",
      date:"5th March 2023",
      article:"The phrase is a testament to the popularity of Chinese food around the world. Food is an important part of daily life for Chinese people. Chinese not only enjoy eating but believe eating good food can bring harmony and closeness to the family and relationships.Shopping daily for fresh food is essential for all Chinese cooking. Unlike the fast food society of the U.S., the Chinese select live seafood, fresh meats and seasonal fruits and vegetables from the local market to ensure freshness. This means swimming fish, snappy crabs, and squawking chickens. Even prepared foods such as dim sum or BBQ duck for to go orders must gleam, glisten, and steam as if just taken out of the oven.Chinese people in general are not as concerned about nutrition as Western culture. They are more concerned with the food’s texture, flavor, color, and aroma. These are the crucial points for good Chinese cooking. Chinese daily meals consist of four food groups: grains, vegetables, fruit, and meat. Because of lactose intolerance, Chinese do not consume large amounts of dairy products. Instead, Chinese substitute these with soymilk and tofu, which also contain large amounts of protein and calcium. Vegetables, fruits, and meats are usually fresh. Some exceptions include preserved vegetables such as snow cabbage or mustard greens, preserved eggs, aka “thousand year old eggs” or salted and dried fish. Other exceptions include snack items such as beef jerky, cuttlefish jerky, sweet and sour preserved plums, or dehydrated mango slices. Canned or frozen foods are seldom eaten. Western desserts such as cookies, cakes, pies, and ice cream are eaten only on special occasions such as birthdays and weddings. After dinner, families usually eat seasonal fruit as dessert. Chinese desserts such as red bean soup, sweet white lotus’s seed soup, or steam papaya soup are served every so often as a special treat on a hot summer’s night."
},
{
    category:"food",
        id:10,
       imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Japanese-Cuisine.jpg",
       name:"TASTE OF JAPAN" ,
       review:"Have you ever eaten with chopsticks? if you haven't, then you should tuck into some of the finest Japanese food with chopsticks. Some of the most well known Japanese cuisines are Sushi and Tofu.  The flavours has always a rich taste one's mouth, which is not something that happens with every dish. These are dishes that can be eaten with fried vegetables and boiled rice.",
       rating:"FOOD",
      date:"5th March 2023",
      article:"Visitors to Japan today witness a huge array of food choices, ranging from traditional Japanese cooking, Chinese, Korean, to the increasing available cooking of recent immigrants to Japan from various parts of the world. Of course, to this, so-called Western food goes into the mix. Western food comes in as many types as there are nations, with Italian and French now being very popular. Then there is fast food, offered by such outlets as McDonald's, Pizza Hut, and the like. On any block of a Japanese town, one is likely to find eateries offering a rich mixture of food choices. One finds, too, the Japanese eat meals that show a variety of foreign influences, without much cognizance of what influences come from which countries—for breakfast, they are as comfortable with ham and eggs, salad, buttered toast, and coffee as they are with a traditional breakfast fare, consisting of rice, miso soup, seaweed, and grilled fish. Lunch could be a plate of spaghetti with tomato sauce (originally Italian), hot bowls of rice with delicious, spicy toppings (originally Korean), or a steaming bowl of ramen noodles with soup (originally Chinese). For a snack, they may have cheesecake and English tea, Japanese sweets and green tea, or cold soba noodles dipped in sauce. Dinner may be sukiyaki, tenpura (originally said to be Portuguese, referring to fried vegetarian food eaten during Lent), or something as perennial favorite as curry and rice (originally Indian).At many restaurants, customers can decide on their order by looking at very realistic wax models of their menu offerings at the storefront-so real that one can see details like bubbles in a carbonated drink and almost smell the melted cheese on gratin dishes. What makes Japanese so passionate about eating? How is Japanese cooking different from Chinese or Korean cooking, and for that matter, so-called Western cooking? What can we learn about Japanese people and their culture from what they eat? These are some of the fundamental issues involved."
},
{
    category:"food",
        id:11,
       imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Italian-Cuisine.jpg",
       name:"TASTE OF ITALY" ,
       review:"Spaghetti, Pasta, Pizza and a few others, are some of the various types of Italian cuisines people from around the world love and are ordering it at restaurants or eating at home. Italian cuisine is one of the best and the true taste they say is only found in Italy.Some of the typical Italian products are tomatoes and basil, olive oil and Prosciutto de Parma. Cheese, cakes, ice-cream, fruit, sweets and cookies are some of the most favorite deserts among the Italians.",
       rating:"FOOD",
      date:"5th March 2023",
      article:"The Italian peninsula is packed with diverse culinary cultures which produce different Italian dishes. For instance, Sicily produces seafood dishes while Tuscany is best known for its simple yet rustic specials.Other nationalities from different countries have also adopted the Italian food tradition and have even become a staple food on their tables. For example, Americans are very much in love with pizza and pasta which is a popular Italian dish.Additionally, Italian food culture uses distinct ingredients for all of their dishes such as tomato, eggplant, pasta, cured meats, and cheese. You must not forget about the sweet Italian desserts that will surely conclude your meal with a bang.Italian food culture has influenced a lot of countries already. It is known to captivate the taste buds of so many people from different cultures around the world. Thus, these people adopted what they liked about Italian food and added locally grown ingredients and incorporated them into their own traditional dishes, and made them their own. The most important aspect that you must know about the Italian food culture is that their authentic dishes are only made with a few ingredients. However, these ingredients are carefully chosen and if the ingredient is not the freshest it can be they will not buy it but substitute for better quality or not make the dish at all. Each ingredient must shine since there are only a few ingredients."
},
{

        category:"food",
            id:12,
           imgUrl:"https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Spanish-Cuisine.jpg",
           name:"TASTE OF SPAIN" ,
           review:"Every time people hear of Spanish cuisines, they feel the need to go to Spain. Well, they aren’t entirely wrong.  Spanish cuisine has a character of its own as it offers a diverse range of seafood along with Paella, tapas, stews, chorizo, Serrano ham and beans. The cuisine is not homogeneous and the culture of the country is defined by its food.",
           rating:"FOOD",
          date:"5th March 2023",
          article:"It's no secret that food and culture go hand in hand. A country's traditional dish can tell you a lot about it, and Patatas Bravas tells us that Spain makes delicious yet light food.Patatas Bravas is a traditional Spanish tapas that has been an integral part of its cuisine for centuries. Its main ingredients are crispy fried potatoes and a spicy, light sauce on top.You can find this dish in almost all restaurants and tapas bars across Spain, and especially in Madrid.It's an absolute must if you want to get a taste of Spanish cuisine without too much of a hassle.The people of Spain love their food. In fact, the typical Spaniard probably eats more food in a day than most people in the United States. However, they take their time eating, spread their meals throughout the day, and walk between meals.Explore an average day of Spanish meals from breakfast to dinner. Find out more about when mealtimes are and learn what a typical menu looks like. This is useful advice that will prepare you for a trip to Spain."
    
},
{
    

        category:"hollywood",
            id:13,
           imgUrl:"https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_FMjpg_UX1000_.jpg",
           name:"HARRY POTTER" ,
           review:"As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
           rating:"IMDb rating:8/10",
          date:"5th March 2023",
          article:"At Malfoy Manor, Snape tells Voldemort the date that Harry's friends are planning to move him from the house on Privet Drive to a new safe location, so that Voldemort can capture Harry en route. As Harry packs to leave Privet Drive, he reads two obituaries for Dumbledore, both of which make him think that he didn't know Dumbledore as well as he should have. Downstairs, he bids good-bye to the Dursleys for the final time, as the threat of Voldemort forces them to go into hiding themselves.The Order of the Phoenix, led by Alastor “Mad-Eye” Moody, arrives to take Harry to his new home at the Weasleys' house, the Burrow. Six of Harry's friends take Polyjuice Potion to disguise themselves as Harry and act as decoys, and they all fly off in different directions. The Death Eaters, alerted to their departure by Snape, attack Harry and his friends. Voldemort chases Harry down, but Harry's wand fends Voldemort off, seemingly without Harry's help."
    

},{

    category:"hollywood",
        id:14,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
       name:"INCEPTION" ,
       review:"Every time people hear of Spanish cuisines, they feel the need to go to Spain. Well, they aren't entirely wrong.  Spanish cuisine has a character of its own as it offers a diverse range of seafood along with Paella, tapas, stews, chorizo, Serrano ham and beans. The cuisine is not homogeneous and the culture of the country is defined by its food.",
       rating:"IMDb rating:8.8/10",
      date:"5th March 2023",
      article:"Inception is a sci-fi action thriller film. Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved.Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible: inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming."

},{

    category:"hollywood",
        id:15,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BYjBmM2FhMmYtNjU1My00OTI1LWFjNjQtYzgyNWQ4Y2E0ZmQxL2ltYWdlXkEyXkFqcGdeQXVyNzE4NDc2Mjc@._V1_.jpg",
       name:"INTERSTELLAR" ,
       review:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival",
       rating:"IMDb rating:8.6/10",
      date:"5th March 2023",
      article:"Interstellar plot and summaryInterstellar is a 2014 movie that was directed by Christopher Nolan and written by Christopher Nolan and Jonathan Nolan. The film received four Academy Award nominations for Best Original Score, Best Production Design, Best Sound Mixing, and Best Sound Editing and the VFX (Visual Effects) were so well regarded that they won the Oscar for Best Visual Effects.Although Interstellar received good-not-great reviews upon release, it's since garnered more acclaim and it frequently places on lists of the best sci-fi movies ever made.Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct. The film's protagonist is Cooper (Matthew McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy. Dr. Brand (Michael Caine) explains to Cooper that NASA previously sent another group (Lazarus) to find a habitable planet but they've gone silent."

},{

    category:"hollywood",
        id:16,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BMTU1NTUwMjQxN15BMl5BanBnXkFtZTgwOTQ2MjEyMDE@._V1_.jpg",
       name:"THE SHAWSHANK REDDEMPTION" ,
       review:"Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
       rating:"IMDb rating:9.3/10",
      date:"5th March 2023",
      article:"AYE The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont and starring Tim Robbins and Morgan Freeman.Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, a banker who spends 19 years in Shawshank State Prison for the murder of his wife and her lover despite his claims of innocence. During his time at the prison, he befriends a fellow inmate, Ellis Boyd Red Redding, and finds himself protected by the guards after the warden begins using him in his money laundering operation. Despite a lukewarm box office reception that barely recouped its budget, the film received multiple award nominations and favorable reviews from critics for its acting and realism. It has since enjoyed a remarkable life on cable television, VHS, DVD, and Blu-ray and is thought of as one of the greatest movies of all time. It was included in the American Film Institute's 100 Years...100 Movies 10th Anniversary Edition."

},{

    category:"hollywood",
        id:17,
       imgUrl:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
       name:"THE GODFATHER" ,
       review:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
       rating:"IMDb rating:9.2/10",
      date:"5th March 2023",
      article:"During a backyard wedding reception for his daughter, Connie, and his new son-in-law, Carlo Rizzi, Don Vito Corleone, a Mafia boss known as the Godfather, conducts business in his office. With him are his oldest son, Sonny, and his adopted son and family lawyer, Tom Hagen. Several people come to Vito’s office to make requests, including Bonasera, an undertaker seeking revenge for a crime against his daughter, and Johnny Fontane, a Frank Sinatra-like singer and actor who wants Vito to help land him a part in a movie. As the wedding reception draws to a close, Vito dispatches Tom to Los Angeles to talk to Jack Woltz, the studio owner. Despite Tom’s prodding, Woltz refuses to give Fontane the part, so the Corleones make Woltz “an offer he can’t refuse.” The day after the meeting with Tom, Woltz wakes up in a blood-stained bed to discover the severed head of his prized horse under the covers at his feet"

},
{

    category:"books",
        id:18,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659289885i/52529.jpg" ,
       name:"THE SECRET",
       review:"The Secret contains wisdom from modern-day teachers—men and women who have used it to achieve health, wealth, and happiness. By applying the knowledge of The Secret, they bring to light compelling stories of eradicating disease, acquiring massive wealth, overcoming obstacles, and achieving what many would regard as impossible.",
       rating:"Goodreads rating:3.72/5",
      date:"5th March 2023",
      article:"The Secret is a self-help book regarding the power of positive thinking by Rhonda Byrne. The book suggests the notion that like attracts the like, which means if you emit positive energy, it will be very beneficial because you will attract positive things to you. Byrne proposed that positive thinking magnets positive outcomes. Simply believing in what you want to acquire or become will become of you. The book portrays that the secret is mainly about the law of attraction but it also highlights gratitude and visualization. The primary technique of ask, believe and receive is explained further by stating some facts from some of the Secret,s practitioners. The book promotes encouragement for people in times of trials or deepens their urge to succeed. Happiness, wealth, success in relationships, and even health improvement are all justified as achievable by the application of the so-called secret.If you just got out of a very low phase of your life and want to turn your life around by creating a fresh and new YOU, this book will definitely help you. Positive advices from credible people, some of them dates back from history are mentioned here. If you want to know the secret to attaining wealth, success, or even happiness for yourself, the key is revealed in The Secret. The author also advises the readers to evoke any negative thoughts before it materializes. It is written here that you can elude misfortunes plainly by not thinking of it.The book The Secret does not only stress the importance of positive thinking, it also gives the readers the resolution to change themselves. Byrne argues that everything is regulated by our thoughts, and that we are in control of our own outcomes. If you are very open to change your perspectives and maintain it that way to reach a better version of yourself, this book may be helpful. Followers of The Secret declare that it helps them attain their heart’s desire and the improvement of their lives. This could also be you, know the secret and be fulfilled."

},
{

    category:"books",
        id:19,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg" ,
       name:"THE ALCHEMIST",
       review:"Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.",
       rating:"Goodreads rating:3.72/5",
      date:"5th March 2023",
      article:"While sleeping near a sycamore tree in the sacristy of an abandoned church, Santiago, a shepherd boy, has a recurring dream about a child who tells him that he will find a hidden treasure if he travels to the Egyptian pyramids. An old woman tells Santiago that this dream is prophetic and that he must follow its instructions. Santiago is uncertain, however, since he enjoys the life of a shepherd.Next Santiago meets a mysterious old man who seems able to read his mind. This man introduces himself as Melchizedek, or the King of Salem. He tells Santiago about good and bad omens and says that it is the shepherd boy's duty to pursue his Personal Legend. Melchizedek then gives Santiago two stones, Urim and Thummim, with which to interpret omens.Santiago wavers briefly before selling his flock and purchasing a ticket to Tangier, in northern Africa, to which he travels by boat. Shortly after he arrives there, a thief steals all of Santiago's money, so the shepherd boy decides to look for a way to make enough money to return home. He finds work in the shop of a crystal merchant, where Santiago makes improvements that reap considerable financial rewards.After eleven months of working in the shop, Santiago is unsure of how to proceed. Should he return to Andalusia a rich man and buy more sheep? Or should he cross the vast Sahara in pursuit of the hidden treasure of his dreams? He joins a caravan traveling to Egypt.Santiago meets an Englishman who wants to learn the secret of alchemy, or turning any metal into gold, from a famous alchemist who lives at an oasis on the way to the pyramids. While traveling, Santiago begins listening to the desert and discovering the Soul of the World. The caravan eventually reaches the oasis, and there Santiago meets an Arab girl named Fatima and falls in love with her instantly. The caravan leader gathers the travelers together and tells them that tribal warfare prevents them from continuing their journey."

},
{

    category:"books",
        id:20,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638425885i/16299.jpg" ,
       name:"AND THEN THERE WERE NONE",
       review:"First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion:",
       rating:"Goodreads rating:4.28/5",
      date:"5th March 2023",
      article:"Eight people, all strangers to each other, are invited to Indian Island, off the English coast. Vera Claythorne, a former governess, thinks she has been hired as a secretary; Philip Lombard, an adventurer, and William Blore, an ex-detective, think they have been hired to look out for trouble over the weekend; Dr. Armstrong thinks he has been hired to look after the wife of the island's owner. Emily Brent, General Macarthur, Tony Marston, and Judge Wargrave think they are going to visit old friends.When they arrive on the island, the guests are greeted by Mr. and Mrs. Rogers, the butler and housekeeper, who report that the host, someone they call Mr. Owen, will not arrive until the next day. That evening, as all the guests gather in the drawing room after an excellent dinner, they hear a recorded voice accusing each of them of a specific murder committed in the past and never uncovered. They compare notes and realize that none of them, including the servants, knows “Mr. Owen,” which suggests that they were brought here according to someone,s strange plan."

},
{

    category:"books",
        id:21,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg" ,
       name:"TO KILL A MOCKING BIRD",
       review:"The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
       rating:"Goodreads rating:4.27/5",
      date:"5th March 2023",
      article:"To Kill a Mockingbird takes place in the fictional town of Maycomb, Alabama, during the Great Depression. The protagonist is Jean Louise (“Scout”) Finch, an intelligent though unconventional girl who ages from six to nine years old during the course of the novel. She is raised with her brother, Jeremy Atticus (“Jem”), by their widowed father, Atticus Finch. He is a prominent lawyer who encourages his children to be empathetic and just. He notably tells them that it is “a sin to kill a mockingbird,” alluding to the fact that the birds are innocent and harmless.When Tom Robinson, one of the town's Black residents, is falsely accused of raping Mayella Ewell, a white woman, Atticus agrees to defend him despite threats from the community. At one point he faces a mob intent on lynching his client but refuses to abandon him. Scout unwittingly diffuses the situation. Although Atticus presents a defense that gives a more plausible interpretation of the evidence—that Mayella was attacked by her father, Bob Ewell—Tom is convicted, and he is later killed while trying to escape custody. A character compares his death to “the senseless slaughter of songbirds,” paralleling Atticus's saying about the mockingbird.The children, meanwhile, play out their own miniaturized drama of prejudice and superstition as they become interested in Arthur (“Boo”) Radley, a reclusive neighbour who is a local legend. They have their own ideas about him and cannot resist the allure of trespassing on the Radley property. Their speculations thrive on the dehumanization perpetuated by their elders. Atticus, however, reprimands them and tries to encourage a more sensitive attitude. Boo makes his presence felt indirectly through a series of benevolent acts, finally intervening when Bob Ewell attacks Jem and Scout. Boo kills Ewell, but Heck Tate, the sheriff, believes it is better to say that Ewell's death occurred when he fell on his own knife, sparing the shy Boo from unwanted attention. Scout agrees, noting that to do otherwise would be “sort of like shootin'a mockingbird.”"

},
{

    category:"books",
        id:22,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210.jpg" ,
       name:"JANE EYRE",
       review:"again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. She falls in love. ",
       rating:"Goodreads rating:4.14/5",
      date:"5th March 2023",
      article:"When the novel begins, the title character is a 10-year-old orphan who lives with her uncle's family; her parents had died of typhus. Other than the nursemaid, the family ostracizes Jane. She is later sent to the austere Lowood Institution, a charity school, where she and the other girls are mistreated; “Lowood,” as the name suggests, is the “low” point in Jane's young life. In the face of such adversity, however, she gathers strength and confidence.Jane Eyre, novel by Charlotte Brontë, first published in 1847 as Jane Eyre: An Autobiography, with Currer Bell (Brontë's pseudonym) listed as the editor. Widely considered a classic, it gave new truthfulness to the Victorian novel with its realistic portrayal of the inner life of a woman, noting her struggles with her natural desires and social condition."

},
{

    category:"books",
        id:23,
       imgUrl:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630487234i/24213.jpg" ,
       name:"ALICE'S ADVENTURE IN WONDERLAND",
       review:"When Alice sees a white rabbit take a watch out of its waistcoat pocket she decides to follow it, and a sequence of most unusual events is set in motion. This mini book contains the entire topsy-turvy stories of Alice's Adventures in Wonderland and Through the Looking-Glass, accompanied by practical notes and Martina Pelouso's memorable full-colour illustrations.",
       rating:"Goodreads rating:4.06/5",
      date:"5th March 2023",
      article:"Alice sits on a riverbank on a warm summer day, drowsily reading over her sister’s shoulder, when she catches sight of a White Rabbit in a waistcoat running by her. The White Rabbit pulls out a pocket watch, exclaims that he is late, and pops down a rabbit hole. Alice follows the White Rabbit down the hole and comes upon a great hallway lined with doors. She finds a small door that she opens using a key she discovers on a nearby table. Through the door, she sees a beautiful garden, and Alice begins to cry when she realizes she cannot fit through the door. She finds a bottle marked “DRINK ME” and downs the contents. She shrinks down to the right size to enter the door but cannot enter since she has left the key on the tabletop above her head. Alice discovers a cake marked “EAT ME” which causes her to grow to an inordinately large height. Still unable to enter the garden, Alice begins to cry again, and her giant tears form a pool at her feet. As she cries, Alice shrinks and falls into the pool of tears. The pool of tears becomes a sea, and as she treads water she meets a Mouse. The Mouse accompanies Alice to shore, where a number of animals stand gathered on a bank. After a “Caucus Race,” Alice scares the animals away with tales of her cat, Dinah, and finds herself alone again."

},
{

    category:"gardening",
        id:24,
       imgUrl:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglxBScz8_nee3bBiQrjfuRpDHauZL75DgTXSD2rPf79LJ9QmQbChoceld8GTZI7UZNwcbQr8-8DBpS0X-pzxtv45S1NbDvGJC9UA0hIKd_ve_SFNR2-ZOhsxZf2x1EKthMR2CYhy6im7F2tzl5xWPmnwiNkhPGWGc9FUjTXGqgBHvzgq0_gE1Wwk3K/s16000/jade_plant.jpg" ,
       name:"3 THINGS TO REMEMBER WHILE GROWING JADE PLANT",
       review:"Jade plants are low-maintenance, succulent houseplants that are easy to grow in indoors, and they are capable to live for longer time spans if handled with good care! In this article, we'll share those three things which you should keep in mind when you are growing Jade plants.",
       rating:"JADE PLANT",
      date:"5th March 2023",
      article:"ou must be wondering about more steps for how to care for jade plant, but we have a further solution for this. Pets and diseases are severe threats to plants. You need to consider these threats too if you need to grow them. 1- To remove mealybugs and pests, you should use a spray bottle or wipe the insects off gently by rubbing alcohol on a paper towel or cotton swab. 2- You can keep the plant indoors if you need to remove powdery mildew.3- The plant should be cut or started anew if it starts to bear infection.While it’s not that easy to handle these plants, but above jade plant care tips can help in fruitful results. To persuade a jade plant to bear flowers, you can bound it to the roots in a small pot or container and hold backwater. It is observed that the jade plants bloom better in the winter.Usually known to bring luck and money, and prosperity, a Jade plant is worth keeping in your home. In fact, they are a perfect gift option while you are wishing to send you warm wishes to your loved ones."

},
{

    category:"gardening",
        id:25,
       imgUrl:"https://1.bp.blogspot.com/-EHu67UMJ5ok/YTdzJGtFAKI/AAAAAAAAA5A/gL4vose1ZmQes4tRDrVvxtO3lKe-HBfxgCLcBGAsYHQ/s16000/ixora_chinensis.jpg" ,
       name:"HOW TO GROW AND CARE IXORA CHINESIS",
       review:"Native to Asia, Ixora Chinensis plants are attractive, small shrubs that grow in subtropical regions. Grown around the globe, Ixora plants feature bright, colorful clusters of flowers that look like puffballs.Although these plants are easy to grow under the right conditions, growing Ixora plants can be a challenge even for experienced growers.",
       rating:"IXORA CHINESIS",
      date:"5th March 2023",
      article:"Ixoras love the tropical sun. They are their happiest when they get 8-10 hours of direct to partial light in a day. Keep your plants out of the afternoon sun in the harsh summer months to avoid leaf burn. While ixoras can live easily in indirect light, flowering will be infrequent and in smaller clusters.Ixora likes its soil to be consistently moist, but like all other plants it hates soggy soil. Keep the growing medium rich and well-draining and the soil moist at all times. A good rule of thumb is that the soil should never be allowed to dry out. Water them often—the right amount will depend on the weather conditions in your area, though watering frequency will decrease considerably in monsoon and winter.When watering an extremely dried out soil (visible cracks and soil leaving the planter walls) water in batches. Watering all at once allows the water to simply pass through the soil without getting absorbed. Every time a plant is watered, water it thoroughly till you see some draining out of the drainage hole and always empty the under plate."

},
{

    category:"gardening",
        id:26,
       imgUrl:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigVbheyds0dV5fAMXykLxapNo5AbeabQxQdHwC2d7HdAX11Jg20MPcbeX27k1w5P0957wXD9KN4erV4RgL129ltbU3Vr8hYo7j-jPra6SCjgdFUvHHaz7VzIkXMXGPa2zLlJug7JvPAuaol_kvv2PSBxgBydFrlTAaq2JG_nD2REgJch7t625rL-FD/s16000/tecoma_stans.jpg" ,
       name:"HOW TO GROW AND CARE TECOMA PLANT",
       review:"Tecoma Stans plant is a species of flowering plant native to the Americas. It is known for its bright bell-shaped flowers. Its beautiful leaves too offer a beautiful backdrop to the trumpet-shaped flowers.While the hybrids can produce colorful flowers no variety can beat the hardiness of Tecoma Stans which makes it a perfect plant for beginner gardeners. ",
       rating:"TECOMA PLANT",
      date:"5th March 2023",
      article:"It is one of the hardy, low-maintenance and easy to grow the plant. They require well-drained soil and full sun. Tecoma basic cares includes the following:Water tecoma plants deeply about once a week. Allow the soil to dry out slightly between waterings. Fertilize tecoma plants with any organic fertilizer once in every two months. Train a climbing vine tecoma plant on a trellis or other supporting object using plant ties to support the vines.To maintain the shape of shrubs, prune long or unruly branches back to a side branch or bud with sharp pruning shears.Cut off old, damaged or dead branches at their base and remove them. Do this in the springtime before new growth begins.This perennial shrub gets is popular names from the vivid yellow, trumpet-shaped blossoms that bloom in the spring, summer and fall."

},
{

    category:"gardening",
        id:27,
       imgUrl:"https://1.bp.blogspot.com/-Vk3QpPnPHZ0/YTdgWsOiABI/AAAAAAAAA44/1TBpiTtnZ78qpDw5G0Z1Rdi4f_H22HyIQCLcBGAsYHQ/s16000/holy_basil_plant.jpg" ,
       name:"HOW TO GROW AND CARE BASIL PLANT",
       review:"Native to the Indian subcontinent, Holy Basil is a herbal plant with religious and cultural importance. People in other parts of the world might use it as a food ingredient, but for Hindus, this plant is sacred.Holy Basil is majorly grown in tropical areas as a perennial herb.",
       rating:"BASIL PLANT",
      date:"5th March 2023",
      article:"Despite its popularity in Italian and Mediterranean cuisine, basil is actually native to the South Pacific islands and southern Asia. It is a member of the mint family and grows as an annual. It is also quick-growing  from seed to harvest in just about 3 - 4 weeks which makes this a rewarding herb to grow! If you haven't grown herbs before, basil is a great one to start with.Learning how to plant basil is simple as it is one of the easiest herbs to grow. Basil is not the least bit finicky, and with proper planting, care and harvesting, you can enjoy it all summer long. When to plant basil  The earliest time to plant basil is about 2 weeks after the last frost, once the soil is between 50° - 70° F - the warmer the better. It can also be planted during summer.Where to plant basil - Plant basil in a spot that gets plenty of sun. 6 - 8 hours a day is ideal. Growing basil from root propagation - Basil can easily be propagated simply by snipping a small section off an existing plant. Simply place the cutting, cut side down, in a clear glass of water and set it in a sunny spot. Change the water every other day, and soon there will be root growth. Once the roots are 2 inches or more, the basil is ready to be planted. Growing in containers - If planting basil in a container, be sure to use a very large pot. Hot summer days can dry out small pots of soil, which will hurt a growing basil plant. The smaller the pot, the more often the plant will need water."

}
]);
    return(
        <DataContext.Provider value={[data,setData]}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;