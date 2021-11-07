import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <nav>
        <Link to="/minsk/">Minsk</Link>
        <Link to="/bratislava/">Bratislava</Link>
        <Link to="/moskva/">Moskva</Link>
      </nav>
    </header>
  );
};

export default Header;
