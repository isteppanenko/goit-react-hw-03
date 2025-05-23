import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

const ContactList = ({ contactsList, onDelete }) => {
  return (
    <ul style={{ padding: 0 }}>
      {contactsList.map((contact) => {
        return (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
