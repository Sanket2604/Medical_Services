import React from 'react'
import '../CSS/enquiry.css'
import leftdesign from '../assets/page3/leftdesign.png'
import rightdesign from '../assets/page3/rightdesign.png'
function Enquiry(){
    return(
        <div className="enq">
            <div class="cont3">
                <p class="smallheading">Feel Free To Let Us Know,</p>
                <p class="bigheading">We Will Be Happy <br/>To Assist You</p>
                <div class="send_container">
                    <a class="send_btn" href="">SEND ENQUIRY</a>
                </div>
                <div class="leftdesign"><img src={leftdesign} height="400px"/></div>
                <div class="rightdesign"><img src={rightdesign} height="400px"/></div>
            </div>
        </div>
    )
}

export default Enquiry;