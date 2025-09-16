const AddNewRecord = (props) => {
    return (
<>
    <h2>Add new record:</h2>
    <form onSubmit={props.addRecord}>
        <div>
            name: 
            <input 
                value={props.newName}
                onChange={props.handleNameChange}
        />
        </div>
        <div>
            number: 
            <input 
                value={props.newNumber}
                onChange={props.handleNumberChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form> 
</>
    )
}

export default AddNewRecord;