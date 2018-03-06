import React from 'react'
import PropTypes from 'prop-types'

const Book = (props) => {
  
  const imageLink = props.book.imageLinks ? props.book.imageLinks.smallThumbnail : ''
  const authors = props.book.authors ? props.book.authors.join(" \u0026 ") : null
  const selectValue = props.book.shelf ? props.book.shelf : props.getSearchShelf(props.book)
  
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLink})` }}></div>
        <div className="book-shelf-changer">
          <select
            value={ selectValue }
            onChange={(event) => (props.onChangeShelf(props.book, event.target.value))}
          >
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{ props.book.title }</div>
      <div className="book-authors">{ authors }</div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Book
