import React, { useState } from 'react'
import './SearchPanel.scss'
import { SearchIcon } from '../Icons/Icon'

export default function SearchPanel(props) {

    const [value, setValue] = useState('')

    function onChange(e) {
        e.preventDefault()
        props.valueToSearch(e.target.value.toLowerCase().trim())
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form className='search-panel' onSubmit={(e) => handleSubmit(e)}>
            <SearchIcon />
            <input type='text' placeholder='Search by name' className='search-input' value={value} onChange={(e) => onChange(e)} />
        </form>

    )
}