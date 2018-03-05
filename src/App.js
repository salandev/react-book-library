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

  // Get all books from BooksAPI and assign to Books array as state
  loadBooks = () => (
     BooksAPI.getAll().then((books) => {
      this.setState( {books} )
    })
  )

  // Filter books by shelf name
  getShelfBooks = (shelfName) => (
      this.state.books.filter((book) => book.shelf === shelfName)
  )

  render() {
    return (
      <div className="app">
      	<Route exact path="/" render={() => (
      		<Bookshelf 
				getShelfBooks={ this.getShelfBooks }
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
