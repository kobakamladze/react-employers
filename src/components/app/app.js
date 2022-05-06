import { Component } from 'react';

import Appinfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Koba K.", salary: 1700, increase: true, rise: true, id: 1},
                {name: "Jacob K.", salary: 2400, increase: false, rise: false, id: 2},
                {name: "John S.", salary: 600, increase: true, rise: false, id: 3},
            ],
            term: '',
            filter: ''
        };
        this.index = this.state.data.length;
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    };

    addItem = (name, salary, increase) => {
        this.setState(({data}) => data.push({
            name: name,
            salary: +salary,
            increase: increase,
            rise: false,
            id: this.index
        }));
        this.index++;
    };

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }));
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }));
    }

    EmployFilter = (arr, term) => {
        if (term) {
            return arr.filter(item => {
                if(item.name.toLowerCase().includes(term.toLowerCase())) return item;
            });
        }
        // console.log(arr);
        return arr;
    }

    onTypeSearch = (string) => {
        this.setState(({term}) => ({
            term: string
        }));
    }

    onFilter = (arr, filter) => {
        const newArr = [];
        if (filter === 'promoted') {
            return arr.filter(item => item.increase)
        } else if (filter == 'moreThan1000') {
            return arr.filter(item => item.salary > 1000)
        } else if (!filter) return arr;
    }
    
    onFilterSet = (string) => {
        console.log(string);
        this.setState(({filter}) => ({
            filter: string
        }));
    }

    render() {
        const {data, term, filter} = this.state;
        const dataLength = this.state.data.length;
        const promotedCount = this.state.data.filter(item => item.increase).length;
        const filteredData = this.onFilter(this.EmployFilter(data, term), filter);

        return (
            <div className="app">
                <Appinfo
                    sumarryCount={dataLength}
                    promotedCount={promotedCount}/>
                <div className="search-panel">
                    <SearchPanel
                        onSearch={this.onTypeSearch}/>
                    <AppFilter
                        onShowAll={this.showAllEmps}
                        onFilterSet={this.onFilterSet}/>
                </div>

                <EmployersList
                    data={filteredData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployersAddForm
                    onAdd={this.addItem}
                    onCount={this.employeesAmount}/>
            </div>
        );
    }
}

export default App;