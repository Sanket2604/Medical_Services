import React, {useEffect} from 'react'
import '../CSS/page1.css';
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import updesign from '../assets/page1/updesign.png';
import downdesign1 from '../assets/page1/downdesign1.png';
import downdesign2 from '../assets/page1/downdesign2.png';
import righttriangle from '../assets/page1/rightarrow.png';
import bottomtriangle from '../assets/page1/bottomtriangle.png';
import toptriangle from '../assets/page1/toptriangle.png';

function Cont1(){
    return(
        <div className="container-fluid cont1">
            <div className="toplogo">
                <div className="box">
                    <div className="logo"></div>
                    <div className="brand">Medical<br />Services</div>
                </div>
                <div className="tagline">Connecting Worlds Healthcare</div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-7 box1">
                    <p className="mainheading">Your Medical Assistance in India.</p>
                    <p className="smallheading">Discover High Quality and Affordable Treatment in India.</p>
                    <div className="bluebtncnt"><span className="bluebtn">Get Quote</span></div>
                </div>
                <div className="col-12 col-lg-5 box2">
                </div>
            </div>
            <a href="#tab1" className="downarrow"></a>
        </div>
    );
}

function Nav(){
    return(
        <div className="navigation" id="tab1">
            <div className="brand_items">
                <div className="logo"></div>
                <div className="brand">Medical Services</div>
            </div>
            <div className="nav_items">
                <span className="white home" href=""></span>
                <span className="white hospital" href="">Hositpal</span> 
                <span className="white doctor" href="">Doctor</span> 
                <span className="white cost" href="">Cost</span> 
                <span className="white consult" href="">Free Ceonsult</span>
                <span className="white patient" href="">Patient Stories</span>
            </div>
        </div>
    );
}
function Cont2(){
    return(
        <div className="cont2">
            <div className="updesign">
                <img src={updesign} width="100%" alt="" />
            </div>
            <div className="container-fluid box_2">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form">
                            <input className="form-control treatment_input" type="text" placeholder="Treatment"/>
                            <input className="form-control location_input" type="text" placeholder="Location"/>
                            <div className="searchbutton"></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="estimate">
                            <p>Get Instant Estimations</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6" style={{zIndex: "-1"}}>
                        <div className="doctor_earphone"></div>
                    </div>
                    <div className="col-6" style={{zIndex: "-1"}}>
                        <div className="doctor"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Cont3(){
    return(
        <div className="cont3 container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6 box_1">
                    <p className="bigheading">Help Us With The Patient Details</p>
                    <p className="smallheading">We'll Help You Discover High Quality and Affordable Treatments in India.</p>
                </div>
                <div className="col-12 col-lg-6 box_2">
                    <div className="form">
                        <label for="Name" style={{marginTop: "0"}}>Patient Name</label>
                        <input className="form-control input_area" type="text" placeholder="Patient Name"/>
                        <label for="Email">Email</label>
                        <input className="form-control input_area" type="text" placeholder="Email"/>
                        <label for="country">Country</label>
                        <input className="form-control input_area" type="text" placeholder="Country"/>
                        <label for="City">City</label>
                        <input className="form-control input_area" type="text" placeholder="City"/>
                        <label for="Phone Number">Phone Number</label>
                        <input className="form-control input_area" type="text" placeholder="Phone Number"/>
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
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
                    <div className="col-12 col-lg-6">
                        <div className="content">
                            <p className="bigheading">2500+ surgeons and specialists on one platform.</p>
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
                <div className="line des"></div>
                <div className="grid des">
                    <div className="block">
                        <div className="circle">
                            <div className="img img1"></div>
                        </div>
                        <div className="content">Send Details</div>
                        <img className="rt" src={righttriangle} width="100%" alt=""/>
                    </div>
                    <div className="block">
                        <div className="circle">
                            <div className="img img2"></div>
                        </div>
                        <div className="content">Get Invitation</div>
                        <img className="rt des" src={righttriangle} width="100%" alt=""/>
                    </div>
                    <div className="block">
                        <div className="circle">
                            <div className="img img3"></div>
                        </div>
                        <div className="content">Fly</div>
                        <img className="rt" src={righttriangle} width="100%" alt=""/>
                    </div>
                    <div className="block">
                        <div className="circle">
                            <div className="img img4"></div>
                        </div>
                        <div className="content">Get Treated</div>
                    </div>
                </div>
                <div className="grid mob">
                    <div className="block">
                        <div className="circle">
                            <div className="img img1"></div>
                            <img className="mrt" src={righttriangle} width="100%" alt=""/>
                        </div>
                        <div className="content">Send Details</div>
                    </div>
                    <div className="block">
                        <div className="circle">
                            <div className="img img2"></div>
                            <img className="mrt" src={righttriangle} width="100%" alt=""/>
                        </div>
                        <div className="content">Get Invitation</div>
                    </div>
                    <div className="block">
                        <div className="circle">
                            <div className="img img3"></div>
                            <img className="mrt" src={righttriangle} width="100%" alt=""/>
                        </div>
                        <div className="content">Fly</div>
                    </div>
                    <div className="block">
                        <div className="circle">
                            <div className="img img4"></div>
                            <div className="line"></div>
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
function Page1(props){

    useEffect(()=>{
        document.title = `Medical Services`
        window.scrollTo(0, 0)
    },[])

    return(
        <div className="page1">
            <ul style={{display: "flex", justifyContent: "space-around", position: "fixed", width:"100%", background: "white", zIndex: "5", backgroundColor: "#000492"}}>
                <Link to="page1" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page1</li></Link>
                <Link to="page2" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page2</li></Link>
                <Link to="page3" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page3</li></Link>
                <Link to="page4" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page4</li></Link>
                <Link to="page5" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page5</li></Link>
                <Link to="page6" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page6</li></Link>
                <Link to="page7" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page7</li></Link>
                <Link to="page8" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page8</li></Link>
                <Link to="page9" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page9</li></Link>
                <Link to="page10" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page10</li></Link>
            </ul>
            <Cont1 />
            <Nav />
            <Cont2 />
            <div className="bottomborder">
                <div className="firstbottom"></div>
                <div className="secondbottom"></div>
            </div>
            <Cont3 />
            <div className="downdesign up">
                <img className="bottom" src={downdesign1} width="100%" alt=""/>
                <img className="top" src={downdesign2} width="100%" alt=""/>
            </div>
            <Cont4 />
            <div className="downdesign down">
                <img className="bottom" src={downdesign1} width="100%" alt=""/>
                <img className="top" src={downdesign2} width="100%" alt=""/>
            </div>
            <Cont5 />
            
            <div className="downdesigntriangle">
                <div className="content">Working Procedures</div>
                <img className="bottom" src={bottomtriangle} width="100%" alt=""/>
                <img className="top" src={toptriangle} width="100%" alt=""/>
            </div>
            <div className="bottomborder2">
                <div className="secondbottom"></div>
                <div className="firstbottom"></div>
            </div>
            <Cont6 />
            <Footer />
        </div>
    );

}

export default Page1;