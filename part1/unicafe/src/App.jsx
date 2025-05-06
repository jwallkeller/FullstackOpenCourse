import { useState } from 'react'

const Header = (props) => <h1>{props.title}</h1>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Display = (props) => <p>{props.text} {props.stat}</p>

const Percentage = (props) => <p>{props.text} {props.stat * 100}%</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAverage] = useState(0)
  const [pos, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedTotal = total + 1
    setGood(good + 1)
    setTotal(updatedGood + neutral + bad)
    setAverage((updatedGood - bad) / updatedTotal)
    setPositive(updatedGood / updatedTotal)
  }
  
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    const updatedTotal = total + 1
    setNeutral(neutral + 1)
    setTotal(good + updatedNeutral + bad)
    setPositive(good / updatedTotal)
  }
  
  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedTotal = total + 1
    setBad(bad + 1)
    setTotal(good + neutral + updatedBad)
    setAverage((good - updatedBad) / updatedTotal)
    setPositive(good / updatedTotal)
  }

  return (
    <div>
      <Header title="give feedback" />
      <Button onClick={handleGoodClick} text='good'></Button>
      <Button onClick={handleNeutralClick} text='neutral'></Button>
      <Button onClick={handleBadClick} text='bad'></Button>
      <Header title="statistics" />
      <Display text='good' stat={good} />
      <Display text='neutral' stat={neutral} />
      <Display text='bad' stat={bad} />
      <Display text='all' stat={total} />
      <Display text='average' stat={avg} />
      <Percentage text='positive' stat={pos} />
    </div>
  )
}

export default App