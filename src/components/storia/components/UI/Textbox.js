export const Textbox = props => {
  const { text, style, element, type } = props;
  switch (type) {
    case "basic":
      return <div style={{ ...defaultStyles, ...style }} >{text}</div>;

    case "element":
      return element;

    default:
      break;
  }
};

const defaultStyles = {
  backgroundColor: "rgba(0,0,0,0.8)",
  height: "30vh",
  width: "100%",
  position: "absolute",
  bottom: 0,
  padding: "2%",
  fontFamily: "Helvetica",
  fontSize: "2vw",
  color: "white"
};
