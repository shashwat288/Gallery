import React, { useState } from 'react';
import sendEmail from '../../emailjs';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    sendEmail(
      'template_owy8qzs',
      'service_tlr4jyv',
      'GWEB4sNoGgSkR2qLP',
      name,
      email,
      message
    );

    setIsSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We would love to hear from you! Please fill out the form below to get in touch with us.
          </ p>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="w-full md:w-1/2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div className="mt-6">
              <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-200">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;