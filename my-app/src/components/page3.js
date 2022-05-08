import React, {useEffect} from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import '../CSS/page3.css';
import Header from './header'
import Footer from './footer'
import Form from './form'
import Enquiry from './enquiry'

function Page3(props){

    useEffect(()=>{
        document.title = `Medical Services`
        window.scrollTo(0, 0)
    },[])

    return(
        <div className="page3">
            <Header/>
            <div className="container-fluid cont1" >
                <div className="row">
                    <div className="col-12 col-lg-3 details">
                        <div className="details_item">
                            <p className="about ele">About Hospital</p>
                            <p className="terms ele">Team & Specialities</p>
                            <p className="infra ele">Infrastructure</p>
                            <p className="loc ele">Location</p>
                            <p className="address ele">Hospital Address</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 content_area">
                        <div className="content">
                            <div className="box1">
                                <div className="box11">
                                    <p>Apollo Hospital Bangalore <br/>
                                        Bannerghatta Road<br/>
                                        <span>Karnataka, India</span></p>
                                </div>
                                <div className="box12">
                                    <div className="btncont">
                                        <a href="" className="enqbtn">Send Enquiry</a>
                                    </div>  
                                </div>
                            </div>
                            <div className="box2">
                                
                            </div>
                            <div className="box3">
                                <p>About Hospital</p>
                                <ul className="data">
                                    <li>Apollo Hospital, Bangalore established in 2007 is one of the most modern hospital, committed to invest in the latest medical technology to ensure that all their patients benefit from the latest knowledge.</li>
                                    <li>They are equipped with state-of-the-art technology making it a powerhouse of healthcare in Bengaluru</li>
                                    <li>The Hospital is accredited by the Joint Commission International (JCI),which is the gold standard accreditation for health care organizations</li>
                                    <li>Hospitals has over 100 consultants and 70% of them have either studied or worked in reputed institutes Apollo Hospital</li>
                                    <li>Bangalore has over a hundred Hospital uses Protocol and Care Pathway based treatment models to ensure the best outcomes for patients.</li>
                                    <li>It is the first hospital to use Y shaped stent for tracheoesophageal fistula in the region and have a distinction of performing largest series of airway stents in the country.</li>
                                    <li>Apollo Hospitals, Bangalore have successfully performed some of the rare procedures like four autologous chondrocyte implantations, Spinal angiolipoma excision and Tibial tuberosity shift with MPSL reconstruction.</li>
                                    <li>The value added services provided by them are
                                        Apollo prism: It is a patient-controlled Personal Health Record with which the users can import and manage health records created during various doctor visits and can also access their online health record and medical reports anytime and anywhere.
                                        </li>
                                    <li>Apollo Telemedicine: Telemedicine brings healthcare within reach of population residing in medically inaccessible areas.
                                        Sunshine store: Apollo Specialty Cancer Hospital, Chennai has launched a special "Sunshine Store" - a retail outlet catering to the needs of cancer patients. It has products like wigs, prosthesis, pressure garments, CDS, scarves and innerwear that would make the journey to better health just that much easier.
                                        </li>
                                    <li>Apollo M.I.N.D Line: Apollo M.I.N.D. Line is a psychological tele-counselling helpline to support individuals who are dealing with complications faced in everyday life. Our counsellors have been handpicked to offer the best services</li>
                                    <li>One of the flagship centres of excellence at Apollo Hospitals, Bengaluru is the 
                                        "The Minimal Access Surgery Centre" (MASC) which is dedicated to the practice of surgical techniques that are least invasive for the patient.
                                        </li>
                                    <li>Apollo Hospitals was ranked the 2nd best multi-speciality hospital in Bangalore by the Week A C Nielsen, Best Hospital</li>
                                </ul>
                            </div>
                            <div className="box4">
                                <p>Team And Specility</p>
                                <ul className="data">
                                    <li>The Heart Institutes at Apollo Hospitals is part of one of the largest groups of Cardiology and Cardio-Thoracic Vascular surgery in the world. There scorecard shows an unmatched record of over 100,000 heart surgeries, which include complicated Coronary Artery Bypass operations.</li>
                                    <li>They are the pioneers of total knee replacement and Illizarov Procedure for limb lengthening in India</li>
                                </ul>
                            </div>
                            <div className="box5">
                                <p> TOP DOCTORS AT APOLLO HOSPITAL,<br/> BANGALORE</p>
                                <div id="locationcarousel" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="card_container">
                                                <div className="card_ card1">
                                                    <div className="img"></div>
                                                    <div className="bigheading">Dr. Venugopal B</div>
                                                    <div className="smallheading">Orthopaedic and Joint Replacement Surgeon<br/>
                                                        Consultant , DNB, D.Ortho, MBBS, 11 years of experience<br/>
                                                        Bangalore , India</div>
                                                </div>
                                                <div className="card_ card2">
                                                    <div className="img"></div>
                                                    <div className="bigheading">Dr. Vikram Kamath</div>
                                                    <div className="smallheading">Neurologist<br/>
                                                        Senior Consultant , MBBS, DM, 15 years of experience<br/>
                                                        Bangalore , India</div>
                                                </div>
                                                <div className="card_ card3">
                                                    <div className="img"></div>
                                                    <div className="bigheading">Dr. Chitra Ramamurthy</div>
                                                    <div className="smallheading">Gynaecologist and Obstetrician<br/>
                                                        Senior Consultant , MD, MBBS, 33 years of experience<br/>
                                                        Bangalore , India</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="card_container">
                                                <div className="card_ card4">
                                                    <div className="img"></div>
                                                    <div className="bigheading"></div>
                                                    <div className="smallheading"></div>
                                                </div>
                                                <div className="card_ card5">
                                                    <div className="img"></div>
                                                    <div className="bigheading"></div>
                                                    <div className="smallheading"></div>
                                                </div>
                                                <div className="card_ card6">
                                                    <div className="img"></div>
                                                    <div className="bigheading"></div>
                                                    <div className="smallheading"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="card_container">
                                                <div className="card_ card7">
                                                    <div className="img"></div>
                                                    <div className="bigheading"></div>
                                                    <div className="smallheading"></div>
                                                </div>
                                                <div className="card_ card8">
                                                    <div className="img"></div>
                                                    <div className="bigheading"></div>
                                                    <div className="smallheading"></div>
                                                </div>
                                                <div className="card_ card9">
                                                    <div className="img"></div>
                                                    <div className="bigheading"></div>
                                                    <div className="smallheading"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev doc_nav-left" href="#locationcarousel" role="button" data-slide="prev">
                                        <span className="back_arrow"><i className="fas fa-chevron-left fa-3x"></i></span> 
                                    </a>
                                    <a className="carousel-control-next doc_nav-right" href="#locationcarousel" role="button" data-slide="next">
                                        <span className="back_arrow"><i className="fas fa-chevron-right fa-3x"></i></span>     
                                    </a>
                                </div>
                            </div>
                            <div className="box6">
                                <p>Location</p>
                                <ul className="data">
                                    <li>Distance from </li>
                                    <li>Airport : Around 44 Kms</li>
                                    <li>Railway Station: Around 13.7 Kms</li>
                                </ul>
                            </div>
                            <div className="box7">
                                <p>Hospital Address</p>
                                <ul className="data">
                                    <li>154/11, Bannerghatta Main Road,</li>
                                    <li>IIM Opposite, Krishnaraju Layout, Amalodbhavi Nagar, Panduranga Nagar</li>
                                    <li>Bangalore Karnataka 560076, India</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Enquiry />
            <Form />
            <Footer/>
        </div>
    )

}

export default Page3;