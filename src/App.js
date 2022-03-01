import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigationbar from './components/Navigationbar'
import Home from './components/Home'
import Cart from './components/Cart'
import CheckOutForm from './components/CheckOutForm'
import  Favorites from './components/Favorites'
import OrderPlaced from './components/OrderPlaced'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
        <Navigationbar /> 
          
          <Routes>
            <Route path="/success" element={<OrderPlaced />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route  path="/cart" element={<Cart />}></Route>
            <Route  path="/recipe" element={<CheckOutForm />}></Route>
            {/* <Route path='/details' element={<Details />}></Route> */}
            <Route exact path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </BrowserRouter>


      </div>
    )
  }
}



export default App