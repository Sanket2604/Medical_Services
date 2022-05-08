import React, {useEffect} from 'react'
import '../CSS/page7.css';
import Header from './header'
import Footer from './footer'
import Form from './form'
import Enquiry from './enquiry'

function Card(){
    return(
        <div className="col-12 col-sm-6 card_cnt">
            <div className="card_">
                <div className="img"></div>
                <div className="date">3 july, 2019</div>
                <div className="bigheading">Betty From Zambia Gets rid of Cancer after Coming to India.</div>
                <div className="bluebar"></div>
                <div className="smallheading">Betty kaluwa went to Medanta Hospital and went back happily.</div>
                <span className="read_more" >Read More..</span>
            </div>
        </div>
    )
}
function Page7(props){

    useEffect(()=>{
        document.title = `Medical Services`
        window.scrollTo(0, 0)
    },[])

    return(
        <div className="page7">
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
                            <div className="row">
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>
                            
                            
                            <div className="pgcounter">
                                <div className="pg_no">1</div>
                                <div className="next_pg">Next <i className="fas fa-caret-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Enquiry/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Page7;