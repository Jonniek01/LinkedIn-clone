import React, {useState} from 'react';
import './Feed.css';
import InputOption from './inputOption'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventIcon from '@material-ui/icons/Event'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'




function Feed() {
    const [posts,setPosts]=useState([]);
    
  return <div className="feed">
      <div class="feed_inputContainer">
          <div className="feed_input">
              <CreateIcon/>
              <form>
                  <input type="text"/>
                  <button type="submit">Send</button>
                  </form>

          </div>
          <div className="feed_inputOptions">
              <InputOption Icon={ImageIcon} title={"Photo"} color='#7885f9'/>
              <InputOption Icon={SubscriptionsIcon} title={"Video"} color='#E7A33E'/>
              <InputOption Icon={EventIcon} title={"Event"} color='#C8CBCD'/>
              <InputOption Icon={CalendarViewDayIcon} title={"Write Article"} color='#7FC1CE'/>

              </div>

      </div>
      {/*posts*/}
      {posts.map(()=>{
                <Post name="Ndigirigi John" description="This is a test" message="this worked"/>


      })}
            <Post name="Ndigirigi John" description="This is a test" message="this worked"/>



  </div>
}

export default Feed;
