import React from "react";

let About=()=>{
    return(
        <section class="about-section">
        <div class="auto-container">
            <div class="row align-items-center clearfix">
                <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div class="image_block_1">
                        <div class="image-box">
                            <div class="pattern">
                                <div class="pattern-1" style={{backgroundImage:"url(assets/images/shape/shape-15.png)"}}></div>
                                <div class="pattern-2"></div>
                                <div class="pattern-3" style={{backgroundImage:"url(assets/images/shape/shape-16.png)"}}></div>
                            </div>
                            <figure class="image clearfix"><img src="assets/images/resource/about-1.png" alt=""/></figure>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div class="content_block_1">
                        <div class="content-box">
                            <div class="sec-title">
                                <p>About Docpro</p>
                                <h2>Bring care to your home with one click</h2>
                            </div>
                            <div class="text">
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.</p>
                            </div>
                            <ul class="list-style-one clearfix">
                                <li>Associates Insurance</li>
                                <li>Pina & Insurance</li>
                            </ul>
                            <div class="btn-box"><a href="about.html" class="theme-btn-one">About Us<i class="icon-Arrow-Right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;