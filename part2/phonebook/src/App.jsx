import { useState } from 'react'
import Records from './components/Records'
import AddNewRecord from './components/AddNewRecord'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
   const [newName, setNewName] = useState('')
   const [newNumber, setNewNumber] = useState('')
   const [search, setSearch] = useState('')
    

   const addRecord = (event) => {
     event.preventDefault();
    
     const isOld = persons.some(item => item.name === newName);

     if (isOld){
       alert(`${newName} is already in phonebook`);
     } else {
       const nameObject = {name: newName, number: newNumber};
       setPersons(persons.concat(nameObject));
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

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter search={search} handleSetSearch={handleSetSearch} />
        <AddNewRecord newName={newName} newNumber={newNumber} addRecord={addRecord} 
          handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <div>
        <Records persons={persons.filter(record => record.name.toLowerCase().includes(search.toLowerCase()))} />
      </div>
    </div>
  )
}

export default App
