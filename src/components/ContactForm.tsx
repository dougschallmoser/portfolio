import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

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

  const renderForm = () => {
    
    const { name, email, message } = inputValues;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <span>Name*</span>
          {name.length > 2 && <span>&#10003;</span>}
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <div>
          <span>Email*</span>
          {email.length > 4 && email.includes("@") && email.includes(".") && <span>&#10003;</span>}
          <input type="text" name="email" value={email} onChange={handleChange} />
        </div>
        <div>
          <span>Message*</span>
          {message.length > 2 && <span>&#10003;</span>}
          <textarea id="contact-message" name="message" value={message} onChange={handleChange} />
        </div>
        {name && email && email.includes("@") && email.includes(".") && message && 
          message.length > 2 && <input type="submit" value="Send" />
        }
      </form>
    )
  }

  return (
    <div id="contact-form">
      {sent ? null : <p>Send me a message!</p>}
      {spinner ? <div className="loader"/> : null}
      {sent ? (
        <div id="contact-form-success">
          <div style={{ fontSize: "2em", color: "#fff" }}>Thank you for the message!</div>
          <div style={{ fontSize: "1.5em", color: "#fff" }}>I will get back to you soon.</div>
        </div>) : renderForm()
      }
    </div>
  )
}

export default ContactForm;