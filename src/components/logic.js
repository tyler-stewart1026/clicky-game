import React, { Component } from "react";
import Wrapper from "./wrapper/wrapper";
import Navbar from "./navbar/navbar";
import Jumbotron from "./jumbotron/jumbotron";
import Cards from "./cards/cards";
import birbs from "../birbs.json";

class Logic extends Component {
  state = {
    birbs,
    scoreCount: 0,
    highScore: 0,
    imageArray: [],
    idArray: [],
    message: "Nice Job!"
  };

  componentDidMount = () => {};

  scoreIncrement = (id) => {
    // console.log("score: " + this.state.scoreCount);
    this.mixImages();
    this.message(id);
    console.log("id array " + this.state.idArray);
    console.log(this.state.highScore + " High Score")
  };

  

  mixImages = props => {
    this.state.birbs.sort(() => Math.random() - 0.5);
    // console.log(this.state.birbs);
    this.setState({ imageArray: this.state.birbs });
  };

  message = id => {
      let highScore = this.state.highScore;
      console.log("id: " + id);
      if (this.state.idArray.includes(id)) {
        if (this.state.scoreCount > this.state.highScore) {
         highScore = this.state.scoreCount  
        }
        this.setState({ message: "Too Bad!", scoreCount: 0, idArray: [], highScore: highScore});
      } else {
        // This is a spread operator, in my copied array
       const idArray = [...this.state.idArray] 
       idArray.push(id)  
       this.setState({idArray: idArray, message: "Nice Job!", scoreCount: this.state.scoreCount + 1});
      }
      return this.state.idArray;
  };

  

  render() {
    return (
      <Wrapper>
        <Navbar
          scoreCount={this.state.scoreCount}
          message={this.state.message}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        <div className="container">
          {this.state.birbs.map(bird => (
            <Cards
              mixImages={this.mixImages}
              scoreIncrement={this.scoreIncrement}
              id={bird.id}
              key={bird.id}
              name={bird.name}
              image={bird.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default Logic;