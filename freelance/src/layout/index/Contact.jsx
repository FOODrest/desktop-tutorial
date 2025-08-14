import React, { useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../../LanguageContext';

const Contact = () => {
const API_URL = import.meta.env.MODE === "development" ? "/api" : "/api";

  const { translate } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
  
    try {
      console.log('Sending request to:', `/.netlify/functions/send-email`);
      const response = await axios.post(`/.netlify/functions/send-email`, {
        to: formData.email,
        subject: 'New Contact Form Submission',
        body: `Phone Number: ${formData.phoneNumber}\n\nMessage: ${formData.message}`,
      });
  
      console.log('Response:', response);
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ email: '', phoneNumber: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  // ... rest of the component remains the same
};

export default Contact;