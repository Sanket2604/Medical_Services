import React, {useEffect} from 'react'
import '../CSS/page9.css';
import Header from './header'
import Footer from './footer'
import Enquiry from './enquiry'

function Page9(props){

    useEffect(()=>{
        document.title = `Medical Services`
        window.scrollTo(0, 0)
    },[])

    return(
        <div className="page9">
            <Header/>
            <p className="main_heading">Medical Travel Cost</p>
            <div className="cont1">
                <div className="card_">
                    <div className="row1">
                        <div className="dropdown">
                            <button className="btn btn1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Treatment <i className="fas fa-sort-down"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select City <i className="fas fa-sort-down"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                No. Of Travellers <i className="fas fa-sort-down"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <span>Get Estimates</span>
                    </div>
                    <div className="row3">
                        <p className="heading">INCLUDE</p>
                        <div className="circle_cont">
                            <div className="span">
                                <div className="circle circle1">Airline</div>
                            </div>
                            <div className="span">
                                <div className="circle circle2">Visa</div>
                            </div>
                            <div className="span">
                                <div className="circle circle3">Stay & Food</div>
                            </div>
                            <div className="span">
                                <div className="circle circle4">Daily Commute</div>
                            </div>
                            <div className="span2">
                                <div className="circle circle5">Miscs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Enquiry/>
            <Footer/>
        </div>
    )
}

export default Page9;