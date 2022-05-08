import React, {useEffect} from 'react'
import '../CSS/page8.css';
import Header from './header'
import Footer from './footer'
import Form from './form'
import Enquiry from './enquiry'

function Page8(props){

    useEffect(()=>{
        document.title = `Medical Services`
        window.scrollTo(0, 0)
    },[])

    return(
        <div className="page8">
            <Header/>
            <div className="container-fluid cont1">
                <div className="row">
                    <div className="col-12 col-lg-3 details">
                        <div className="btn-group">
                            <button type="button" className="btn dropdown-toggle drop_down" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
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
                    <div className="col-12 col-lg-9">
                        <div className="content_area container-fluid">
                            <div className="img"></div>
                            <div className="date">3 JULY, 2019</div>
                            <div className="bigheading">Betty From Zambia Gets rid of Cancer after Coming to India.</div>
                            <div className="bluebar"></div>
                            <ul className="data">
                                <li><span className="heading">Name</span> - Teguia Angeline</li>
                                <li><span className="heading">Native Country</span> - United States</li>
                                <li><span className="heading">Chief Complaint</span> - Angelina was facing difficulty in natural conception and wanted to go through the IVF treatment to have a baby. After doing some research, the family decided to visit India for IVF treatment.</li>
                                <li><span className="heading">Hospital Name</span> - Southend Fertility and IVF Hospital, New Delhi</li>
                                <li><span className="heading">Doctor’s Name</span> - Dr. Sonia Malik</li>
                                <li><span className="heading">Treatment Taken</span> - In-vitro Fertilization</li>
                            </ul>
                            <div className="smallheading">
                                <span className="heading">Teguia Angelina Shares her experience in India:</span>
                                <p>"I would give 10 on 10 to the hospital staff, doctor’s interaction with us and services by Vaidam. No complaints whatsoever. I would surely recommend visiting India to anyone who needs medical treatment. People here are so good and nice. Expenses were also quite reasonable for an IVF treatment."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Enquiry/>
            <Form/>
            <Footer />
        </div>
    )
}

export default Page8;