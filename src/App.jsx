import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import contactList from './assets/contactList.json';
import { useState } from 'react';

const App = () => {
  const [filter, setFilter] = useState('');

  return (
    <>
      <p>{filter}</p>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contactsList={contactList} />
    </>
  );
};
export default App;
