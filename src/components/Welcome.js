import React from 'react';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome1</h1>
      <p>{new Date().toDateString()}</p>
    </section>
  );
};

export default Welcome;
