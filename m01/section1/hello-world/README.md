install http-server

```bash
npm i -g http-server
```

execute http-server

```bash
http-server
```

access server in localhost:8080



Astuces:
========

$0 in console browser = get the DOM element

console.dir($0) in console browser = get the properties to the DOM element

console.log(React) in the code = get properties to the React

----------------------

React.createElement(type(ex. h1), properties, contenu)

or

React.DOM.h1(properties, contenu)

----------------------

ReactDOM.render(element, placeToRender)

----------------------

The React elements are differents to the DOM elements, React elements are Objects



How to create an element in an other
====================================

```javascript
var example = React.createElement('h1', null, React.createElement(
    'span',
    null,
    'Span text'
))
```

it's possible to the pass an array into an element



JSX
====

Javascript + XML

```javascript
ReactDOM.render(
        <h1>HelloWorld</h1>,
        document.getElementById('app')
)
```

Babel = util to compile js

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
```