import { Component } from 'preact';
import { Provider, connect } from 'preact-redux';
import Scene from './storia/components/Composition/Scene';
import { readScript } from './storia/interpreter/main';

export default class Storia extends Component {
  render() {
    readScript('./components/content/scripts/start.play');
    return <Scene />;
  }
}
