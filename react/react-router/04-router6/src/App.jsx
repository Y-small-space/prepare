import React from "react";
import { HashRouter, Routes, RouterProvider, Navigate, Route } from 'react-router-dom'
import HomeHead from "./components/HomeHead";
import A from './views/A';
import B from './views/B';
import C from './views/C';
import A1 from './views/a/a1';
import A2 from './views/a/a2';
import A3 from './views/a/a3';

function App() {
  return <HashRouter>
    <div className="App">
      <HomeHead />
      <div className="content">
        {/* 
          所有的路由匹配规则，放在<Routes>中
          每一条规则的匹配，还是基于<Route>;
            + 路由匹配成功，不再基于component/render控制渲染的组件，而是基于element
            + 不再需要Switch，默认就是一个匹配成功，就不再匹配下面的了
            + 不再需要exact，默认每一项都是精准匹配
          原有的<Redirect>操作，被<Navigate to="/" />代替！！！
            + 遇到 <Navigate to ={{...}} /> to 的值可以是一个对象：pathname需要跳转的地址、search问号传参信息
         */}
        <Routes>
          <Route path="/" element={<Navigate to="/a" />} />
          <Route path="/a" element={<A />} >
            {/* v6版本中，要求所有的路由（二级或者多级路由），不在分散到各个组件中编写，而是统一都写在一起处理 */}
            <Route path="/a" element={<Navigate to="/a/a1" />} />
            <Route path="/a/a1" element={<A1 />} />
            <Route path="/a/a2" element={<A2 />} />
            <Route path="/a/a3" element={<A3 />} />
          </Route>
          <Route path="/b" element={<B />} />
          <Route path="/c" element={<C />} />
          {/* 如果以上都不匹配，我们可以渲染404组件，也可以重定向到A组件「传递不同的问号参数信息」 */}
          <Route path="*" element={<Navigate to={{
            pathname: '/a',
            search: '?lx=404'
          }}
          />} />
        </Routes>
      </div>
    </div>
  </HashRouter>
}

export default App;
