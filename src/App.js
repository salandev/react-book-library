import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    this.loadBooks()
  }

  // Function to get all books from BooksAPI and assign to Books array as state
  loadBooks = () => (
     BooksAPI.getAll().then((books) => {
      this.setState( {books} )
    })
  )

  // Function to move book from one shelf to another or to none
  onChangeShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          this.loadBooks()
      })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
      	<Route exact path="/" render={() => (
      		<Bookshelf 
				books={ books }
				onChangeShelf={ this.onChangeShelf }
			/>
		)}/>
        <Route path="/search" render={ () => (
          <SearchBooks 
            isBookOnShelf={ books }
            onChangeShelf={ this.onChangeShelf }
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
