import React from 'react';

const Attribution = () => {
  return (
    <section className="attribution">
      <span>Content provided by </span>
      <a
        target="_blank"
        href="https://jamendo.com"
        rel="noopener noreferrer">
        <img src={require('../images/jamendo.png')} />
      </a>
    </section>
  );
};

export default Attribution;
