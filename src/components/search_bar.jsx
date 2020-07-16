import React, { Component } from 'react';

class SearchBar extends Component {
    handleUpdate = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.props.searchFunction(event.target.value)
    }
    render() {
        return (
            <div>
                <input 
                    type="text"
                    className="form-control form-search"
                    onChange={this.handleUpdate}
                />
            </div>
        );
    }
}

export default SearchBar;