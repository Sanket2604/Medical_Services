import React, {useEffect} from 'react'
import '../CSS/page5.css';
import Header from './header'
import Footer from './footer'

function Card(){
    return(
        <div className="card_ container-fluid">
            <div className="row">
                <div className="col-12 col-md-4 image_section">
                    <div className="img"></div>
                    <span className="text">Dr. Vikram Kamath</span>
                    <span className="smalltext">Neurologist, Bangalore, India</span>
                </div>
                <div className="col-12 col-md-8 content">
                    <div className="details">
                        <p><span className="heading">Senior Consultant, 15 years of experience , MBBS, DM<br/></span>
                        <span className="smallheading">APOLLO HOSPITAL, BANGALORE<br/></span>
                        Dr. Kamath has an experience of 15+ years in treating patients with stroke and Demyelinatingn diseases.
                        He has clinical interests in Stroke, Demyelinating diseases, Neuroinfections, Neurological Problems and Neuro Infections.
                        He completed his MBBS from Mangalore University, Karnataka, India in 1996 and DM Neuro from National Institute of Mental Health and Neurosciences (NIMHANS) in 2000.</p>
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
function Page5(props){

    useEffect(()=>{
        document.title = `Medical Services`
        window.scrollTo(0, 0)
    },[])

    return(
        <div className="page5">
            <Header/>
            <p className="main_heading">Top Doctors in India</p>
            <div className="recordcounter">
                <div className="counter">09</div>
                <div className="record">Records Found.</div>
            </div>
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
                            <Card/>
                            <Card/>
                            <div className="pgcounter">
                                <div className="pg_no">1</div>
                                <div className="next_pg">Next <i className="fas fa-caret-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page5;