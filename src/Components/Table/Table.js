import React, { useState } from 'react';
import Loader from '../Loader/Loader';
import TableHead from './Templates/TableHead';
import PageControls from '../PageControls/PageControls';
import './Table.scss';
import TableBody from './Templates/TableBody';

export default function Table({
  clientsToRender, getSortedField, getClientId, getSortIcon,
}) {
  const [page, setPage] = useState(0);

  const onSortClick = ({ target }) => {
    getSortedField(target.id);
    getSortIcon(target);
  };

  return (
    <>
      <table className='table'>
        <TableHead handleClick={onSortClick} />
        {clientsToRender ? <TableBody data={clientsToRender} page={page} /> : <Loader />}
      </table >
      <PageControls clientsNumber={clientsToRender ? clientsToRender.length : 1} getPage={setPage} />
    </>
  );
}
