React
========

GitHub:

www.github.com/da2k/curso-reactjs-ninja

For a simple node server:

```bash
npm i -g http-server
```

Libs of React:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
```

JSX with Babel:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
```

Install webpack:

```bash
npm install --save-dev webpack@1
```

Install webpack-dev-server:

```bash
npm install --save-dev webpack-dev-server@1
```

Run webpack-dev-server:

```bash
webpack-dev-server
```

Install react and react-dom:

```bash
npm install --save react@15.4 react-dom@15.4
```

Install babel's dependencies

```bash
npm install --save-dev babel-core@6 babel-loader@6 babel-preset-es2015@6 babel-preset-stage-0@6
```

Install babel-preset-react:

```bash
npm install --save-dev babel-preset-react@6
```

Install react-hot-loader:

```bash
npm install --save-dev react-hot-loader@3.0.0-beta.2
```

Install standard and standard-loader:

```bash
npm install --save-dev standard standard-loader@4
```


SPREAD OPERATOR:

Sintax:

```javascript
const obj {
      prop1: 1,
      prop2: 2,
      prop3: 3
}
const obj2 = { ...obj } //cria um outro objeto
console.log(obj2 === obj) //false
```