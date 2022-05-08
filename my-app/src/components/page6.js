import React, {useEffect} from 'react'
import '../CSS/page6.css'
import Header from './header'
import Footer from './footer'
import Form from './form'
import Enquiry from './enquiry'

function Page6(){

    useEffect(()=>{
        document.title = `Medical Services`
        window.scrollTo(0, 0)
    },[])
    
    return(
        <div className="page6">
            <Header/>
            <div className="container-fluid cont1">
                <div className="row">
                    <div className="col-12 col-lg-3 details">
                        <div className="details_item">
                            <p className="about ele">About Doctor</p>
                            <p className="hos ele">Hospital</p>
                            <p className="spe ele">Specialization</p>
                            <p className="lot ele">List of Treatments</p>
                            <p className="wexp ele">Work Experience</p>
                            <p className="edu ele">Education</p>
                            <p className="pp ele">Paper Published</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 content_area">
                        <div className="content">
                            <div className="box1">
                                <div className="img"></div>
                                <div className="data">
                                    <p className="bigheading">Dr. Vikram Kamath</p>
                                    <p> Neurologist<br/>
                                        Senior Consultant , MBBS, DM, 15 years of experience<br/>
                                        Bangalore , India</p>
                                    <div className="book_apnt">Book Appointment</div>
                                </div>
                            </div>
                            <div className="box2">
                                <p>About Doctor</p>
                                <ul className="data">
                                    <li>Dr. Kamath has an experience of 15+ years in treating patients with stroke and Demyelinatingn diseases.</li>
                                    <li>He has clinical interests in Stroke, Demyelinating diseases, Neuroinfections, Neurological Problems and Neuro Infections.</li>
                                    <li>He completed his MBBS from Mangalore University, Karnataka, India in 1996 and DM Neuro from National Institute of Mental Health and Neurosciences (NIMHANS) in 2000.</li>
                                </ul>
                            </div>
                            <div className="box3">
                                <p>Hospital</p>
                                <div className="data">Apollo Hospital, Bangalore</div>
                            </div>
                            <div className="box4">
                                <p>Specialization</p>
                                <ul className="data">
                                    <li>Stroke</li>
                                    <li>Neurological Problems</li>
                                    <li>Neuro Infections</li>
                                    <li>Demyelinating diseases</li>
                                </ul>
                            </div>
                            <div className="box5">
                                <p>List Of Treatments</p>
                                <div className="data">
                                    <div className="row1">
                                        <ul>
                                            <li>Temporal Lobectomy</li>
                                            <li>Lesionectomy</li>
                                            <li>Hemispherectomy</li>
                                            <li>Corpus Callosotomy</li>
                                            <li>Vagus Nerve Stimulation</li>
                                            <li>Multiple Subpial Transections MST</li>
                                            <li>VP Shunting</li>
                                            <li>Ventriculostomy</li>
                                            <li>Skull Base Surgery</li>
                                            <li>Sleep Disorders</li>
                                            <li>Restless Leg Syndrome Treatment</li>                            
                                            <li>Narcolepsy Treatment</li>
                                        </ul>
                                    </div>
                                    <div className="row2">
                                        <ul>
                                            <li>Headache</li>
                                            <li>Multiple Sclerosis Treatment</li>
                                            <li>Chronic Cerebro Spinal Venous Insufficiency Treatment</li>
                                            <li>Liberation Treatment</li>
                                            <li>Sensory Ataxia Treatment</li>
                                            <li>Cerebral Palsy - Stem Cell Treatment</li>
                                            <li>Craniotomy Surgery</li>
                                            <li>Cranioplasty</li>
                                            <li>Neural Stem Cell Therapy</li>
                                            <li>Autism - Stem Cell Treatment</li>
                                            <li>Muscular Dystrophy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box6">
                                <p>Work Experience</p>
                                <ul className="data">
                                    <li>Senior Resident, National Institute of Mental Health and Neurosciences</li>
                                    <li>Associate Professor, St. Johns Medical Hospital, Bangalore Senior Consultant, Apollo Hospital, Bangalore</li>
                                </ul>
                            </div>
                            <div className="box7">
                                <p>Education</p>
                                <ul className="data">
                                    <li>MBBS, 1996, Mangalore University, Karnataka</li>
                                    <li>DM, 2000, Neuro from National Institute of Mental Health and Neurosciences</li>
                                </ul>
                            </div>
                            <div className="box8">
                                <p>Paper Published</p>
                                <ul className="data">
                                    <li>Autonomic dysfunction in Wilson’s disease-a clinical and electrophysiological study. S Meenakshi-Sundaram, A.B.Taly, V.Kamath, G.R.Arunodaya, S.Rao and H.S.Swamy. Clinical Autonomic Research (2002) 12:185-189.</li>
                                    <li>Phenobarbitone induced gingival hyperplasia-case report. S.Sinha, V.Kamath, A.B.Taly, G.R.Arunodaya. J Neurol Neurosurg Psychiatry (2002) 73: 601-602</li>
                                </ul>
                            </div>
                            <div className="box9">
                                <p>Location</p>
                                <div className="data">Bangalore<br/>India</div>
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

export default Page6;