'use strict'

import React, { Component } from 'react'

/* ============== SetState assíncrono =============== */
class App extends Component {
      constructor () {
            super ();
            this.state = {
                  checked: false,
                  showContent: false
            }
      }
      render () {
            return (
                  <div>
                        <label>
                              <input
                                    type='checkbox'
                                    checked={this.state.checked}
                                    onChange={() => {
                                          this.setState({
                                                checked: !this.state.checked
                                          }, () => { //callback
                                                this.setState({
                                                      showContent: this.state.checked
                                                })
                                          })
                                    }}
                              />Mostrar conteúdo
                        </label>
                        {this.state.showContent && <div>Olha eu aqui</div>}
                  </div>
            )
      }
}

export default App

/* ================= Forms =================== */
// class App extends Component {
//       constructor () {
//             super ();
//             this.state = {
//                   value: '2'
//             }
//       }
//       render () {
//             return (
//                   <form 
//                         onSubmit={(e) => {
//                               e.preventDefault()
//                               console.log('event', e)
//                         }}
//                         onChange={(e) => {
//                               console.log('name', e.target.name)
//                               console.log('value', e.target.value)
//                         }}
//                   >
//                         <input type='name' name='name' />
//                         <input type='email' name='email' />
//                         <button type='submit'>Enviar</button>
//                   </form>
//             )
//       }
// }
/* ================= ##### =================== */

/* ============== select e option ================ */
// class App extends Component {
//       constructor() {
//             super();
//             this.state = {
//                   value: '2'
//             }
//       }
//       render () {
//             return (
//                   <form>
//                         <select value={this.state.value} onChange={(e) => {
//                               this.setState({
//                                     value: e.target.value
//                               })
//                         }}>
//                               <option value='1'>Opção 1</option>
//                               <option value='2'>Opção 2</option>
//                               <option value='3'>Opção 3</option>
//                         </select>
//                   </form>
//             )
//       }
// }
/* ================= ##### =================== */

/* ============== Checkbox e radio ================ */
// class App extends Component {
//       constructor() {
//             super();
//             this.state = {
//                   value: 'Valor inicial',
//                   checked: false
//             }
//       }
//       render () {
//             return (
//                   <div>
//                         <form>
//                               <input type='text' value={this.state.value} onChange={(e) => {
//                                     this.setState({
//                                           value: e.target.value
//                                     })
//                               }} />
//                               <label>
//                                     <input
//                                           type='checkbox'
//                                           value='my-checkbox'
//                                           checked={this.state.checked}
//                                           onChange={(e) => {
//                                                 this.setState({ checked: !this.state.checked })
//                                           }} />
//                                     Checkbox
//                               </label>
//                               <hr />
//                               <input type='radio' name='rd' value='1' defaultChecked />Radio 1
//                               <input type='radio' name='rd' value='2' />Radio 2
//                         </form>
//                   </div>
//             )
//       }
// }
/* ================= ##### =================== */

/* ================ Lifecycle ================== */
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
/* ================= ##### =================== */

/* ================= State =================== */
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
/* ================= ##### =================== */

/* ================= Props =================== */
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
/* ================= ##### =================== */
