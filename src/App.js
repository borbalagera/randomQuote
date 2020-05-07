import React, { Component } from "react";
import "./Quotebox.js";
import "./App.css";
import Button from "./components/Button.js";
import Sparkle from "./components/Sparkle.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currentIndex: null,
      colors: "",
    };
    this.newIndex = this.newIndex.bind(this);
    this.currentIndex = this.currentIndex.bind(this);
  }

  /* getting the quotes */

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) => this.setState({ quotes }, this.newIndex));
  }

  /* returning the indexth quote */

  get selectedQuote() {
    return this.state.quotes[this.state.currentIndex];
  }

  /* random index */

  currentIndex() {
    const rand = Math.floor(0 + Math.random() * (this.state.quotes.length - 1));
    return rand;
  }

  /* setting the random index in the state AND bg color */

  newIndex() {
    this.setState({ currentIndex: this.currentIndex() });

    const color = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + color;
  }

  /* rendering */

  render() {
    console.log(this.state.currentIndex);
    return (
      <div className="App">
        <div className="quote-box">
          <div className="quote">
            {this.selectedQuote ? `" ${this.selectedQuote.quote} "` : ""}
          </div>
          <div className="author">
            {this.selectedQuote ? `- ${this.selectedQuote.author}` : ""}
          </div>
          <br />
          <Sparkle buttonDisplayName="I like it!"></Sparkle>
          <Button
            buttonDisplayName="Next Quote!"
            clickHandler={this.newIndex}
          />
        </div>
      </div>
    );
  }
}

export default App;
