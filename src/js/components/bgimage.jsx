import React from 'react';
// import imageUrl from '../../../images/records.jpg';




class Image extends React.Component{
    render(){
        console.log(this.props);

        const urlBg = '../../../images/' + this.props.imgHeader + ".jpg";

        return <div className="bg-image overflow-hidden" style={{backgroundImage: `url(${urlBg})`}}>
            <div className="bg-black-op">
                <div className="content content-narrow">
                    <div className="block block-no-margin block-transparent">
                        <div className="block-content block-content-full">
                            <h1 className="h1 font-w500 text-white text-capitalize animated fadeInDown push-20">Kontakt</h1>
                            <h2 className="h4 font-w300 text-white animated fadeInUp">Witaj {this.props.name}!</h2>
                        </div>
                        {/*<Submenu />*/}
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Image}