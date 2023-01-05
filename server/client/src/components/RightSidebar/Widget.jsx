import React from 'react'
import './RightSidebar.css'
import message from '../../assets/message.svg'
import pen from '../../assets/pen-solid.svg'
import backlogo from '../../assets/black-logo.svg'
const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width='18'/>
                <p>Observability is key to the future <br /> of software (and your DevOps career)</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width='18'/>
                <p>Podcast 374: How valuable is your screen <br /> name?</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
              <img src={message} alt="pen" width='18'/>
              <p>Review queue workflows - Final release....</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={message} alt="pen" width='18'/>
                <p>Please welcome Valued Associates: #958 <br /> - V2Blast #959 - SpencerG</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={backlogo} alt="pen" width='18'/>
                <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <p>38</p>
                <p>Why was this spam flag declined, yet <br /> the question marked as spam?</p>
            </div>
            <div className="right-sidebar-div-2">
                <p>20</p>
                <p>What is the best course of action when <br /> a user has high enough rep to...</p>
            </div>
            <div className="right-sidebar-div-2">
                <p>14</p>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
   
  )
}

export default Widget