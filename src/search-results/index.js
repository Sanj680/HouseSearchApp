import SearchResultsRow from "./search-results-row"
import {useParams} from "react-router-dom"   
import { useContext } from "react";
import HousesContext from "../context/housesContext";

const SearchResults= () =>{
    const{country} = useParams()  //used to produce an object with properties that matches data sent in the url
    const allHouses= useContext(HousesContext)
    const filteredHouses = allHouses.filter((h) => h.country===country) //filter allhouses obj passed as a prop
   

    return(
        <div className="mt-2">
            <h4>Results for {country}:</h4>
            <table className ="table table-hover">
                <tbody>
                    {filteredHouses.map((h) =>(
                        <SearchResultsRow key ={h.id} house={h} /> //passing each house which is filtered
                    ))}
                </tbody>
            </table>
        </div>

    )
 }

 export default SearchResults

                    
