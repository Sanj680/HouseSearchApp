import {useParams} from "react-router-dom"  //adding this component to get details of house in app level. for house/:id url
import House from "./"
import { useContext } from "react";
import HousesContext from "../context/housesContext";

const HouseFromQuery = () =>{ //expects allHouses array as a prop
    const{id} = useParams();  //utilises useParams to get house id
    const allHouses= useContext(HousesContext)
    const house = allHouses.find((h) => h.id ===parseInt(id));  //used to get right house based on id
    
    if(!house)
    return(
    <div>
        House not found
    </div>
    )
    return (
    <House house={house} />
    )}

    export default HouseFromQuery
