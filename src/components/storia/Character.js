import { Component } from "preact";

import PropTypes from "prop-types";

export default class Character extends Component {
  constructor(props) {
    super(props);
    this.state = { position: this.props.position };
  }
  renderContent() {
    const { url, style, element, type, invertX, height } = this.props;
    const { position } = this.state
    switch (type) {
      case "image":
        return (
          <div
            style={{
              ...defaultStyles.imageContainer,
              left: `${position}%`,
              transform: invertX ? "scaleX(-1)" : null
            }}
          >
            <img
              style={{
                ...style,
                ...defaultStyles.image,
                top: 100 - height + "%",
                height: height + "%"
              }}
              src={url}
            />
          </div>
        );

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

Character.propTypes = {
  url: PropTypes.string,
  style: PropTypes.object,
  element: PropTypes.element,
  type: PropTypes.string,
  invertX: PropTypes.bool
};

const defaultStyles = {
  image: {
    transform: "translateX(-50%)",
    position: "relative"
  },
  imageContainer: {
    height: "100%",
    width: 1,
    position: "relative",
    transition: "left .5s ease-out"
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "100%",
    minHeight: "100%",
    overflow: "hidden"
  }
};
