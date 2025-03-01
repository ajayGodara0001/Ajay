import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Contact({ theme }) {
  const [result, setResult] = useState('Send Message');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formData = new FormData(event.target);
    formData.append('access_key', 'd25ed56c-06b1-422c-9b5d-692599f4c19c');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Form Submitted Successfully');
      setResult('Send Message');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult('Send Message');
      toast.error(data.message);
    }
  };

  return (
    <div className={`w-full pt-28 flex pb-10 flex-col items-center ${theme === 'black' ? 'bg-gray-900' : 'bg-gray-100'}`} id="contact">
      {/* Contact Me Heading */}
      <div className={`text-4xl font-bold mb-16 ${theme === 'black' ? 'text-blue-500' : 'text-blue-800'}`}>
        Contact Me
      </div>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className={`flex flex-col gap-5 rounded-md w-[90%] md:w-[70%] px-5 pb-10 pt-7 shadow-md ${
          theme === 'black' ? 'bg-gray-800 text-white' : 'bg-white text-black shadow-gray-400'
        }`}
      >
        {/* Name Field */}
        <div className='text-2xl flex flex-col w-full gap-1'>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            required
            name="name"
            className={`rounded-md ${theme === 'black' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} text-2xl px-2 pb-2 pt-1`}
            type="text"
          />
        </div>

        {/* Email Field */}
        <div className='text-2xl flex flex-col w-full gap-1'>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            required
            className={`rounded-md ${theme === 'black' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} text-2xl px-2 pb-2 pt-1`}
            id="email"
            type="email"
          />
        </div>

        {/* Message Field */}
        <div className='text-2xl flex flex-col w-full gap-1'>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            required
            className={`rounded-md h-32 ${theme === 'black' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} text-2xl pt-1 pb-2 px-2`}
            id="message"
            type="text"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`text-center text-white font-bold hover:bg-blue-600 bg-blue-500 w-full text-2xl py-2 rounded-md ${
              result === 'Sending....' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={result === 'Sending....'}
          >
            {result}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;