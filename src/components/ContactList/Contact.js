import React from 'react';

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li>
    {name}: {number}
    <button onClick={onDeleteContact}>Delete</button>
  </li>
);

export default Contact;