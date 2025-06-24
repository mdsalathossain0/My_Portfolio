import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'

import Logo from '../src/assets/react.svg'
import Button from './components/Button'
import List from './components/List'
import Navber from './layouts/Navber'
import Home from './layouts/Home'
import About from './layouts/About'

const App = () => {
  return (
    
    <>
    <Navber/>
    <Home/>
    <About/>
    </>
  )
}

export default App