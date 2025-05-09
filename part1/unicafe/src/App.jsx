import { useState } from 'react'

const Header = (props) => <h1>{props.title}</h1>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}{props.symbol}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.stats.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.stats.good} />
        <StatisticLine text='neutral' value={props.stats.neutral} />
        <StatisticLine text='bad' value={props.stats.bad} />
        <StatisticLine text='all' value={props.stats.total} />
        <StatisticLine text='average' value={props.stats.avg} />
        <StatisticLine text='positive' value={props.stats.pos*100} symbol='%' />
      </tbody>
    </table>

  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAverage] = useState(0)
  const [pos, setPositive] = useState(0)

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    avg: avg,
    pos: pos
  }

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
      <Statistics stats={stats}></Statistics>
    </div>
  )
}

export default App