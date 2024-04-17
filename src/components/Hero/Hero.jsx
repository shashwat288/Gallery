import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Hero() {
  const handleSubmit = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in, redirect to photos page
        window.location = '/photos';
      } else {
        // User is not logged in, redirect to login page
        window.location = '/login';
      }
    });
  };

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://source.unsplash.com/random')` }}>
      <div className="absolute inset-0 bg-black opacity-50">
        <div className="container mx-auto px-6 py-24 text-center ">
          <h1 className="text-5xl font-bold text-white mb-4 mt-40">
            Welcome to My Photography Website
          </h1>
          <p className="text-xl text-white mb-8">
            Explore my portfolio and discover the beauty of the world through my lens.
          </p>
          <button className="bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-200" onClick={handleSubmit}>
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
