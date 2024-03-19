import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white p-6 flex items-center">
      <div className="flex-grow">
        <div className="text-sm">
          &copy; Copyright 2024. All rights reserved.
        </div>
      </div>
      <div className="flex space-x-4">
        <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-instagram" className="text-2xl hover:text-teal-400" />
        </Link>
        <Link to="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-twitter" className="text-2xl hover:text-teal-400" />
        </Link>
        <Link to="/terms" className="text-teal-400 hover:text-white">
          <FontAwesomeIcon icon="fa-times" className="text-2xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
