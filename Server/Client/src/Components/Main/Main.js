import React from 'react';
import axios from 'axios';
import "./Main.scss"
import {BingLink} from '../BingLink/BingLink.js'
export class Main extends React.Component {
  state = {
    bike: "4 wheel kids bike",
    city: "Moscow",
    links: []
  }
  handleSubmit = event => {
    event.preventDefault();
    
    console.log(event.target.set1)
  }
  componentDidMount(){
    const bike = encodeURI(this.state.bike);
    const city = encodeURI(this.state.city);
    axios.get(`http://localhost:8080/?city=${city}&bike=${bike}`)
      .then(response => {

        this.setState({
          links: response.data
        });
        console.log(this.state.links);
      });
  }
  render(){
    return (
      <div className="cardList">
               <form onSubmit={this.handleSubmit} ref="form">
                    <label>Dogs</label>
                    <input type="radio" name="set1" value="dog1"/>
                    <input type="radio" name="set1" value="dog2"/>
                    <input type="radio" name="set1" value="dog3"/>
                    <label>Cats</label>
                    <input type="radio" name="set2" value="cat1"/>
                    <input type="radio" name="set2" value="cat2"/>
                    <input type="radio" name="set2" value="cat3"/>
                    <button type="submit">Submit</button>
                </form>
               
        {this.state.links.map(card =>(
          <BingLink  key={card.id} title={card.name} snippet={card.snippet} link={card.url}></BingLink>
        ))}


      </div>
      
    );
  }
}
