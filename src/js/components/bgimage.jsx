import React from 'react';
// import imageUrl from '../../../images/records.jpg';




class Image extends React.Component{
    render(){

        const urlBg = '../../../images/' + this.props.imgHeader + ".jpg";

        const urlValue = window.location.href.split('/');
        const place = urlValue[urlValue.length-1];
        let placeText= '';

        switch (place) {
            case 'contact':
                placeText = 'Kontakt';
                break;
            case 'trainer':
                placeText = 'Sekcja trenera';
                break;
            case 'player':
                placeText = 'Sekcja zawodnika';
                break;
            case 'measurement':
                placeText = 'Twoje pomiary';
                break;
            case 'profile':
                placeText = 'Twój profil';
                break;
            case 'records':
                placeText = 'Twoje rekordy';
                break;
            case 'results':
                placeText = 'Twoje wyniki';
                break;
            case 'competitionsTable':
                placeText = 'Twoje zawody';
                break;

        }



        return <div className="bg-image overflow-hidden" style={{backgroundImage: `url(${urlBg})`}}>
            <div className="bg-black-op">
                <div className="content content-narrow">
                    <div className="block block-no-margin block-transparent">
                        <div className="block-content block-content-full">
                            <h1 className="h1 font-w500 text-white text-capitalize animated fadeInDown push-20">{placeText}</h1>
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