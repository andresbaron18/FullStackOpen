import { useState } from 'react'
import './App.css'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  const Course = ({ course }) => {
    return(
      <>
      <Header name={course.name}></Header>
      <Content parts= {course.parts} ></Content>
      <TotalExercises parts= {course.parts}></TotalExercises>
      </>
    )
   }  
    const Header = ({name}) => {
      return (
        <h1> {name} </h1>
    )
   }
   const Content = ({parts}) => {
    return(
      parts.map(part =>(
        <Part
          key={part.id}
          name={part.name}
          exercises={part.exercises}
        />
      ))
    )
      }
      const Part = ({name, exercises}) => {
        return(
           <p>
            {name} {exercises}
          </p>
        )
      }
      const TotalExercises = ({parts}) => {
        
        const total = parts.reduce((iteration, part) => iteration  + part.exercises,0) 
        return(
         <p> total of {total} exercises</p>
           )
      }
    

  return <Course course={course} />
}
export default App
