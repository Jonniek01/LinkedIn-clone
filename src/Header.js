import React from 'react';
import './header.css';
import HeaderOption from './headerOption.js';

import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'

import BusinessCenterIcom from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'




function Header() {
  return <div className="header">

      <div className="header_left">

          <img src="./logo.png" alt=""/>
          <div className="header_search">
              <SearchIcon/>
              <input type="text"></input>
          </div>


      </div>
      <div className="header_right">
          <HeaderOption title="Home" Icon={HomeIcon}/>
          <HeaderOption title="My network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcom} />
          <HeaderOption title="Messaging" Icon={ChatIcon} />
          <HeaderOption title="Notifications" Icon={NotificationsIcon} />
          <HeaderOption title="me"  avatar="./me.svg" />



          

            
      </div>

  </div>;
}

export default Header;
