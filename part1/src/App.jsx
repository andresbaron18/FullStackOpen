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
    const all = good + neutral + bad
     
    const positive = all === 0 ? 0 :(good / all) * 100
    const average =  all === 0 ? 0 :((good*1)+(neutral*0)+(bad*-1))/all
 return(
    <div>
         <button onClick={goodClick} >good </button>  
         <button onClick={neutralClick}>neutral</button>        
         <button onClick={badClick}>bad</button>

         <h1>give feedback</h1>
         <h2>statistics</h2>

         <p>Good {good}</p> 
         <p>Neutral {neutral}</p>
         <p>Bad {bad}</p>
         <p>all {all} </p>
         <p>positive {positive}% </p>
         <p>average {average} </p>

    </div>
 )
}
export default App