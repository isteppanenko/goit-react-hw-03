import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = ({ contact }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
        maxWidth: '200px',
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PersonIcon style={{ fontSize: 20, marginRight: '5px' }} />
          <p style={{ margin: 0, fontWeight: 'bold' }}>{contact.name}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon style={{ fontSize: 20, marginRight: '5px' }} />
          <p style={{ margin: 0 }}>{contact.number}</p>
        </div>
      </div>
      <button
        style={{
          backgroundColor: '#f44336',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
