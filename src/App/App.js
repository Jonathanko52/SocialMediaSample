import React, { Component } from "react";
import Feed from "../Feed/Feed";
import InputBox from "../InputBox/InputBox";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      textInput: "",
      urlInput: ""
    };

    this.textChange = this.textChange.bind(this);
    this.urlChange = this.urlChange.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  textChange(e) {
    this.setState({ textInput: e.target.value });
  }

  urlChange(e) {
    this.setState({ urlInput: e.target.value });
  }

  submitInput() {
    this.setState(state => {
      let newImages = state.images.slice();
      newImages.push({
        text: state.textInput,
        url: state.urlInput
      });

      return {
        images: newImages,
        textInput: "",
        urlInput: ""
      };
    });
  }

  render() {
    return (
      <div className="App">
        <InputBox
          textChange={this.textChange}
          urlChange={this.urlChange}
          submitInput={this.submitInput}
        />
        <Feed images={this.state.images} />
      </div>
    );
  }
}

export default App;
