const OneRecord = (props) => {
  return (
            <div>
                {props.person.name}, {props.person.number}
                <button id={props.person.id} onClick={props.deleteRecord}>Delete</button>
            </div>
    )}  

export default OneRecord;