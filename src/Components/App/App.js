import './App.css';
import Table from '../Table/Table'
import SearchPanel from '../SearchPanel/SearchPanel';
import FilterPanel from '../FilterPanel/FilterPanel';
import DescriptionPanel from '../DescriptionPanel/DescriptionPanel';
import APIservice from '../../services'
import { useState, useEffect } from 'react';

function App() {
  const [clients, setClients] = useState(null)
  const [sortConfig, setSortConfig] = useState({})
  const [searchValue, setSearchValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [states, setStates] = useState([])
  const [clientID, setClientId] = useState(null)
  const [client, setClient] = useState(null)
  const api = new APIservice()

  useEffect(() => {
    api.getTableData()
      .then(data => {
        setStates(Array.from(new Set(data.map(client => client.state))))
        return data
      })
      .then(data => filterClients(data))
      .then(filtered => sortClients(sortConfig, filtered))
      .then(sorted => searchClients(sorted))
      .then(searched => setClients(searched))

    api.getDescriptionData()
      .then(data =>
        setClient(data.find(client => client.id === clientID)))
  }, [sortConfig, searchValue, selectValue, clientID])

  const sortClients = (sortConfig, clients) => {
    let sorted = [...clients]
    return sorted.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
    })
  }

  const searchClients = (clients) => {
    let searched = [...clients]
    return searchValue !== '' ? searched.filter(client =>
      client.firstName.toLowerCase().includes(searchValue) ||
      client.lastName.toLowerCase().includes(searchValue)) : searched
  }

  const filterClients = (clients) => {
    let filtered = [...clients]
    return selectValue !== '' ? filtered.filter(client => client.state === selectValue) : filtered
  }

  const setSortIconStyle = (elem) => {
    elem.classList.remove('sort-icon_asc')
    elem.classList.add('sort-icon_desc')
    if (sortConfig.key === elem.id && sortConfig.direction === 'asc') {
      elem.classList.remove('sort-icon_desc')
      elem.classList.add('sort-icon_asc')
    }
  }

  const getSortConfig = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  return (
    <div className="App">
      <div className='search-controls'>
        <SearchPanel valueToSearch={setSearchValue} />
        <FilterPanel
          states={states}
          onSelectChange={(value) => setSelectValue(value)} />
      </div>
      <Table
        clientsToRender={clients}
        getSortIcon={setSortIconStyle}
        getSortedField={getSortConfig}
        getClientId={setClientId} />
      {client ? <DescriptionPanel client={client} /> : null}
    </div>
  );
}

export default App;
