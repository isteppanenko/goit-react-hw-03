import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import contactList from './assets/contactList.json';
import { useState } from 'react';

const App = () => {
  const [contact, setContact] = useState(contactList);
  const [filter, setFilter] = useState('');
  const addContact = (newContact) => {
    setContact((prev) => {
      return [...prev, newContact];
    });
  };
  return (
    <>
      <p>{filter}</p>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contactsList={contact} />
    </>
  );
};
export default App;
