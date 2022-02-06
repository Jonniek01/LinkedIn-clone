import React from 'react';
import './sidebar.css'
import {Avatar} from '@material-ui/core'


function Sidebar() {
    const recentItem=(topic)=>{
       return <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
            </div>
    }
  return <div className="sidebar">
      <div className="sidebar_top">
          <img src="https://snead.edu/wp-content/uploads/2021/09/Technology-Effect-1536x622.jpg"alt=""/>
          <Avatar className="sidebar_avatar"/>
          <h2>Ndigirigi John</h2>
          <h4>johnndigirigi01@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
          <div class="sidebar_stat">
              <p>Who Viewed you</p>
              <p classname="sidebar_statNumber">2065</p>

          </div>
          <div class="sidebar_stat">
          <p>Views on Post</p>
              <p classname="sidebar_statNumber">5997</p>

              

</div>




  </div>
  <div className="sidebar_bottom">
      <p>Recent</p>
      {recentItem("React JS")}
      {recentItem("Programming")}
      {recentItem("Blockchain")}
      {recentItem("PWAs")}
     {recentItem("NFTs Market Place")}


  </div>
  </div>
}

export default Sidebar;
