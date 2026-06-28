import { useState } from "react"

const App = () =>{
    const [ good, setGood] = useState(0)
    const [neutral, setNeutral]= useState(0)
    const [bad, setBad]= useState(0)


    const goodClick = ()=>{
    setGood(good +1)
    } 
    const neutralClick = ()=>{
    setNeutral(neutral +1)
    } 
     const badClick = ()=>{
    setBad(bad +1)
    } 
 return(
    <div>
         <button onClick={goodClick} >good </button>  
         <button onClick={neutralClick}>neutral</button>        
         <button onClick={badClick}>bad</button>

         <p>Good {good}</p> 
         <p>Neutral {neutral}</p>
         <p>Bad {bad}</p>

    </div>
 )
}

export default App