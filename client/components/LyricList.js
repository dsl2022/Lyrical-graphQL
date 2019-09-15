import React, { Component } from 'react';

export default class LyricList extends Component {
	renderLyrics() {
		return this.props.lyrics.map(({ id, content }) => (
			<li key={id} className="collection-item">
				{content}
			</li>
		));
	}

	render() {
		console.log(this.props.lyrics);
		return <ul className="collection">{this.renderLyrics()}</ul>;
	}
}
