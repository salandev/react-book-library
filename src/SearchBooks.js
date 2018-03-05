import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
  state = {
    search: []
  }

  updateQuery = (search) => {
    this.setState({search: search.trim()})
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={ this.state.search }
              onChange={(event) => (this.updateQuery(event.target.value))}
            />
             {JSON.stringify(this.state)} 
          </div>
        </div>
        <div className="search-books-results">

        </div>
      </div>
    )}
}

export default SearchBooks
