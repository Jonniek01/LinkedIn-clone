import React from 'react';
import './Feed.css';

import CreateIcon from '@material-ui/icons/Create'

function Feed() {
  return <div className="feed">
      <div class="feed_inputContainer">
          <div className="feed_input">
              <CreateIcon/>
              <form>
                  <input type="text"/>
                  <button type="submit">Send</button>
                  </form>

          </div>
          <div className="feed_inputOption">
              
              </div>

      </div>

  </div>
}

export default Feed;
