'use strict'

import React, { Component } from 'react'

class App extends Component {
      render () {
            return (
                  <div>
                        My App
                  </div>
            )
      }
}

export default App



/*================ Lifetype ==================*/
// import React, { Component } from 'react'
// import Button from './button'
// import Square from './square'
// import Timer from './timer'

// class App extends Component {
//       constructor() {
//             super();
//             this.state = {
//                   color: 'green',
//                   showTimer: true
//             }
//       }      
//       render () {
//             return (
//                   <div>
//                         {this.state.showTimer && <Timer />}
//                         <button onClick={() =>{
//                               this.setState({ showTimer: !this.state.showTimer })
//                         }}>Show / Hide timer</button>
//                         <Square color={this.state.color} />

//                         {['red', 'green', 'blue'].map((color) => (
//                               <Button
//                                     key={color}
//                                     handleClick={() => this.setState({color})}>
//                                           {color}
//                               </Button>
//                         ))}
//                   </div>
//             )
//       }
// }

// export default App
/*================= ##### ===================*/

/*================= State ===================*/
//import React, { Component } from 'react'

// class App extends Component {
//       constructor() {
//             super();
//             this.state = {
//                   text: 'Gabriel'
//             }
//       }
      
//       render () {
//             return (
//                   <div className="container" onClick={() => this.setState({
//                         text: 'Outro texto'
//                   })}>
//                         { this.state.text }
//                   </div>
//             )
//       }
// }

// export default App
/*================= ##### ===================*/

/*================= Props ===================*/
// import React, { Component } from 'react'
// import LikeButton from './like-button'
// import SearchButton from './search-button'

// class App extends Component {
//       render () {
//             return (
//                   <div className="container">
//                         <LikeButton />
//                         <SearchButton />
//                   </div>
//             )
//       }
// }

// export default App
/*================= ##### ===================*/
