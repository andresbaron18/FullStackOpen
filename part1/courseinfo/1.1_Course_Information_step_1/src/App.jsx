
const Part = (props) =>{
  return (
    <p> { props.name } {props.exercises} </p>
  )
}
const Content = (props) =>{
   return (
    <div>
      <Part name={props.parts[0].part} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].part} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].part} exercises={props.parts[2].exercises}/>
    </div>
  )
}


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Total = (props)=>{
  return(
  <p>Total exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
const course= 'Half Stack application development'

  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14 }
  ]
  return(
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )

}

export default App