export const Textbox = props => {
  const { dialogue, style, element, type, callback } = props;
  switch (type) {
    case 'basic':
      return (
        <div style={{ ...defaultStyles.textfield, ...style }}>
          <div style={{ textAlign: 'center', fontStyle: 'italic' }}>
            {dialogue.name}
          </div>
          <div>{dialogue.text}</div>
        </div>
      );

    case 'element':
      return element;

    default:
      break;
  }
};

const defaultStyles = {
  textfield: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: '30vh',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: '2%',
    fontFamily: 'Helvetica',
    fontSize: '5vh',
    color: 'white',
  },
};
