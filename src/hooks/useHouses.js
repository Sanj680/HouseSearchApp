import {useState, useEffect} from "react"
const useHouses = () =>{
    const[allHouses,setAllHouses] = useState([])  // has two parts : variable to reflect value of state and second is function to set it
    // array of houses are empty initially
     // when any of the values change function executes
    useEffect(() => {
  
        const fetchHouses = async () => {  //wrapping in async function .the call to fetch returns response object from which json object is got which is in array of houses. 
          const rsp = await fetch("/houses.json");  // fetch calls made to json file to get data
          const houses = await rsp.json(); //rest of the code runs while houses are loaded
          setAllHouses(houses); // storing the fetched houses in components state
        };
        fetchHouses();
      }, []);

      return allHouses
  
}

export default useHouses