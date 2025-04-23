import Contact from '../Contact/Contact.jsx';

const ContactList = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
