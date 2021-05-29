import React from 'react'
import '../CSS/page1.css';
// import updesign from '../assets/page1/updesign.svg';
// import cont4updesign from './assets/page1/cont4updesign.svg';
// import downdesign1 from './assets/page1/downdesign1.svg';
// import downdesign2 from './assets/page1/downdesign2.svg';
// import bottomtriangle from './assets/page1/bottomtriangle.svg';
// import toptriangle from './assets/page1/toptriangle.svg';

function Cont1(){
    return(
        <div class="container-fluid cont1">
            <div class="row">
                <div class="col-8 col-md-7 box1">
                    <p class="mainheading">Your Medical <br/> Assistance in India.</p>
                    <p class="smallheading">Discover High Quality and Affordable Treatment in India.</p>
                    <div class="bluebtncnt"><span class="bluebtn">Get Quote</span></div>
                </div>
                <div class="col-4 col-md-5 box2">
                </div>
            </div>
            <div class="downarrow"></div>
        </div>
    );
}

function Nav(){
    return(
        <div className="navigation">
            <div className="brand_items">
                <div className="logo"></div>
                <div className="brand">Medical Services</div>
            </div>
            <div className="nav_items">
                <a className="white home" href=""></a>
                <a className="white hospital" href="">Hositpal</a> 
                <a className="white doctor" href="">Doctor</a> 
                <a className="white cost" href="">Cost</a> 
                <a className="white consult" href="">Free Ceonsult</a>
                <a className="white patient" href="">Patenit Stories</a>
            </div>
        </div>
    );
}
function Cont2(){
    return(
        <div className="cont2">
            <div className="updesign">
                {/* <img src={updesign} width="100%" alt="" /> */}
            </div>
            <div className="container-fluid box_2">
                <div className="form">
                    <input className="form-control treatment_input" type="text" placeholder="Treatment" />
                    <input className="form-control location_input" type="text" placeholder="Location" />
                    <div className="searchbutton"></div>
                </div>
                <div className="estimate">
                    <p>Get Instant Estimations</p>
                </div>
                <div className="doctor"></div>
                <div className="doctor_earphone"></div>
            </div>
        </div>
    );
}
function Cont3(){
    return(
        <div className="cont3 container-fluid">
            <div className="row">
                <div className="col-12 col-md-6 box_1">
                    <p className="bigheading">Help Us With<br />The Patient Details</p>
                    <p className="smallheading">We'll Help You Discover High Quality and<br/>Affordable Treatments in India.</p>
                </div>
                <div className="col-12 col-md-6 box_2">
                    <div className="form">
                        <label for="Name" style={{marginTop: 0 + 'px'}}>Patient Name</label>
                        <input className="form-control input_area" type="text" placeholder="Patient Name"/>
                        <label for="Email">Email</label>
                        <input className="form-control input_area" type="text" placeholder="Email"/>
                        <label for="country">Country</label>
                        <input className="form-control input_area" type="text" placeholder="Country"/>
                        <label for="City">City</label>
                        <input className="form-control input_area" type="text" placeholder="City"/>
                        <label for="Phone Number">Phone Number</label>
                        <input className="form-control input_area" type="text" placeholder="Phone Number"/>
                        <div className="leftarrow"></div>
                        <div className="rightarrow"></div>
                    </div>
                    <div className="submitbtn">Submit</div>
                </div>
            </div>
        </div>
    );
}

function Cont4(){
    return(
        <div className="cont4">
            <div className="updesign">
                {/* <img src={cont4updesign} width="100%" alt="" /> */}
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <div className="grid">
                            <div className="box">
                                <div className="img img1"></div>
                                <div className="textarea">Cardiology</div>
                            </div>
                            <div className="box">
                                <div className="img img2"></div>
                                <div className="textarea">Urology</div>
                            </div>
                            <div className="box">
                                <div className="img img3"></div>
                                <div className="textarea">Cancer</div>
                            </div>
                            <div className="box">
                                <div className="img img4"></div>
                                <div className="textarea">Neuro & Brain</div>
                            </div>
                            <div className="box">
                                <div className="img img5"></div>
                                <div className="textarea">Orthopedic</div>
                            </div>
                            <div className="box">
                                <div className="img img6"></div>
                                <div className="textarea">Fertility</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content">
                            <p className="bigheading">2500+ surgeons<br/>and specialists on<br/>one platform.</p>
                            <p className="smallheading">From 100+ Hospitals In India.</p>
                            <div className="view">
                                <div className="img"></div>
                                <div className="content_1">
                                    <p>View All Hospitals</p>
                                    <p>View All Docters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Cont5(){
    return(
        <div className="cont5 container-fluid">
            <div className="row1">
                <p className="bigheading">Travel to Treatment in India: Under One Roof</p>
                <p className="smallheading">Transparent - Professional - Without Hassles</p>
            </div>
            <div className="row2">
                <div className="grid">
                    <div className="block">
                        <div className="circle">
                            <div className="img img1"></div>
                        </div>
                        <div className="content">Send Details</div>
                    </div>
                    <div className="block">
                        <div className="circle">
                            <div className="img img2"></div>
                        </div>
                        <div className="content">Get Invitation</div>
                    </div>
                    <div className="block">
                        <div className="circle">
                            <div className="img img3"></div>
                        </div>
                        <div className="content">Fly</div>
                    </div>
                    <div className="block">
                        <div className="circle">
                            <div className="img img4"></div>
                        </div>
                        <div className="content">Get Treated</div>
                    </div>
                </div>
            </div>            
        </div>
    );
}
function Cont6(){
    return(

        <div className="cont6">
            <p><span className="smallheading">Just Let Us Know,</span><br/>We Will Be Happy To Assist You</p>
            <a className="getintouchbtn" href="">Get In touch</a>
        </div>
    );
}
function page1(props){

    return(
        <div>
            <Cont1 />
            <Nav />
            <Cont2 />
            <div className="bottomborder">
                <div className="firstbottom"></div>
                <div className="secondbottom"></div>
            </div>
            <Cont3 />
            <div className="downdesign">
                {/* <img className="bottom" src={downdesign1.svg} width="100%" alt=""/> */}
                {/* <img className="top" src={downdesign2.svg} width="100%" alt=""/> */}
            </div>
            <Cont4 />
            <Cont5 />
            
            <div className="downdesigntriangle">
                {/* <img className="bottom" src={bottomtriangle.svg} width="100%" alt=""/> */}
                {/* <img className="top" src={toptriangle.svg} width="100%" alt=""/> */}
            </div>
            <div className="bottomborder2">
                <div className="secondbottom"></div>
                <div className="firstbottom"></div>
            </div>
            <Cont6 />
            <div className="downdesign2">
                {/* <img className="bottom" src={downdesign1.svg} width="100%" alt=""/> */}
                {/* <img className="top" src={downdesign2.svg} width="100%" alt=""/> */}
            </div>
        </div>
    );

}

export default page1;