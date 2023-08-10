import React from 'react';

const Filter = ({ filter, onFilterChange }) => (
  <div>
    <h2>Contacts</h2>
    <input type="text" name="filter" value={filter} onChange={onFilterChange} />
  </div>
);

export default Filter;