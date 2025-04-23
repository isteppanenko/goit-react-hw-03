const Contact = ({ contact }) => {
  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
    </>
  );
};

export default Contact;
