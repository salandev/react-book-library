import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'

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
      	<Bookshelf books={this.state.books} />
      </div>
    )
  }
}

export default BooksApp
