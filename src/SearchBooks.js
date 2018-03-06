import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    search: '',
    searchBooks: []
  }

  updateQuery = (search) => {   
    this.setState({search: search})
    if(search.trim()) {
      BooksAPI.search(search).then((books) => {
        if(books && books.length > 0) {
          this.setState({searchBooks: books})
        } else {
          this.setState({
            searchBooks: [],
          })
        }
     })
    } else {
      this.setState({
        search: '',
        searchBooks: []
      })
    }
  }

  render() {
    const { searchBooks, search } = this.state
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
			<div>
              <ol className="books-grid">
                { searchBooks.map((book) => (
                <li key={ book.id }>
                  <Book
                      book={ book } 
                  />
                </li>
                )) }
              </ol>
          	</div>
        </div>
      </div>
    )}
}

export default SearchBooks
