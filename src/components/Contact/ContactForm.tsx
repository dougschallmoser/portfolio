import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';
import * as emailjs from 'emailjs-com';
import './Contact.css';

const ContactForm: React.FC = () => {

  interface Form {
    name: string,
    email: string,
    message: string
  }

  const [inputValues, setInputValues] = useState<Form>({
    name: '',
    email: '',
    message: '',
  })

  const [sent, setSent] = useState<boolean>(false)
  const [spinner, setSpinner] = useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const { name, email, message } = inputValues;

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs.send(
      'contact_service',
      'template_mfgiutk',
       templateParams,
       'user_0VKvw65SULVAtSOo2IwhU'
    )

    setSpinner(true);

    setTimeout(() => {
      setSent(true)
      setSpinner(false)
    }, 2000)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValues(prev => {
      return {
        ...prev, [event.target.name]: event.target.value
      }
    })
  }

  const validate = (name: string, email: string, message: string) => {
    return {
      name: name.length <= 2,
      email: !EmailValidator.validate(email),
      message: message.length <= 2
    }
  }
    
  const { name, email, message } = inputValues;
  const errors: { [key: string]: boolean } = validate(name, email, message);
  const disabled = Object.keys(errors).some(name => errors[name])

  return (
    <div id="contact-form">
      {sent ? null : <p>Send me a message!</p>}
      {spinner ? <div className="loader"/> : null}
      {sent ? (
        <div id="contact-form-success">
          <div style={{ fontSize: "2em", color: "#fff" }}>Thank you for the message!</div>
          <div style={{ fontSize: "1.5em", color: "#fff" }}>I will get back to you soon.</div>
        </div>) :
        <form onSubmit={handleSubmit}>
          <div className={name.length > 0 ? (errors.name ? "error" : "success") : ""}>
            <span>Name*</span>
            <input type="text" name="name" value={name} onChange={handleChange} />
          </div>
          <div className={email.length > 0 ? (errors.email ? "error" : "success") : ""}>
            <span>Email*</span>
            <input type="text" name="email" value={email} onChange={handleChange} />
          </div>
          <div className={message.length > 0 ? (errors.message ? "error" : "success") : ""}>
            <span>Message*</span>
            <textarea id="contact-message" name="message" value={message} onChange={handleChange} />
          </div>
          <button type="submit" disabled={disabled}>Send</button>
        </form>
      }
    </div>
  )
}

export default ContactForm;