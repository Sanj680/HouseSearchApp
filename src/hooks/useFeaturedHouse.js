import {useMemo} from "react"
const useFeaturedHouse=(allHouses) =>{ //useFeaturedHouse is a hook.and a hook is just a function
    const featuredHouse = useMemo(() =>{
        if(allHouses.length){
            const randomIndex = Math.floor(Math.random()* allHouses.length)
            return allHouses[randomIndex]
        }
},[allHouses]);
    return featuredHouse
}

export default useFeaturedHouse