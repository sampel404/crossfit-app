import React from 'react';


class Intro extends React.Component{

    render(){
        return <section className="main-banner" id="mainBanner">
                <div className="main-banner-video">
                    <video autoPlay loop preload muted>
                        <source src="/movie/intro_man.webm" type="video/webm"/>
                        <source src="/movie/intro_man.mp4" type="video/mp4"/>
                        <source src="/movie/intro_man.ogv" type="video/ogv"/>
                    </video>
                </div>
                <div className="banner" id="banner">
                    <article className="banner-slide">
                        <div className="banner-slide-text">
                            Lubisz <strong className="text-primary">rywalizację?</strong>
                            <div className="separator half"></div>
                            Chcesz sprawdzic na jakim <strong>levelu</strong> jestes?
                        </div>
                        <h2 className="banner-slide-title">
                            <strong>CrossFit</strong> App
                        </h2>
                        <div className="banner-slide-text">

                        </div>
                        <a href="" className="banner-slide-btn">Dowiedz się więcej</a>
                    </article>
                </div>
            </section>;
    }
}

export {Intro}