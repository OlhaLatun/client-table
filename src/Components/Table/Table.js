import React, { useState } from 'react';
import Loader from '../Loader/Loader'
import PageControls from '../PageControls/PageControls';
import './Table.scss'

export default function Table({ clientsToRender, getSortedField, getClientId, getSortIcon }) {

    const [page, setPage] = useState(0)
    const onSortClick = ({ target }) => {
        getSortedField(target.id)
        getSortIcon(target)
    }

    const onRowClick = ({ currentTarget }) => {
        getClientId(+currentTarget.id)
    }

    const renderTableHead = () => {
        return <tr>
            <td> id
                <span id='id' className='sort-icon' onClick={(e) => onSortClick(e)}></span>
            </td>
            <td>  First Name
                <span id='firstName' className='sort-icon' onClick={(e) => onSortClick(e)}></span>
            </td>
            <td>  Last Name
                <span id='lastName' className='sort-icon' onClick={(e) => onSortClick(e)}></span>
            </td>
            <td>  Email
                <span id='email' className='sort-icon' onClick={(e) => onSortClick(e)}></span>
            </td>
            <td>  Phone
                <span id='phone' className='sort-icon' onClick={(e) => onSortClick(e)}></span>
            </td>
            <td>  State
                <span id='state' className='sort-icon' onClick={(e) => onSortClick(e)}></span>
            </td>
        </tr>
    }

    const renderTableBody = () => {
        let a = page === 0 ? page : page * 20
        let b = 20 * (page + 1)
        return clientsToRender.slice(a, b).map((client, i) => {
            const { id, firstName, lastName, email, phone, state } = client
            return (
                <tr id={id} key={i} onClick={(e) => onRowClick(e)}>
                    <td>{id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{state}</td>
                </tr>
            )
        })
    }

    return (
        <>
            {clientsToRender ?
                <>
                    <table className='table'>
                        <thead className='table-head' >
                            {renderTableHead()}
                        </thead >
                        <tbody className='table-body'>
                            {renderTableBody()}
                        </tbody>
                    </table >
                    <PageControls
                        clientsNumber={clientsToRender.length}
                        getPage={setPage}
                    />
                </> :
                <Loader />
            }
        </>
    )
}

