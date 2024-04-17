import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="bg-gray-800 py-12 text-center">
      <p className="text-white">
        &copy; {new Date().getFullYear()} PhotoBazi. All rights reserved.
      </p>
      <p className="text-white">
        Current time  India: {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}
      </p>
      <div className="flex justify-center mt-4">
        <a href="https://www.facebook.com/" className="text-white hover:text-blue-400 mr-4">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.instagram.com/" className="text-white hover:text-pink-400 mr-4">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/" className="text-white hover:text-blue-400 mr-4">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.youtube.com/" className="text-white hover:text-red-600">
          <FaYoutube size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;