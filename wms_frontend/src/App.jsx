import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Items from './Items'
import Homepg from './homepg/homepg'
import Entry from './entry/Entry'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/items' element={<Items />}/>
        <Route path='/' element={<Homepg />}/>
        <Route path='/entry' element={<Entry />}/>
      </Routes>
    </>
  )
}

export default App