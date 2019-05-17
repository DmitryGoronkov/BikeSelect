import React from 'react';

import './BingLink.scss';

const apiKey = "AIzaSyCbltyzuDArOIM3iVLPVNgiDGSIl6l0AlU";

export class BingLink extends React.Component {
        
    render(){
        return (
            <a href={this.props.link}><section className="bingCard">
               <h1 className="bingCard__title">{this.props.title}</h1>
                <p className="bingCard_snippet">{this.props.snippet}</p>
                

            
            
            
            </section></a>
        )
    }

}
