import React from 'react'
import '../CSS/footer.css';
import downdesign1 from '../assets/page1/downdesign1.png';
import downdesign2 from '../assets/page1/downdesign2.png';

function Footer(){
    return(
        <div class="footer">
            <div className="downdesign">
                <img className="bottom" src={downdesign1} width="100%" alt=""/>
                <img className="top" src={downdesign2} width="100%" alt=""/>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-7 col-lg-6 box_1">
                        <div class="box_11">
                            <p class="bigheading">TOP DOCTORS BY SPECIALTY</p>
                            <div class="smallheading">
                                Best Knee Replacement Surgeon <br/>
                                Best Urologist<br/>
                                Best Spine Surgeon<br/>
                                Best ENT Surgeons<br/>
                                Best Orthopedic Docotor<br/>
                                Best Cardiologist
                            </div>
                        </div>
                        <div class="box_12">
                            <p class="bigheading">TOP HOSPITALS</p>
                            <div class="smallheading">
                                Apollo Hospital Delhi<br/>
                                Medanta Hospital Gurgaon<br/>
                                Max Hospital Delhi<br/>
                                Jaslok hospital Mumbai<br/>
                                Artemis hospital Gurgaon<br/>
                                Fortis Hospital Gurgaon
                            </div>
                        </div>
                    </div>
                    <div class="col-5 col-lg-6 box_2">
                        <div class="box_21">
                            <p class="bigheading">Useful Links</p>
                        </div>
                        <div class="box_22">
                            <a class="smallheading" href="">About Us</a>
                            <a class="smallheading" href="">Our Services</a>
                            <a class="smallheading" href="">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;