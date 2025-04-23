import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactDetails}>
        <div className={styles.contactRow}>
          <PersonIcon style={{ fontSize: 20, marginRight: '5px' }} />
          <p className={styles.contactName}>{contact.name}</p>
        </div>

        <div className={styles.contactRow}>
          <PhoneIcon style={{ fontSize: 20, marginRight: '5px' }} />
          <p className={styles.contactNumber}>{contact.number}</p>
        </div>
      </div>
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
};

export default Contact;
