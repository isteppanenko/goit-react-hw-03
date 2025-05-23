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
  const deleteContact = (taskId) => {
    setContact((prev) => {
      return prev.filter((contact) => contact.id !== taskId);
    });
  };
  const filteredContacts = contact.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList contactsList={filteredContacts} onDelete={deleteContact} />
    </>
  );
};
export default App;
