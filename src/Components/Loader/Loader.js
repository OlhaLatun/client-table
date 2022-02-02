import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <tbody className='table-body' >
            <tr className="empty">
                <td></td>
                <td></td>
                <td></td>
                <td className='loader'></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    )
}