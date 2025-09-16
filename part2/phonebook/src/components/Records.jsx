import OneRecord from "./OneRecord";

const Records = (props) => {
  return (
    <>
    <h2>Numbers:</h2>
        {props.persons.map((record) => (
              <OneRecord key={record.name} person={record}/>
        ))}  
    </>
  )
}

export default Records;