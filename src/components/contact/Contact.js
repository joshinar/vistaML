import React, { useState } from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';

emailjs.init('user_TV6RHkYxxelFi0KjgPLlV');
const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [feedback, setFeedback] = useState({
    hide: true,
    message: '',
    class: '',
  });
  const handleSubmit = (e) => {
    const { email, name, company, message } = userDetails;
    e.preventDefault();
    if (!email || !name || !company || !message) {
      setFeedback({
        hide: false,
        class: 'danger',
        message: 'Please fill all the details.',
      });
      return;
    }
    const templateParams = {
      from_name: 'VistaML',
      to_name: userDetails.name,
      to_email: userDetails.email,
      message:
        'We have received your request and will get back to you shortly.',
    };
    emailjs.send('service_ev30y6i', 'template_jd0iwz4', templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFeedback({
          hide: false,
          class: 'success',
          message: 'Thank you. We will get back to you shortly.',
        });
      },
      (err) => {
        setFeedback({
          hide: false,
          class: 'danger',
          message: 'Something went wrong.',
        });
        console.log('FAILED...', err);
      }
    );
  };
  return (
    <div style={{ background: '#141416' }}>
      <div className='contact-jumbo'>
        <h2>Get Started</h2>
        <h4>
          Let’s give your business what <br />
          it needs to grow.
        </h4>
        <form className='col-md-3 m-auto'>
          <div
            className={`alert alert-${feedback.class}`}
            role='alert'
            hidden={feedback.hide}
          >
            {feedback.message}
          </div>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control my-4'
              placeholder='Name'
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
            />
            <input
              type='email'
              className='form-control my-4'
              placeholder='Email'
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            />
            <input
              type='text'
              className='form-control my-4'
              placeholder='Company'
              onChange={(e) =>
                setUserDetails({ ...userDetails, company: e.target.value })
              }
            />
            <textarea
              placeholder='Leave your message here...'
              className='form-control my-4'
              rows={5}
              onChange={(e) =>
                setUserDetails({ ...userDetails, message: e.target.value })
              }
            ></textarea>
          </div>

          <button
            type='submit'
            className='btn btn-primary '
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
