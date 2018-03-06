import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBooks extends Component {
  static PropTypes = {
    isBookOnShelf: PropTypes.func.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    search: '',
    searchBooks: [],
    searchError: false
  }

  updateQuery = (search) => {   
    this.setState({search: search})
    if(search.trim()) {
      BooksAPI.search(search).then((books) => {
        if(books && books.length > 0) {
          this.setState({searchBooks: books, searchError: false})
        } else {
          this.setState({
            searchBooks: [],
            searchError: true
          })
        }
     })
    } else {
      this.setState({
        search: '',
        searchBooks: [],
        searchError: false
      })
    }
  }

  // set the select value
  getSearchShelf = (book) => {
     const searchBookID = book.id
     const shelf = this.props.isBookOnShelf.find(book => book.id === searchBookID )
     return shelf ? shelf.shelf : 'none'
  }

  render() {
    const { searchBooks, search, searchError } = this.state
    const { onChangeShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={ search }
              onChange={(event) => (this.updateQuery(event.target.value))}
            />
          </div>
        </div>
        <div className="search-books-results">
			{ searchBooks.length > 0 && (
			<div>
              <div className="showing-books">
              	<p>Search returned { searchBooks.length } books</p>
              </div>
              <ol className="books-grid">
                { searchBooks.map((book) => (
                <li key={ book.id }>
                  <Book
                      book={ book }
                      getSearchShelf={ this.getSearchShelf }
					  onChangeShelf={ onChangeShelf } 
                  />
                </li>
                )) }
              </ol>
          	</div>
		  )}
          { searchError && (
           <div className="showing-books">
                <p>Search returned 0 books.  Please try again!</p>
            </div>
          )}
        </div>
      </div>
    )}
}

export default SearchBooks
