import React from 'react';
import './FilterPanel.scss';

export default function FilterPanel({ states, onSelectChange }) {
  const handleOnChange = (e) => {
    onSelectChange(e.target.value);
  };

  return (
    <select onChange={(e) => handleOnChange(e)} className="filter-panel">
      <option value="all">All</option>
      {states.length !== 0
        ? states.map((state) => <option key={state} value={state}>{state}</option>) : null}
    </select>
  );
}
