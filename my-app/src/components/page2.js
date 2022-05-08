import React, {useEffect} from 'react'
import '../CSS/page2.css';
import Header from './header'
import Footer from './footer'

function Card(){

    return(
        <div className="card_ container-fluid">
            <div className="row">
                <div className="col-12 col-lg-4 image_section">
                    <div className="img"></div>
                    <span className="text">accredations</span>
                    <div className="circlecontainer">
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                    </div>
                </div>
                <div className="col-12 col-lg-8 content">
                    <div className="heading">Apollo Hospital, Bangalore</div>
                    <div className="details">
                        <div className="ele ele1">
                            <div className="img img1"></div>
                            <div className="det">
                                Bangalore, India
                            </div>
                        </div>
                        <div className="ele ele2">
                            <div className="img img2"></div>
                            <div className="det">
                                Established in : 2007
                            </div>
                        </div>
                        <div className="ele ele3">
                            <div className="img img3"></div>
                            <div className="det">
                            Number of Beds : 250
                            </div>
                        </div>
                        <div className="ele ele4">
                            <div className="img img4"></div>
                            <div className="det">
                            Multi Specialty
                            </div>
                        </div>
                        <div className="ele ele5">
                            <div className="img img5"></div>
                            <div className="det">
                                About : Apollo Bangalore is one of the most modern hospital... committed to invest in the latest medical technology to ensure that all their patients benefit from the latest knowledge.
                            </div>
                        </div>
                    </div>
                    <div className="btns">
                        <span className="read">Read More...</span>
                        <span className="enqbtn">Send Enquiry</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Cont1(){
    return(
        <div className="container-fluid cont1">
            <div className="row">
                <div className="col-12 col-lg-3 dropdown">
                    <div className="dropdownbox">
                        <div className="dept">
                            <div className="btn-group">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                By Department
                                </button>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                        <div className="city">
                            <div className="btn-group">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                By City
                                </button>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                        <div className="speciality">
                            <div className="btn-group">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                By Speciality
                                </button>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                        <div className="nob">
                            <div className="btn-group">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                By Number of Beds
                                </button>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-9">
                    <div className="container-fluid result_field"> 
                            <Card />
                            <Card />
                        <div className="pgcounter">
                            <div className="pg_no">1</div>
                            <div className="next_pg">Next <i className="fas fa-caret-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Page2(props){

    useEffect(()=>{
        document.title = `Medical Services`
        window.scrollTo(0, 0)
    },[])

    return(

    <div className="page2">
        <Header />        
        <p className="main_heading">Top Hospitals in India</p>
        <div className="recordcounter">
            <div className="counter">09</div>
            <div className="record">Records Found.</div>
        </div>
        <Cont1 />
        <Footer />
    </div>
    )
}

export default Page2;