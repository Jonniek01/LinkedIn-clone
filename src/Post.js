import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core'
import InputOption from './inputOption'

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'



function Posts({name,description,message,photoUrl}) {
  return <div className="post">
      <div className="post_header">
          <Avatar/>
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
              
          </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="tile"/>
        <InputOption Icon={ChatOutlinedIcon} title="tile"/>
        <InputOption Icon={ShareOutlinedIcon} title="tile"/>
        <InputOption Icon={SendOutlinedIcon} title="tile"/>

        </div>
  </div>;
}

export default Posts;
