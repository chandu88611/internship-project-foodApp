import React, { Component } from 'react'
import "./Footer.css"

// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default class Footer extends Component {
    constructor(){
      super();
      this.state={
        data:''
      }
     }

     componentDidMount(){
        this.get_date()
     }
  
  render() {
    return (
        
      <div className='container'>
      <div><h5 style={{color:"white"}}>Date and Time:{this.state.data}</h5></div>
      
      <div className='container1' ><h5><span style={{color:"red"}}>© Copyright:</span><span style={{color:"white"}}>All rights are Reserved</span></h5>

</div>
      <div className="images">
        <img src="./images/5296501_linkedin_network_linkedin logo_icon (1).png" alt="" className="image1" />
        <img src="./images/5296521_play_video_vlog_youtube_youtube logo_icon.png" alt="" className="image1" />
        <img src="./images/5296499_fb_facebook_facebook logo_icon.png" alt="" className="image1" />
        <img src="./images/4102579_applications_instagram_media_social_icon.png" alt="" className="image1" />
        <img src="./images/5296516_tweet_twitter_twitter logo_icon.png" alt="" className="image1" />
       
      </div>
      </div>
     
    
    )
  }

  get_date(){
    setInterval(()=>{
        const today=new Date()
        const date_Time=''+today.getDate()+"/" +(today.getMonth()+1)+'/'+today.getFullYear()+"@"
        +today.getHours()+"/"+today.getMinutes()+"/"+today.getSeconds()

        this.setState({
            data:date_Time
        })
    },1000)
    
  }
}

