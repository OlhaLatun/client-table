import React from 'react'
import './FilterPanel.scss'

export default function FilterPanel({ states, onSelectChange }) {

    const handleOnChange = (e) => {
        onSelectChange(e.target.value)
    }

    return (
        <select onChange={(e) => handleOnChange(e)} className='filter-panel'>
            {states.length !== 0 ?
                states.map((state, i) => <option key={i} value={state}>{state}</option>) : null}
        </select>
    )
}