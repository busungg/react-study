import React, { useState } from 'react';

function Header(props) {
  return (
    <header>
      <h1>{`Hello ${props.title}`}</h1>
    </header>
  );
}

export default Header;
