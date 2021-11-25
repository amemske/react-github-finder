import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  // Const Navbar = (props) is the same as what we have in the  func argument at the top
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
