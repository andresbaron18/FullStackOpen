import { useState } from 'react'
import './App.css'
import { Fragment } from 'react';

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  const Courses = ({ courses }) => {
    return(
      courses.map(curso => (
        <Fragment key={curso.id}>
        
        <Header name={curso.name} ></Header>
        <Content parts= {curso.parts} ></Content>
        <TotalExercises parts= {curso.parts}></TotalExercises>
        </Fragment>
        
      ))
     
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
  return <Courses courses={courses} />
}
export default App
