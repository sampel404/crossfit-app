import React from 'react';


class Intro extends React.Component{

    render(){
        return <section className="main-banner" id="mainBanner">
                <div className="main-banner-video">
                    <video autoPlay loop preload muted>
                        <source src="/movie/intro.webm" type="video/webm"/>
                        <source src="/movie/intro.mp4" type="video/mp4"/>
                        <source src="/movie/intro.ogv" type="video/ogv"/>
                    </video>
                </div>dupa
                <div className="banner" id="banner">
                    <article className="banner-slide">
                        <h2 className="banner-slide-title">
                            CrossFit
                        </h2>
                        <div className="banner-slide-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptas inventore officiis quas
                            nulla labore accusamus, excepturi itaque dolor ut.
                        </div>
                        <a href="" className="banner-slide-btn">Dowiedz się więcej</a>
                    </article>
                </div>
            </section>;
    }
}

export {Intro}