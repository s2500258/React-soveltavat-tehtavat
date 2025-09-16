import { useState } from 'react'
import './table.css'
import Button from './components/Button'
import StatisticLine from './components/StatisticLine'

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let average = (props.good - props.bad)/all
  let positive = props.good*100/all

  if (all === 0) {
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }

  return (
    <div>
    <table className="stats-table">
      <tbody>
        <StatisticLine statName="Good" statValue={props.good} />
        <StatisticLine statName="Neutral" statValue={props.neutral} />
        <StatisticLine statName="Bad" statValue={props.bad} />
        <StatisticLine statName="All" statValue={all} />
        <StatisticLine statName="Average" statValue={average.toFixed(2)} />
        <StatisticLine statName="Positive" statValue={positive.toFixed(2)+'%'} />
      </tbody>
    </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <p><b>Give us your feedback:</b></p>
      <Button onClick={increaseGood} text="Good"/>
      <Button onClick={increaseNeutral} text="Neutral"/>
      <Button onClick={increaseBad} text="Bad"/>
      <p><b>Statistics:</b></p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

// const Button = (props) => (
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
// )

// const Statistics = (props) => {
//   let all = props.good + props.neutral + props.bad
//   let average = (props.good - props.bad)/all
//   let positive = props.good*100/all

//   if (all === 0) {
//     return (
//       <div>
//         <p>No feedback given.</p>
//       </div>
//     )
//   }

//   return (
//     <div>
//     <table className="stats-table">
//       <tbody>
//         <tr>
//           <td>Good</td>
//           <td>{props.good}</td>
//         </tr>
//         <tr>
//           <td>Neutral</td>
//           <td>{props.neutral}</td>
//         </tr>
//         <tr>
//           <td>Bad</td>
//           <td>{props.bad}</td>
//         </tr>
//         <tr>
//           <td>Total</td>
//           <td>{all}</td>
//         </tr>
//         <tr>
//           <td>Average</td>
//           <td>{average.toFixed(2)}</td>
//         </tr>
//         <tr>
//           <td>Positive</td>
//           <td>{positive.toFixed(2)}%</td>
//         </tr>
//       </tbody>
//     </table>
//     </div>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const increaseGood = () => setGood(good + 1)
//   const increaseNeutral = () => setNeutral(neutral + 1)
//   const increaseBad = () => setBad(bad + 1)

//   return (
//     <div>
//       <p><b>Give us your feedback:</b></p>
//       <Button onClick={increaseGood} text="Good"/>
//       <Button onClick={increaseNeutral} text="Neutral"/>
//       <Button onClick={increaseBad} text="Bad"/>
//       <p><b>Statistics:</b></p>
//       <Statistics good={good} neutral={neutral} bad={bad}/>
//     </div>
//   )
// }