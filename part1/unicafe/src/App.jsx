import { useState } from 'react'

const Header = (props) => <h1>{props.title}</h1>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Display = (props) => <p>{props.text} {props.stat}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)
  
  const handleNeutralClick = () => setNeutral(neutral+1)
  
  const handleBadClick = () => setBad(bad+1)

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
    </div>
  )
}

export default App