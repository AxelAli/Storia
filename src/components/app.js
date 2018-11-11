import { Component } from 'preact';
import { Provider, connect } from 'preact-redux';
import Scene from './storia/components/Composition/Scene'



export default class Storia extends Component {
	render() {
		return (
			<Scene />
		);
	}
}
