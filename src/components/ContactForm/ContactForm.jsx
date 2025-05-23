import css from './ContactForm.module.css';
const ContactForm = ({ onAdd }) => {
  const handlSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      name: e.target.elements.fname.value,
      phone: e.target.elements.fphone.value,
    });
    e.target.reset();
  };
  return (
    <>
      <div className={css.container}>
        <form className={css.form} onSubmit={handlSubmit}>
          <label htmlFor="fname">Name</label>
          <input type="text" id="fname" name="fname" />
          <label htmlFor="phone">Phone</label>
          <input type="text" id="fphone" name="fphone" />
          <button className={css.submitButton} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
