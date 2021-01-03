import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {

  interface Form {
    name: string,
    email: string,
    subject: string,
    message: string
  }

  const [inputValues, setInputValues] = useState<Form>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [sent, setSent] = useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, subject, message } = inputValues;
    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message,
    };
    emailjs.send(
      'contact_service',
      'template_mfgiutk',
       templateParams,
       'user_0VKvw65SULVAtSOo2IwhU'
    )
    setSent(true)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValues(prev => {
      return {
        ...prev, [event.target.name]: event.target.value
      }
    })
  }

  const renderForm = () => {
    
    const { name, email, subject, message } = inputValues;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <span>Name:</span>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <div>
        <span>Email:</span>
          <input type="text" name="email" value={email} onChange={handleChange} />
        </div>
        <div>
        <span>Subject:</span>
          <input type="text" name="subject" value={subject} onChange={handleChange} />
        </div>
        <div>
        <span>Message:</span>
          <textarea id="contact-message" name="message" value={message} onChange={handleChange} />
        </div>
        {name && email && email.includes("@") && subject && message && <input type="submit" value="Send" /> }
      </form>
    )
  }

  return (
    <div id="contact-form">
      {sent ? null : <p>Send me a message!</p>}
      {sent ? (
        <div>
          <div style={{ fontSize: "2em" }}>Thank you for the message!</div>
          <div style={{ fontSize: "1.5em" }}>I will get back to you as soon as I can.</div>
        </div>) : renderForm()
      }
    </div>
  )
}

export default ContactForm;