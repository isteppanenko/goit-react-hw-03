import css from './ContactForm.module.css';
const ContactForm = () => {
  return (
    <>
      <div className={css.container}>
        <form className={css.form} action="">
          <label htmlFor="fname">Name</label>
          <input type="text" id="fname" name="fname" />
          <label htmlFor="phone" id="phone" name="phone">
            Phone
          </label>
          <input type="text" />
          <input
            className={css.submitButton}
            type="submit"
            value="Add contact"
          />
        </form>
      </div>
    </>
  );
};
export default ContactForm;
