import { useState, useEffect } from 'react'
import recordsService from './services/records' 

import Records from './components/Records'
import AddNewRecord from './components/AddNewRecord'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])

    useEffect(() => {
      recordsService
        .getAll()
        .then(initialRecords => {
           setPersons(initialRecords)
           })
      }, [])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')
    
    const addRecord = (event) => {
      event.preventDefault();
      const oldId = persons.findIndex(item => item.name === newName);
      if (oldId !== -1){
        if (window.confirm(persons[oldId].name + ' is alredy in phonebook. Are you sure you want to replace its number?')) {
        const recordObject = {name: newName, number: newNumber, id: persons[oldId].id}
        recordsService
            .put(recordObject)
            .then(() => {
              const newPersons = [...persons]
              newPersons[oldId].number = newNumber
              setPersons(newPersons)
            }) }
      } else {
        const recordObject = {name: newName, number: newNumber};
        recordsService
            .create(recordObject)
            .then(returnedNote => {
              setPersons(persons.concat(returnedNote))
            })
      }
      setNewName('');
      setNewNumber('');
    }

    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }

    const handleSetSearch = (event) => {
      setSearch(event.target.value)
    }

    const deleteRecord = (event) => {
      event.preventDefault()
      if (window.confirm("Are you sure you want to delete this record?")) {
      const idToDelete = persons.findIndex(item => item.id === event.target.id)
      recordsService
        .deleter(event.target.id)
          .then(() => {
              const newPersons = [...persons]
              newPersons.splice(idToDelete,1)
              setPersons(newPersons)
            }) }
    }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter search={search} handleSetSearch={handleSetSearch} /> 
        <AddNewRecord newName={newName} newNumber={newNumber} addRecord={addRecord} 
          handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <div>
        <Records persons={persons.filter(record => record.name.toLowerCase().includes(search.toLowerCase()))} deleteRecord={deleteRecord}/>
      </div>
    </div>
  )
}

export default App
