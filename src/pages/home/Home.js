import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { selection: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(val) {
    this.setState({ selection: val }, function () {
      this.props.history.push(`/${this.state.selection}`);
    });
  }

  render() {
    return (
      <div className="HomeContainer">
        <div id="landing-header">
          <div>
            <h1>Welcome to MovieSearch!</h1>
          </div>
          <div className="buttons">
            <div>
              <button onClick={(e) => this.handleClick("search")}>
                Search
              </button>
            </div>
            <div>
              <button onClick={(e) => this.handleClick("discover")}>
                Discover
              </button>
            </div>
          </div>
        </div>

        <ul className="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Home;
