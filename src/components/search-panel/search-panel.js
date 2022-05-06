// import { Component } from 'react';

import './search-panel.css';

const SearchPanel = (props) =>{

    const onSearch = (string) => {
        props.onSearch(string);
    }

        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={(e) => onSearch(e.target.value)}/>
        );
};

export default SearchPanel;