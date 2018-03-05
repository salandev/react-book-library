import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Shelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.getShelfBooks.map((book) => (
          <li key={ book.id }>
            <Book 
              book={ book }
            /> 
          </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  bookshelfTitle: PropTypes.string.isRequired,
  getShelfBooks: PropTypes.array.isRequired
}

export default Shelf