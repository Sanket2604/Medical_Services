import React, {useEffect} from 'react'
import '../CSS/page10.css';
import Header from './header'
import Footer from './footer'
import Enquiry from './enquiry'

function Page10(props){

    useEffect(()=>{
        document.title = `Medical Services`
        window.scrollTo(0, 0)
    },[])
    
    return(
        <div className="page10">
            <Header/>
            <p className="main_heading">Help Us With The Patient Details</p>
            <div className="cont1">
                <div className="card_">
                    <div className="row1">
                        <input className="form-control" type="text" placeholder="Patient Name"/>
                        <input className="form-control" type="text" placeholder="Email*"/>
                        <input className="form-control" type="text" placeholder="Country*"/>
                    </div>
                    <div className="row2">
                        <input className="form-control" type="text" placeholder="City*"/>
                        <div className="ph_no">
                            <input className="form-control code" type="text" placeholder="+91"/>
                            <input className="form-control ph" type="text" placeholder="Phone Number*"/>
                        </div>
                        <input className="form-control" type="text" placeholder="Date Of Birth"/>
                    </div>
                    <div className="row3">
                        <textarea className="form-control" placeholder="Describe Your Medical Issue" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="row4">
                        <span className="heading">UPLOAD FILES</span>
                        <div className="uploads">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="labreports"/>
                                <label className="custom-file-label" for="exampleInputFile" data-browse="labreports">Labreports</label>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="prescriptions"/>
                                <label className="custom-file-label" for="exampleInputFile" data-browse="prescriptions">Prescriptions</label>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="others"/>
                                <label className="custom-file-label" for="exampleInputFile" data-browse="others">Others</label>
                            </div>
                        </div>
                    </div>
                    <div className="row5">
                        <span>Submit</span>
                    </div>
                </div>
            </div>
            <div className="cont2">
                <p>"To overcome restrictions due to Corona Virus, many patients are opting<br/>for <b>Consultation with doctor on phone.</b><br/>
                    Let us know about your interest while submitting the enquiry.<br/>
                    We will try our best for the appointment. If doctor is not available, we will<br/>recommend other options.<br/>
                    We will call you to collect medical details, confirm appointment time,<br/>and collect online payment."</p>
            </div>
            <div className="cont4">
                <div className="doctor_img"></div>
            </div>
            <Enquiry/>
            <Footer/>
        </div>
    )
}

export default Page10;