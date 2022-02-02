import React from 'react';
import NotFound from './NotFound';

export default function TableBody({ data, page, handleClick }) {
  const a = page === 0 ? page : page * 20;
  const b = 20 * (page + 1);
  if (data.length === 0) return <NotFound />;
  return <tbody className="table-body">
    {data.slice(a, b).map((client, i) => <tr className="table-row" id={client.id} key={i} onClick={(e) => handleClick(e)}>
      {Object.values(client).map((value, i) => <td key={i}>{value}</td>)}
    </tr>
    )}
  </tbody>
}
