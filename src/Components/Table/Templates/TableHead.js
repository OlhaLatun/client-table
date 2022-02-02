import React from 'react';
const HEADINGS = ['id', 'First Name', 'Last Name', 'E-mail', 'Phone', 'State']

export default function TableHead({ handleClick }) {
  return (
    <thead className="table-head">
      <tr>
        {HEADINGS.map((header) => (
          <td key={header}>
            {' '}
            {header}
            <span role="button" aria-label="sort" tabIndex={0} id="id" className="sort-icon" onClick={(e) => handleClick(e)} onKeyUp={(e) => handleClick(e)} />
          </td>
        ))}
      </tr>
    </thead>
  );
}
