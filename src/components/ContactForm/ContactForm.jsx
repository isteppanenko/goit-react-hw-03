const ContactForm = () => {
  return (
    <>
      <form action="">
        <label htmlFor="fname">Name</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label htmlFor="phone" id="phone" name="phone">
          Phone
        </label>
        <br />
        <input type="text" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default ContactForm;
