import { Component } from 'preact';
import { Background } from './Background';
import { Character } from './Character';
import { Textbox } from '../UI/Textbox';

import PropTypes from 'prop-types';
export default class Scene extends Component {
  renderCharacters(characters) {
    return characters.map((character, index) =>
      Character({
        type: 'image',
        position: (100 / (characters.length + 1)) * (index + 1),
        height: 90,
        url: character,
      }),
    );
  }
  render() {
    const { style } = this.props;
    return (
      <div style={{ ...style, ...defaultStyles.main }}>
        {Background({
          type: 'image',
          url:
            'https://img00.deviantart.net/fe40/i/2018/028/7/c/living_room_dusk___visual_novel_background_by_giaonp-db39nke.jpg',
        })}

        <div style={{ ...style, ...defaultStyles.CharacterContainer }}>
          {this.renderCharacters([
            'http://pngimg.com/uploads/dog/dog_PNG50387.png',
            'http://pngimg.com/uploads/dog/dog_PNG50367.png',
          ])}
        </div>
        {Textbox({ type: 'basic', dialogue: { name: 'Axel', text: 'Test' } })}
      </div>
    );
  }
}

const defaultStyles = {
  CharacterContainer: {
    height: '100vh',
    width: '100vw',
    display: 'inline-flex',
  },
  main: {
    overflow: 'hidden',
    minHeight: '100vh',
    minWidth: '100vw',
  },
};
