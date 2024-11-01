import { useState } from "react"

const Part = ({part, exercises}) =>{
  return(
    <p>{part} {exercises}</p>
  )
}

const Header = (props) =>{
  return (
    <h1>{props.course}</h1>  
  )
}

const Content = (props) =>{
  return (
    <>
      <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) =>{
  let totalExercises = 0
  totalExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return(
    <p>Number of exercises: {totalExercises}</p>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () =>{
    setCounter(counter + 1)
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course['parts']}/> 
      <p>Counter: {counter}</p>
      <button onClick={handleClick}>        
        plus
      </button>
    </div>
  )
}

export default App
