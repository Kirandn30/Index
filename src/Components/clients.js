import React from "react";

let Clients=()=>{
    return(
        <section class="clients-section bg-color-2">
        <div class="pattern-layer">
            <div class="pattern-1" style={{backgroundImage:"url(assets/images/shape/shape-3.png)"}}></div>
            <div class="pattern-2" style={{backgroundImage:"url(assets/images/shape/shape-4.png)"}}></div>
        </div>
        <div class="auto-container">
            <div class="auto-container">
                <div class="clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
                    <figure class="clients-logo-box"><a href="index.html"><img src="assets/images/clients/clients-logo-1.png" alt=""/></a></figure>
                    <figure class="clients-logo-box"><a href="index.html"><img src="assets/images/clients/clients-logo-2.png" alt=""/></a></figure>
                    <figure class="clients-logo-box"><a href="index.html"><img src="assets/images/clients/c/lients-logo-3.png" alt=""/></a></figure>
                    <figure class="clients-logo-box"><a href="index.html"><img src="assets/images/clients/clients-logo-4.png" alt=""/></a></figure>
                    <figure class="clients-logo-box"><a href="index.html"><img src="assets/images/clients/clients-logo-5.png" alt=""/></a></figure>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Clients;