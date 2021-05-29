import React from 'react'
import '../CSS/page2.css';
import Header from './header'
import Footer from './footer'
// import {downdesign1} from '../assets/page2/downdesign1.svg'

// const downdesign1 = () => {
//     return (
//         <svg id="footer_design" data-name="footer design" xmlns="http://www.w3.org/2000/svg" width="1921.831" height="617.549" viewBox="0 0 1921.831 617.549">
//             <path id="ocean" d="M1685,156.951s553.477-349.7,961.314.868,960.516.868,960.516.868V549.334H1685.568Z" transform="translate(-1685 -1.786)" fill="#7068fc"/>
//             <path id="ocean-2" data-name="ocean" d="M1685,132.1s553.477-293.7,961.314.729,960.516.729,960.516.729V535.9H1685.568Z" transform="translate(-1685 81.646)" fill="#2e008b"/>
//         </svg>
//     )
// }
function Card(){
    return(
        <div class="row">
            <div class="col-12 col-lg-4 image_section">
                <div class="img"></div>
                <span class="text">accredations</span>
                <div class="circlecontainer">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                </div>
            </div>
            <div class="col-12 col-lg-8 content">
                <div class="heading">Apollo Hospital, Bangalore</div>
                <div class="details">
                    <div class="ele ele1">
                        <div class="img img1"></div>
                        <div class="det">
                            Bangalore, India
                        </div>
                    </div>
                    <div class="ele ele2">
                        <div class="img img2"></div>
                        <div class="det">
                            Established in : 2007
                        </div>
                    </div>
                    <div class="ele ele3">
                        <div class="img img3"></div>
                        <div class="det">
                        Number of Beds : 250
                        </div>
                    </div>
                    <div class="ele ele4">
                        <div class="img img4"></div>
                        <div class="det">
                        Multi Specialty
                        </div>
                    </div>
                    <div class="ele ele5">
                        <div class="img img5"></div>
                        <div class="det">
                            About : Apollo Bangalore is one of the most modern hospital... committed to invest in the latest medical technology to ensure that all their patients benefit from the latest knowledge.
                        </div>
                    </div>
                </div>
                <div class="btns">
                    <a href="" class="read">Read More...</a>
                    <a href="" class="enqbtn">Send Enquiry</a>
                </div>
            </div>
        </div>
    )
}
function Cont1(){
    return(
        <div class="container-fluid cont1">
            <div class="row">
                <div class="col-12 col-lg-3 dropdown">
                    <div class="dropdownbox">
                        <div class="dept">
                            <div class="btn-group">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                By Department
                                </button>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                        <div class="city">
                            <div class="btn-group">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                By City
                                </button>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                        <div class="speciality">
                            <div class="btn-group">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                By Speciality
                                </button>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                        <div class="nob">
                            <div class="btn-group">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                By Number of Beds
                                </button>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-9">
                    <div class="container-fluid result_field"> 
                        <div class="card_ container-fluid">
                            <Card />
                            <Card />
                        </div>
                        <div class="pgcounter">
                            <div class="pg_no">1</div>
                            <div class="next_pg">Next <i class="fas fa-caret-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function page2(props){

    return(

    <div>
        <Header />        
        <p class="main_heading">Top Hospitals in India</p>
        <div class="recordcounter">
            <div class="counter">09</div>
            <div class="record">Records Found.</div>
        </div>
        <Cont1 />
        <div class="downdesign2">
            {/* <img class="bottom" src={downdesign1} width="100%" alt=""/> */}
        </div>
        <Footer />
    </div>
    )
}

export default page2;