import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#00ff00',
    fontSize: '1.25em',
    textAlign: 'left'
  };


  return (
    <header style={{...headerStyle}}>Noted</header>
  );
}

export default Header;