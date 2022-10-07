import {useNavigate} from "react-router-dom"  // lets us navigate to other page. Call the hook to get the object 
import { useContext } from "react";
import HousesContext from "../context/housesContext";

const HouseFilter = () => {  //accepting prop 
    const navigate = useNavigate();
    const allHouses= useContext(HousesContext)
    const countries = allHouses? Array.from(new Set(allHouses.map((h) => h.country)))  //filtering out all countries and replacing empty item in list
    :[];
    countries.unshift(null); //filtering out distinct countries and replacing empty entry as first item in the list.

    const onSearchChange = (e) =>{
        const country = e.target.value;  // extract which value of country is selected.
        navigate(`/searchresults/${country}`)  // using navigate function we can go to another URL .
    }
    return (
        <div className="row mt-3">
          <div className="offset-md-2 col-md-4">
            Look for your dream house in country:
          </div>
          <div className="col-md-4 mb-3">
            <select className="form-select" onChange={onSearchChange}>
              {countries.map((c) => (  //creating option component for each country ;valuefor each option is country name
                <option key={c} value={c}> {/*key creates association between array item and rendered item , key is the country name*/}
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    };
    
    export default HouseFilter;