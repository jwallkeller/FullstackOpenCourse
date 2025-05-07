import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [displayedContacts, setDisplayedContacts] = useState(persons)

  const addContact = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const contact = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(contact))
    setNewName('')
    setNewNumber('')
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
      <div>
          filter shown with <input value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <h2>add a new</h2>
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
      <h2>Numbers</h2>
      <ul>
        {displayedContacts.map(contact => 
          <li key={contact.id}>{contact.name} {contact.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App