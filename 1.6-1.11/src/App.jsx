import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(
    <button onClick = {handleClick}>{text}</button>
  )
}

const Total = (props) => props.good + props.neutral + props.bad

const Average = (props) => (props.good - props.bad)/Total(props)

const GoodRatio = (props) => (props.good/Total(props))*100 + '%'



const StatisticLine = (props) =>{
    return(
        <tr>
            <td>{props.text}</td>  
            <td>{props.stat}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) =>{
  let t = Total({good, neutral, bad})
  if (t === 0){
    return(
        <p>no feedback given</p>
    )
  }
  return(
    <table>
        <tbody>
            <StatisticLine text='good' stat={good}/>
            <StatisticLine text='neutral' stat={neutral}/>
            <StatisticLine text='bad' stat={bad}/>
            <StatisticLine text='all' stat={t}/>
            <StatisticLine text='average' stat={Average({good, neutral, bad})}/>
            <StatisticLine text='positive' stat={GoodRatio({good, neutral, bad})}/>
        </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {setGood(good + 1)}
  const addNeutral = () => {setNeutral(neutral + 1)}
  const addBad = () => {setBad(bad + 1)}

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text='good'/>
      <Button handleClick={addNeutral} text='neutral'/>
      <Button handleClick={addBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App