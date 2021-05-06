import React, { Component } from 'react'

class Search extends Component {
    render() {
        const { onSearch } = this.props
        return (
            <>
                <input type='text' className="input is-link"
                    onChange={onSearch}
                    label="Search"
                    placeholder="Search for a food" />
            </>
        )
    }
}
export default Search