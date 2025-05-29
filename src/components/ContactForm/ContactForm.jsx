import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  phone: '',
};

const validationSchem = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!!!')
    .required('Required'),
  phone: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!!!')
    .required('Required'),
});
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
      <Formik
        initialValues={initialValues}
        onSubmit={handlSubmit}
        validationSchema={validationSchem}
      >
        <div className={css.container}>
          <Form className={css.form}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
            <label htmlFor={phoneFieldId}>Phone</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="span" />
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
