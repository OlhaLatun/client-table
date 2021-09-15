import React, { useEffect, useState } from 'react'
import './PageControls.scss'

export default function PageControls({ clientsNumber, getPage }) {

    const [page, setPage] = useState(0)
    const pages = clientsNumber < 20 ? 1 : Math.floor(clientsNumber / 20)

    useEffect(() => { getPage(page) }, [page])

    const onClick = ({ target }) => {
        setPage(+target.id)
    }

    const prevClick = () => {
        setPage(prevState => prevState > 0 ? prevState - 1 : 0)
    }

    const nextClick = () => {
        setPage(prevState => prevState < 5 ? prevState + 1 : 5)
    }

    return (
        <div className='page-controls'>
            <button className='btn' id='previous' onClick={() => prevClick()}> previous </button>
            {[...Array(pages)].map((page, i) => <button className='btn' key={i} id={i} onClick={(e) => onClick(e)}> {i + 1} </button>)}
            <button className='btn' id='next' onClick={() => nextClick()}> next </button>
        </div>
    )
}