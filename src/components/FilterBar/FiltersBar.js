import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import "./FilterBar.css"
import { cuisines } from '../../cuisines';

class FiltersBar extends Component {

    constructor(props){
        super(props)
        this.filterOptions = {
            "min_rating": [1,2,3],
            "max_delivery_time": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            "by_cuisine": cuisines
        }
        this.onSelectFilter = this.onSelectFilter.bind(this);
    }

    onSelectFilter(paramToAdd, valueToAdd){
        this.props.addQueryParam(paramToAdd, valueToAdd);
    }

        render() {
        return (
            <div className="filter-bar">
                {Object.keys(this.filterOptions).map(function(key) {
                    return <Filter options={this.filterOptions[key]} onSelectFilter={this.onSelectFilter} type={key}/>
                }.bind(this))}
            </div>
        );
    }
}

export default FiltersBar;
