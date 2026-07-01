import { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }
 
  const all = good + neutral + bad

  const positive = all === 0
    ? 0
    : (good / all) * 100

  const average = all === 0
    ? 0
    : ((good * 1) + (neutral * 0) + (bad * -1)) / all

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>

      <h1>statistics</h1>

    {
       all === 0 
        ? 
        <p>No feedback given</p>
        :<Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    }   
    </div>
  )
}

const  Statistics = (props) => {
  
    return (
       <table>

      <tbody>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.all} />
      <StatisticsLine text="average" value={props.average} />
      <StatisticsLine text="positive" value={props.positive + " %"} />
      
       </tbody>
       </table>
     
      
  )

    }
const StatisticsLine = (props) =>{
  return(
  
      <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
      </tr>
   
  )

}

export default App
