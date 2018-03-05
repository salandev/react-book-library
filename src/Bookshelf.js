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
                getShelfBooks={ props.getShelfBooks("currentlyReading") }
				onChangeShelf={ props.onChangeShelf }
              />
            </div>
            <div>
              <Shelf 
                bookshelfTitle="Want To Read"
                getShelfBooks={ props.getShelfBooks("wantToRead") }
				onChangeShelf={ props.onChangeShelf }
              />
            </div>
            <div>
              <Shelf 
                bookshelfTitle="Read"
                getShelfBooks={ props.getShelfBooks("read") }
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
  getShelfBooks: PropTypes.func.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Bookshelf