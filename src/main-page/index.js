
 //useEffect enables to create sideeffects when state of a component changes
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './main-page.css';
import Header from './header';
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import HousesContext from "../context/housesContext";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";

function App() {
  
    const allHouses  = useHouses()  //useMemo used for storing the value of fetched houses.
      // checking if house array contains anything
        const featuredHouse = useFeaturedHouse(allHouses);
        
  //load data
  return (
    
    <Router>
      <HousesContext.Provider value ={allHouses}>
   <div className ="container">
  < Header subtitle ="Providing houses all over the world" />
   <HouseFilter />
<Routes>
    <Route path="/" element={<> <FeaturedHouse house ={featuredHouse}/></>}/>
    <Route path ="/searchresults/:country" element={<> <SearchResults  /></>}/>
    <Route path ="/house/:id" element={<> <HouseFromQuery  /></>}/>
</Routes>
          </div>
          </HousesContext.Provider>
    </Router>
     
  );
}

export default App;


  

