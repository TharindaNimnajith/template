import React from 'react'
import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact'
import {NavLink, Route, Switch} from 'react-router-dom'
import A from '../pages/A'
import B from '../pages/B'
import C from '../pages/C'

const SideNav = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      overflow: 'scroll initial'
    }}>
      <CDBSidebar textColor='#fff'
                  backgroundColor='#333'>
        <CDBSidebarHeader prefix={
          <i className='fa fa-bars fa-large'/>
        }/>
        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact
                     to='/A'
                     activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='columns'>
                A
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact
                     to='/B'
                     activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='columns'>
                B
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact
                     to='/C'
                     activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='columns'>
                C
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      <Switch>
        <Route path='/A'>
          <A/>
        </Route>
        <Route path='/B'>
          <B/>
        </Route>
        <Route path='/C'>
          <C/>
        </Route>
      </Switch>
    </div>
  )
}

export default SideNav
