import ReactDOM from 'react-dom'

// const loading = true
// function render() {
//   // if (loading) {
//   //   return <div>数据正在加载中....</div>
//   // } else {
//   //   return <div>数据加载完成，显示加载的数据</div>
//   // }

//   return loading ? (
//     <div>数据正在加载中....</div>
//   ) : (
//     <div>数据加载完成，显示加载的数据</div>
//   )
// }

// const element = (
//   <div>
//     {/* {loading ? (
//       <div>数据正在加载中....</div>
//     ) : (
//       <div>数据加载完成，显示加载的数据</div>
//     )} */}
//     {loading && <div>数据加载中...</div>}
//   </div>
// )

// const list = ['张飞', '赵云', '马超']
// const element = (
//   <div>
//     <h1>列表的渲染</h1>
//     <ul>
//       {list.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
// )

// const list = [
//   { id: 1, name: 'st1', salary: 12 },
//   { id: 2, name: 'st2', salary: 13 },
//   { id: 3, name: 'st3', salary: 14 },
// ]

// const element = (
//   <div>
//     <ul>
//       {/* {list.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))} */}
//       {list.map((item) => {
//         return <li key={item.id}>{item.name}</li>
//       })}
//     </ul>
//   </div>
// )

// const color = 'red'
// const bgColor = 'pink'
// // style标签，如果是长度单位，可以使用数字类型，省略px
// const element = (
//   <div>
//     <h1 style={{ backgroundColor: bgColor, width: 400, height: 400 }}>
//       通过style控制样式
//     </h1>
//     <p style={{ color }}>是金子总会花光的</p>
//   </div>
// )

// const element = React.createElement('h1', null, 'hello')

// const element = React.createElement(
//   'div',
//   { id: 'box', className: 'demo' },
//   '我是内容'
// )

// const element = React.createElement(
//   'ul',
//   {
//     className: 'list',
//   },
//   [
//     React.createElement('li', null, '香蕉'),
//     React.createElement('li', null, '香蕉'),
//     React.createElement('li', null, '香蕉'),
//   ]
// )

// const element = (
//   <div id="box">
//     <h1>我是标题</h1>
//     <ul>
//       <li>哈哈</li>
//       <li>嘻嘻</li>
//     </ul>
//   </div>
// )

// const element = (
//   <>
//     <div className="aa"></div>
//     <span>456</span>
//     <a href="http://www.baidu.com">百度一下</a>
//     <img src="./abc.gif" alt="" />
//     <br />
//     <label htmlFor="box">哈哈哈</label>
//     <input type="checkbox" id="box" />
//   </>
// )

// const name = 'st'
// const car = { brand: '小车'}
// const friends = ['罗xx', '吴xx']
// const age = 20
// const fn = () => {
//   return (
//     <div>
//       <p>hello</p>
//     </div>
//   )
// }

// const element = (
//   <div>
//     <h1>jsx的表达式</h1>
//     <div>姓名：{name + 'demo'}</div>
//     <div>车：{car.brand}</div>
//     <div>朋友：{friends[0]}</div>
//     <div title={car.brand}>喜好：{age > 18 ? '成年' : '未成年'}</div>
//     <div>{fn()}</div>
//     {/* <div>{for()}</div> */}
//   </div>
// )

// import './index.css'

// const isRed = true
// const element = (
//   <div>
//     <h1 className={`${isRed ? 'red' : ''} box`}>通过style控制样式</h1>
//     {/* <p className="red">是金子总会花光的</p> */}
//   </div>
// )
import './index.css'
import classnames from 'classnames'
const isRed = false
const isPink = true
const element = (
  <div>
    <h1 className={classnames('box', { red: isRed, pink: isPink })}>TITLE</h1>
  </div>
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
