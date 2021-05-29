import React from 'react'
import '../CSS/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header(props){

    return(
        <div>
            <div class="nav_cont">
                <nav class="navbar navbar-expand-lg">
                    <div class="brand_items">
                        <a class="logo" href=""></a>
                        <a class="brand" href="">Medical Services</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Hositpal</a> 
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Doctor</a> 
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Cost</a> 
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Free Ceonsult</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Patient Stories</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="searchtab">
                    <div class="row1">
                        <div class="searchbar">
                            <input class="form-control input_area" type="text" placeholder="by treatment, hospital,doctors"/>
                            <a class="searchbtn circle_1" href="">
                                <div class="circle_2"><i class="fas fa-search"></i></div>
                            </a>
                        </div>
                        <div class="consult">
                            <a class="consultbtn" href="">Consult Doctor Now</a>
                        </div>
                        <a class="estimate" href="">Get Free Estimates</a>
                    </div>
                    <div class="mobile_search">
                        <input class="form-control input_area inpjs" type="text" placeholder="by treatment, hospital,doctors"/>
                        <a class="searchbtn srchjs" href=""><i class="fas fa-search"></i>
                            <FontAwesomeIcon icon={"fa-search"} /> Search
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header