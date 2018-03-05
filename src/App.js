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

  // Function to Filter books by shelf name
  getShelfBooks = (shelfName) => (
      this.state.books.filter((book) => book.shelf === shelfName)
  )
  
  // Function to move book one shelf to another or to none
  onChangeShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          this.loadBooks()
      })
  }

  render() {
    return (
      <div className="app">
      	<Route exact path="/" render={() => (
      		<Bookshelf 
				getShelfBooks={ this.getShelfBooks }
				onChangeShelf={ this.onChangeShelf }
			/>
		)}/>
        <Route path="/search" render={ () => (
        	<SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
