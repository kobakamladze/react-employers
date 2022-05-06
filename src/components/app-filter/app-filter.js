import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
    }

    activateButton = (e) => {
        const allChilds = e.target.parentElement.children;
        for (let child of allChilds) {
            child.className = `btn btn-outline-light`;
        }
        e.target.className = `btn btn-light`;
    }

    onFilterSelect = (e) => {
        this.props.onFilterSet(e.target.getAttribute("data-filter"));
    }

    render () {
        return (
            <div className="btn-group"
            onClick={this.activateButton}>
                <button 
                className="btn btn-light"
                type="button"
                data-filter=""
                onClick={this.onFilterSelect}
                >
                    Все сотрудники
                </button>
                <button 
                className="btn btn-outline-light"
                type="button"
                data-filter="promoted"
                onClick={this.onFilterSelect}
                >
                    На повышение
                </button>
                <button
                className="btn btn-outline-light"
                type="button"
                data-filter="moreThan1000"
                onClick={this.onFilterSelect}
                >
                    З/П больше 1000$
                </button>
            </div>
        );
    }
};

export default AppFilter;