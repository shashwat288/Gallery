import React, { useState, useEffect } from 'react';
import { XMarkIcon, Bars3BottomRightIcon, CameraIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // User is signed in
      } else {
        setIsLoggedIn(false); // User is signed out
      }
    });
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    // Sign out the user
    signOut(auth).then(() => {
      // Sign-out successful.
      setIsLoggedIn(false);
      window.location.href = '/login'; // Redirect to login page after logout
    }).catch((error) => {
      // An error happened.
      console.error('Logout error:', error);
    });
  };

  // Define your Links here
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50 mb-4'>
      <div className='md:flex items-center justify-between bg-slate-300 py-4 md:px-10 px-7 sticky top-0'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <CameraIcon className='w-7 h-7 text-blue-600' />
          <span>PhotoBazi</span>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <Link to={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>
            </li>
          ))}
          {isLoggedIn ? (
            <button onClick={handleLogout} className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Logout</button>
          ) : (
            <Link to='/login' className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Login</Link>
          )}
        </ul>
        {/* button */}
      </div>
    </div>
  );
}

export default Header;
