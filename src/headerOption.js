import React from 'react';
import './headerOption.css';
import {Avatar} from '@material-ui/core'
function headerOptions({avatar,Icon,title}) {
  return <div className="headerOption">
    {Icon&&<Icon className="headerOption_Icon"/>}
    {avatar&&<Avatar className="headerOption_ico" src={avatar} />}
    <h3 className="headerOption_title">{title}</h3>
  </div>;
}

export default headerOptions;
