import React, { useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../../LanguageContext';

const Contact = () => {
  const { translate } = useLanguage();

  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target; // keep using id to match your inputs
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Send to Netlify Function using the {to, subject, body} shape
      const res = await axios.post(
        '/.netlify/functions/send-email',
        {
          to: 'saadrajab110@gmail.com',
          subject: 'New Contact Form Submission',
          body: `Email: ${formData.email}\n\nPhone Number: ${formData.phoneNumber}\n\nMessage: ${formData.message}`
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (res.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ email: '', phoneNumber: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id='contact' className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          {translate('contact')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Email..."
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {translate('Phone')}
            </label>
            <input
              type="tel"
              id="phoneNumber"
              autoComplete="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="+212 ..."
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              {translate('Yourmessage')}
            </label>
            <textarea
              id="message"
              rows="6"
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            {translate('Sendmessage')}
          </button>

          {status && (
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
