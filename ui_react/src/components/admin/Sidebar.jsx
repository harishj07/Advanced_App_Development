import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const navigationLinks = [
        { name: 'All Courses', path: '/all-courses' },
        { name: 'Enrolled Courses', path: '/enrolled-courses' },
        { name: 'Enquire Now', path: '/enquire' },
        { name: 'Subscription', path: '/subscription' },
        { name: 'Payment History', path:  '/payment-history' },
      ];
    
      return (
        <div className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
          <ul className="space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'bg-gray-700 text-gray-200 font-bold' : ''
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Sidebar