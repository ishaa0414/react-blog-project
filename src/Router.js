import { Routes , Route} from"react-router-dom"
import Bollywood from "./Pages/Bollywood/Bollywood"
import Gardening from "./Pages/Gardening/Gardening"
import Food from "./Pages/Food/Food"
import Hollywood from "./Pages/Hollywood/Hollywood"
import Home from "./Pages/Home/Home"
import Books from "./Pages/Books/Books"

const RouterComponent=()=>{
    return(
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bollywood" element={<Bollywood/>}/>
            <Route path="/books" element={<Books/>}/>
            <Route path="/hollywood" element={<Hollywood/>}/>
            <Route path="/gardening" element={<Gardening/>}/>
            <Route path="/food" element={<Food/>}/>
        </Routes>
        
    )
}
export default RouterComponent;