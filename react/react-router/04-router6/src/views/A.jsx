import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import styled from "styled-components";
const DemoBox = styled.div`
  display:flex;
  font-size:12px;
  .menu{
    a{
      font-size:12px;
      color:#000;
      display:block;
      &.active{
        color: red;
      }
    }
  }
`
export default function A() {
  return <DemoBox>
    <div className='menu'>
      <Link to="/a/a1">A1</Link>
      <Link to="/a/a2">A2</Link>
      <Link to="/a/a3">A3</Link>
    </div>
    <div className="view">
      {/* Outlet ：路由容器用来渲染二级（多级）路由匹配的内容 */}
      <Outlet />
    </div>
  </DemoBox>
}
