
import React from 'react'
import SidebarMenu, { SidebarMenuNav,Toggle } from 'react-bootstrap-sidebar-menu';
export default function SideBar() {
  return (
    <SidebarMenu onSelect={selected=>
      {
        console.log("Done");
      }
    }>
     <SideBar.Toggle></SideBar.Toggle>
      <SidebarMenuNav defaultSelected

    </SidebarMenu>

  )
}
