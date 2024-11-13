import { useState, useEffect } from 'react'
import Form from './components/Form'
import Person from './components/Person'
import FilterComponent from './components/FilterComponent'
import personService from './services/persons'
import Notification from './components/Notifications'

const App = () => {
  const [persons, setPersons] = useState([
    
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterWith, setFilterWith] = useState('')
  const [errorMessage, setErrorMessage]  = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
 
  useEffect(() => {
    personService.getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])


  const handleFormSubmission = (event)  =>  {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        let person = persons.find(person => person.name === newName)
        personService.update(person.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
          })
          .catch(error => {

            console.error("Error updating person:", error)
          })
      }
    }
    personService.create(personObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setSuccessMessage(`Added ${newName}`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)

    }).catch(error => {
      alert(error.response.data.error)
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
    setNewName('')
    setNewNumber('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterWith(event.target.value)
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setSuccessMessage(`${name} has been deleted from the phonebook, refresh the page to see the changes`)
          //remoove the error message after 5 seconds
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch(() => {
          setErrorMessage(`Information of ${name} has already been removed from the server`)
          //remove the error message after 5 seconds
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const personsToShow = filterWith
    ? persons.filter(person => person.name.toLowerCase().includes(filterWith.toLowerCase()))
    : persons
  
  return (
    <div>
      <h2>Phonebook</h2>
      {errorMessage && <Notification message={errorMessage} success={false} />}
      {successMessage && <Notification message={successMessage} success={true} />}
       <FilterComponent filterWith={filterWith} handleFilter={handleFilter}/>
       <br/>
       <br/>
      <Form onSubmit={handleFormSubmission} value1={newName} onChange1={handleChange} value2={newNumber} onChange2={handleNumberChange}/>
      <h2>Contacts List:</h2>
      <hr/>
      {personsToShow.map(person => 
        <Person key={person.name} name = {person.name} number = {person.number} text="delete" onClick={() => handleDelete(person.id, person.name)}/>
      )}
    </div>
  )
}

export default App
