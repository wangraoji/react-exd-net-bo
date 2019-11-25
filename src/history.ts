
// createBrowserHistory 不带# 
// createHashHistory 带#

// 监听当前的地址变换
// const unlisten = history.listen(location => {
//  console.log(location.pathname)
//})

// 将新入口放入历史堆栈
// history.push({
//  pathname: '/the/path',
//  search: '?a=query',
// 一些不存在url参数上面的 当前url的状态值
//  state: { the: 'state' }

const createHistory = require("history").createHashHistory;

export default createHistory();