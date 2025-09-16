import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState([2,5,7,0,1,8,3,11])

  const [popular, setPopular] = useState(7)

  function selectNum() {
    return Math.floor(Math.random()*8)
  }

  const voteClick = (num) => {
    setVotes({ ...votes, [num]:votes[num]+1 })
    if (votes[num] >= votes[popular]) {
      setPopular(num)
    }
  }

  const setToValue = (newValue) => {
    setSelected(newValue)
  }

  return (
    <div>
      <p><b>Anecdote of the day:</b></p> 
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has <b>{votes[selected]}</b> votes.</p>
      <Button onClick={() => voteClick(selected)} text='Vote'/>
      <Button onClick={() => setToValue(selectNum())} text='Next anecdote'/>
      <p><b>Anecdote with most votes:</b></p>  
      <p>{anecdotes[popular]}</p>
      <p>It has <b>{votes[popular]}</b> votes.</p>
    </div>
  )
}

export default App