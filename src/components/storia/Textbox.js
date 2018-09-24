import { Component } from "preact";

import PropTypes from "prop-types";

export default class Textbox extends Component {
  constructor(props) {
    super(props);
  }
  renderTextfield() {
    return (
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          height: "30vh",
          width: "100%",
          position: "absolute",
          bottom: 0,
          padding: "2%",
          fontFamily: "Helvetica",
          fontSize: "2vw",
          color: "white"
        }}
      >
        
      </div>
    );
  }
  renderContent() {
    const { url, style, element, type } = this.props;
    switch (type) {
      case "basic":
        return this.renderTextfield();

      case "element":
        return element;

      default:
        break;
    }
  }
  render() {
    return this.renderContent();
  }
}

Textbox.propTypes = {
  url: PropTypes.string,
  style: PropTypes.object,
  element: PropTypes.element,
  type: PropTypes.string
};
