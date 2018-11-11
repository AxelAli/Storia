import { Component } from "preact";
import Background from "./Background";
import Character from "./Character";
import Textbox from "./Textbox";

import PropTypes from "prop-types";
export default class Scene extends Component {
  render() {
    const { style } = this.props;
    return (
      <div style={{ ...style, ...defaultStyles.main }}>
        <Background
          type="image"
          url="https://img00.deviantart.net/fe40/i/2018/028/7/c/living_room_dusk___visual_novel_background_by_giaonp-db39nke.jpg"
        />
        <div style={{ ...style, ...defaultStyles.CharacterContainer }}>
          <Character
            type="image"
            position={25}
            height={98}
            url="https://vignette.wikia.nocookie.net/danganronpa/images/e/ea/Danganronpa_V3_Chiaki_Nanami_Bonus_Mode_Sprites_02.png/revision/latest?cb=20171111234103"
          />
          <Character
            type="image"
            position={50}
            height={70}
            url="https://vignette.wikia.nocookie.net/steins-gate/images/8/83/Kurisu_profile.png"
          />
          <Character
            type="image"
            position={75}
            height={70}
            url="https://vignette.wikia.nocookie.net/danganronpa/images/e/ea/Danganronpa_V3_Chiaki_Nanami_Bonus_Mode_Sprites_02.png/revision/latest?cb=20171111234103"
          />
        </div>
        <Textbox type="basic" />
      </div>
    );
  }
}

Character.propTypes = {
  style: PropTypes.object
};

const defaultStyles = {
  CharacterContainer: {
    height: "100vh",
    width: "100%",
    display:"inline-flex"
  },
  main: {
    overflow: "hidden",
    minHeight: "100vh",
    minWidth: "100vw"
  }
};
