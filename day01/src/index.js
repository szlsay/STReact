import React from 'react'

import ReactDOM from 'react-dom'
// const element = React.createElement('h1', null, 'hello')

// const element = React.createElement(
//   'div',
//   { id: 'box', className: 'demo' },
//   '我是内容'
// )

const element = React.createElement(
  'ul',
  {
    className: 'list',
  },
  [
    React.createElement('li', null, '香蕉'),
    React.createElement('li', null, '香蕉'),
    React.createElement('li', null, '香蕉'),
  ]
)

ReactDOM.render(element, document.getElementById('root'))

// import ReactDOM from 'react-dom/client'
// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
