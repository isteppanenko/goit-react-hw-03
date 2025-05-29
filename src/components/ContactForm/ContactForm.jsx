import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  phone: '',
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const handlSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: Date.now(),
    };
    onAdd(newContact);
    actions.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handlSubmit}>
        <div className={css.container}>
          <Form className={css.form}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" />
            <label htmlFor={phoneFieldId}>Phone</label>
            <Field type="text" name="phone" />
            <button type="submit" className={css.submitButton}>
              Submit
            </button>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default ContactForm;
