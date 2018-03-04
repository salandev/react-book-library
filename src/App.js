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

  loadBooks = () => (
     BooksAPI.getAll().then((books) => {
      this.setState( {books} )
    })
  )

  render() {
    return (
      <div className="app">
      	<Route exact path="/" render={() => (
      		<Bookshelf books={this.state.books} />
		)}/>
        <Route path="/search" render={ () => (
        	<SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
