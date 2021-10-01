import { useEffect } from 'react';
import worldTripServer  from '../server'
export default function Home(){
    
    worldTripServer();
    
    useEffect(() => {
        async function searchContinent(){
            const response = await fetch('/api/continents')
            const data = await response.json()

            console.log(data)
        }

        searchContinent()
    },[])
    return(
        <h1>Hello World!!</h1>
    )
}