import './App.css';
import { React, useState, useEffect } from 'react';
import Table from '../Table/Table';
import SearchPanel from '../SearchPanel/SearchPanel';
import FilterPanel from '../FilterPanel/FilterPanel';
import APIservice from '../../services';

function App() {
  const [clients, setClients] = useState(null);
  const [sortConfig, setSortConfig] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [states, setStates] = useState([]);
  const api = new APIservice();

  useEffect(() => {
    api.getTableData()
      .then((data) => {
        setStates(Array.from(new Set(data.map((item) => item.state))));
        return data;
      })
      .then((data) => filterClients(data))
      .then((filtered) => sortClients(sortConfig, filtered))
      .then((sorted) => searchClients(sorted))
      .then((searched) => setClients(searched));
  }, [sortConfig, searchValue, selectValue]);

  function sortClients(config, items) {
    const sorted = [...items];
    return sorted.sort((a, b) => {
      if (a[config.key] < b[config.key]) {
        return config.direction === 'asc' ? -1 : 1;
      }
      if (a[config.key] > b[config.key]) {
        return config.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  function searchClients(items) {
    const searched = [...items];
    return searchValue !== '' ? searched.filter((item) => item.firstName.toLowerCase().includes(searchValue)
      || item.lastName.toLowerCase().includes(searchValue)) : searched;
  }

  function filterClients(items) {
    const filtered = [...items];
    return selectValue === '' || selectValue === 'all' ? filtered : filtered.filter((item) => item.state === selectValue);
  }

  const setSortIconStyle = (elem) => {
    elem.classList.remove('sort-icon_asc');
    elem.classList.add('sort-icon_desc');
    if (sortConfig.key === elem.id && sortConfig.direction === 'asc') {
      elem.classList.remove('sort-icon_desc');
      elem.classList.add('sort-icon_asc');
    }
  };

  const getSortConfig = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="App">
      <div className="search-controls">
        <SearchPanel valueToSearch={setSearchValue} />
        <FilterPanel
          states={states}
          onSelectChange={(value) => setSelectValue(value)}
        />
      </div>
      <Table
        clientsToRender={clients}
        getSortIcon={setSortIconStyle}
        getSortedField={getSortConfig}
      />
    </div>
  );
}

export default App;
