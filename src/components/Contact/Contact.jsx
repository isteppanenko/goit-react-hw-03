import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  return (
    <div className={css.contact}>
      <div className={css.contactDetails}>
        <div className={css.contactRow}>
          <PersonIcon style={{ fontSize: 20, marginRight: '5px' }} />
          <p className={css.contactName}>{contact.name}</p>
        </div>

        <div className={css.contactRow}>
          <PhoneIcon style={{ fontSize: 20, marginRight: '5px' }} />
          <p className={css.contactNumber}>{contact.phone}</p>
        </div>
      </div>
      <button className={css.deleteButton}>Delete</button>
    </div>
  );
};

export default Contact;
