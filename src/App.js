import { marked } from "marked";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState(() => ({ text: event.target.value }));
  }

  componentDidMount() {
    this.setState(() => ({
      text: "# H\n## h\n`<div></div>`\n```\nmultiline\njuju\ncode\n```\nYou can also make text **bold**... whoa!\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n- And of course there are lists.\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
    }));
  }

  render() {
    return (
      <div>
        <div id="editor-container">
          <textarea
            id="editor"
            value={this.state.text}
            onChange={this.handleOnChange}
          />
        </div>

        <div id="preview-container">
          <Preview text={this.state.text} />
        </div>
      </div>
    );
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(this.props.text) }}
      ></div>
    );
  }
}

export default App;
