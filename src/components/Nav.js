import React from 'react';
import { NavLink } from 'react-router-dom';
import space from '../assets/images/planet.png';
import './Nav.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
  },
  {
    id: 3,
    path: '/Profile',
    text: 'My profile',
  },
];

const Nav = () => (
  <nav>
    <div className="nav-left">
      <img className="logo" src={space} alt="space" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <div className="nav-right">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Nav;