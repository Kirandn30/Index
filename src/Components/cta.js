import React from "react";

let CTA=()=>{
    return(
        <section class="cta-section bg-color-2">
        <div class="pattern-layer">
            <div class="pattern-1" style={{backgroundImage:"url(assets/images/shape/shape-17.png)"}}></div>
            <div class="pattern-2" style={{backgroundImage:"url(assets/images/shape/shape-18.png)"}}></div>
            <div class="pattern-3" style={{backgroundImage:"url(assets/images/shape/shape-19.png)"}}></div>
        </div>
        <div class="auto-container">
            <div class="row clearfix">
                <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div class="image-box wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <figure class="image"><img src="assets/images/resource/phone-1.png" alt=""/></figure>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div class="content_block_2">
                        <div class="content-box">
                            <div class="sec-title light">
                                <p>Download apps</p>
                                <h2>For Better Test Download Mobile App</h2>
                            </div>
                            <div class="text">
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna.</p>
                            </div>
                            <div class="btn-box clearfix">
                                <a href="index.html" class="download-btn app-store">
                                    <i class="fab fa-apple"></i>
                                    <span>Download on</span>
                                    <h3>App Store</h3>
                                </a>
                                <a href="index.html" class="download-btn play-store">
                                    <i class="fab fa-google-play"></i>
                                    <span>Download on</span>
                                    <h3>Google Play</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default CTA;