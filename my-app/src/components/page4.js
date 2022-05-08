import React, {useEffect} from 'react'
import '../CSS/page4.css';
import Header from './header'
import Footer from './footer'
import Form from './form'

function Card(){
    return(
        <div className="hospital"> 
            <div className="img_cont"><div className="img"></div></div>
            <div className="hospital_name">Apollo Hospital </div>
            <div className="city">Bengaluru<br/><span className="smallheading">CITY</span></div>
            <div className="no_doctor">5<br/><span className="smallheading">DOCTORS</span></div>
        </div>
    )
}
function Page4(props){

    useEffect(()=>{
        document.title = `Medical Services`
        window.scrollTo(0, 0)
    },[])
    
    return(
        <div className="page4">
            <Header />
            <p className="main_heading">Best Doctors Of Top Hospitals In India</p>
            <div className="cont1">
                <div className="hospital_list">
                    <Card/>
                    <Card/>
                    <Card/>
                    <div className="pgcounter">
                        <div className="pg_no">1</div>
                        <div className="next_pg">Next <i className="fas fa-caret-right"></i></div>
                    </div>
                </div>
            </div>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Page4;