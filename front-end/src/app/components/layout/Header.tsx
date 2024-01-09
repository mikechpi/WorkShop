import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainer}>
        <img src={"./img/Logo.webp"} alt="Logo YunoHost 4Everyone" style={logoStyles} />
      </div>
      <div style={menuContainer}>
        <div style={menuItem}>Bundles</div>
        <div style={menuItem}>Applications</div>
        <div style={menuItem}>Diagnostic</div>
      </div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  background: '#fff',
  color: '#3B82F6',
};

const logoContainer = {
  // Add styles for the logo container if needed
};

const logoStyles = {
  maxWidth: '100px', // Ajustez la largeur du logo selon vos besoins
};

const menuContainer = {
  display: 'flex',
};

const menuItem = {
  margin: '0 10px',
};

export default Header;
