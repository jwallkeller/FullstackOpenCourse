import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

const Filter = ( {searchTerm, handleSearchTermChange} ) => {
  return (
    <div>
      filter shown with <input value={searchTerm} onChange={handleSearchTermChange} />
    </div>
  )
}

const PersonForm = ( {addContact, newName, handleNameChange, newNumber, handleNumberChange} ) => {
  return (
    <form onSubmit={addContact}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ( {displayedContacts} ) => {
  return (
    <ul>
      {displayedContacts.map(contact => 
        <li key={contact.id}>{contact.name} {contact.number}</li>
      )}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [displayedContacts, setDisplayedContacts] = useState(persons)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        setDisplayedContacts(response.data)
      })
  }, [])

  const addContact = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const contact = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    personService
      .create(contact)
      .then(response => {
        const contacts = persons.concat(response.data)
        setPersons(contacts)
        setDisplayedContacts(contacts)
        setNewName('')
        setNewNumber('')
      })  
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchTermChange = (event) => {
    const tmp = event.target.value
    setSearchTerm(tmp)
    if (tmp === '') {
      setDisplayedContacts(persons)
    } else {
      const contacts = persons.filter((person) => person.name.toLowerCase().includes(tmp.toLowerCase()))
      setDisplayedContacts(contacts)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <h3>Add a new</h3>
      <PersonForm addContact={addContact} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons displayedContacts={displayedContacts} />
    </div>
  )
}

export default App