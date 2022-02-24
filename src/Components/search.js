import React from "react";

let Search=()=>{
    return(
        <section class="search-doctors bg-color-3">
            <div class="pattern-layer">
                <div class="pattern-1" style={{backgroundImage:"url(assets/images/shape/shape-27.png)"}}></div>
                <div class="pattern-2" style={{backgroundImage:"url(assets/images/shape/shape-28.png)"}}></div>
                <div class="pattern-3" style={{backgroundImage:"url(assets/images/shape/shape-29.png)"}}></div>
            </div>
            <div class="auto-container">
                <div class="sec-title centred">
                    <p>Meet Our Professionals</p>
                    <h2>Search for other doctors</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                        <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern" style={{backgroundImage:"url(assets/images/shape/shape-26.png)"}}></div>
                                <h3>Browse <br />by Speciality</h3>
                                <ul class="doctors-list clearfix">
                                    <li><a href="doctors-profile.html">Cardiology</a></li>
                                    <li><a href="doctors-profile.html">Dermatology</a></li>
                                    <li><a href="doctors-profile.html">Family Medicine</a></li>
                                    <li><a href="doctors-profile.html">Obstetrics & Gynecology</a></li>
                                    <li><a href="doctors-profile.html">Oncology</a></li>
                                    <li><a href="doctors-profile.html">Orthopedic Surgery</a></li>
                                </ul>
                                <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">See all<i class="icon-Arrow-Right"></i></a></div>
                                <div class="link"><a href="doctors-1.html"><i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                        <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern" style={{backgroundImage:"url(assets/images/shape/shape-26.png)"}}></div>
                                <h3>Browse <br />by Condition</h3>
                                <ul class="doctors-list clearfix">
                                    <li><a href="doctors-profile.html">Breast Cancer</a></li>
                                    <li><a href="doctors-profile.html">Dementia</a></li>
                                    <li><a href="doctors-profile.html">Endometriosis</a></li>
                                    <li><a href="doctors-profile.html">Multiple Sclerosis (MS)</a></li>
                                    <li><a href="doctors-profile.html">Fibromyalgia</a></li>
                                    <li><a href="doctors-profile.html">Parkinson's Disease</a></li>
                                </ul>
                                <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">See all<i class="icon-Arrow-Right"></i></a></div>
                                <div class="link"><a href="doctors-1.html"><i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                        <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern" style={{backgroundImage:"url(assets/images/shape/shape-26.png)"}}></div>
                                <h3>Browse <br />by Procedure</h3>
                                <ul class="doctors-list clearfix">
                                    <li><a href="doctors-profile.html">ACL Surgery</a></li>
                                    <li><a href="doctors-profile.html">EEG (Electroencephalogram)</a></li>
                                    <li><a href="doctors-profile.html">Hysterectomy</a></li>
                                    <li><a href="doctors-profile.html">Knee Replacement</a></li>
                                    <li><a href="doctors-profile.html">Multiple Sclerosis Therapy</a></li>
                                    <li><a href="doctors-profile.html">Prostate Removal</a></li>
                                </ul>
                                <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">See all<i class="icon-Arrow-Right"></i></a></div>
                                <div class="link"><a href="doctors-1.html"><i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Search;