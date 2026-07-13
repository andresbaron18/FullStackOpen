import { Fragment } from 'react'

const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Content = ({ parts }) => (
  parts.map((part) => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ))
)

const TotalExercises = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Total of {total} exercises</p>
}

const Components = ({ courses }) => (
  <>
    {courses.map((course) => (
      <Fragment key={course.id}>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <TotalExercises parts={course.parts} />
      </Fragment>
    ))}
  </>
)

export default Components