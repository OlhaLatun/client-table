import React from 'react';
import notFoundIcon from '../assets/detective.png';

export default function NotFound() {
  return (
    <tbody className='table-body'>
      <tr className="empty">
        <td colSpan="6">
          {' '}
          <img className="not-found-icon" src={notFoundIcon} alt="not-found-icon" />
        </td>
      </tr>
      <tr className="empty">
        <td colSpan="6"> Whoops! No clients were found... </td>
      </tr>
    </tbody>
  );
}
