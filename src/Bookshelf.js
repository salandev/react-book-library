import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

const Bookshelf = (props) => {
	return (
		<div className="list-books">
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf 
                bookshelfTitle="Currently Reading"
                books={ props.books.filter(book => book.shelf === 'currentlyReading') }
				onChangeShelf={ props.onChangeShelf }
              />
            </div>
            <div>
              <Shelf 
                bookshelfTitle="Want To Read"
                books={ props.books.filter(book => book.shelf === 'wantToRead') }
				onChangeShelf={ props.onChangeShelf }
              />
            </div>
            <div>
              <Shelf 
                bookshelfTitle="Read"
                books={ props.books.filter(book => book.shelf === 'read') }
				onChangeShelf={ props.onChangeShelf }
              />
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
      	</div>
	)
}

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Bookshelf