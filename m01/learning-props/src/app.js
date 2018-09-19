'use strict'

import React, { Component } from 'react'
import Square from './square'
//import Title from './title'

class App extends Component {
      render () {
            return (
                  <div className="container" onClick={(e) => {alert('clicou')}}>
                        <Square />
                  </div>
            )
      }
}

export default App
