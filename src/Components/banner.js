import React from "react";

let Banner=()=>{
    return(
        <section className="banner-section bg-color-1">
            <div className="pattern-layer" style={{backgroundImage:"url(assets/images/shape/shape-2.png)"}}></div>
            <div className="auto-container">
                <div className="row align-items-center clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <h1>Find Nearest Doctor.</h1>
                            <p>Amet consectetur adipisicing elit sed do eiusmod.</p>
                            <div className="form-inner">
                                <form action="index.html" method="post">
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="Ex. Name, Specialization..." required=""/>
                                        <button type="submit"><i className="icon-Arrow-Right"></i></button>
                                    </div>
                                </form>
                                <ul className="select-box clearfix">
                                    <li>
                                        <div className="single-checkbox">
                                            <input type="radio" name="check-box" id="check1" checked=""/>
                                            <label for="check1"><span></span>All</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-checkbox">
                                            <input type="radio" name="check-box" id="check2"/>
                                            <label for="check2"><span></span>Doctor</label>    
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-checkbox">
                                            <input type="radio" name="check-box" id="check3"/>
                                            <label for="check3"><span></span>Clinic</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box js-tilt">
                            <figure className="image clearfix wow fadeInRight animated animated" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="assets/images/banner/banner-image-1.png" alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;