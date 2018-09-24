import { Component } from "preact";

import PropTypes from "prop-types";

export default class Background extends Component {
  renderContent = () => {
    const { url, style, type, callback, element } = this.props;
    switch (type) {
      case "image":
        return (
          <div
            style={{
              ...defaultStyles.image,
              ...style,
              backgroundImage: `url(${url})`
            }}
          />
        );
        break;

      case "video":
        return (
          <video
            autoPlay
            style={{ ...defaultStyles.video, ...style }}
            onEnded={callback}
          >
            <source src={url} />
          </video>
        );
        break;

      case "element":
        return element;
        break;

      default:
        break;
    }
  };

  render() {
    return this.renderContent();
  }
}

Background.propTypes = {
  url: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  content: PropTypes.element,
  callback: PropTypes.func
};

const defaultStyles = {
  image: {

    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    overflow: "hidden",
    backgroundPosition: "center center"
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
