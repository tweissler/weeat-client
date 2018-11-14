import React, { Component } from 'react';
import './Filter.css'

class Filter extends Component {
    constructor(props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange = (event) => {
        this.props.onSelectFilter(this.props.type, event.target.value);
    }

    removePrefix(text){
        var arr = text.split("_");
        arr.splice(0,1);
        var string = arr.join(" ");
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    render() {
        const options = this.props.options;

        return (
            <div>
                <h1 className="filter-name">{this.removePrefix(this.props.type)}</h1>
                <select className="filter-select" onChange={this.handleFilterChange} value={this.value}>
                    <option value="">I don't care</option>
                    {options.map(op => {
                        return <option value={op}>{op}</option>
                    })}
                </select>
            </div>
        );
    }
}

export default Filter;
