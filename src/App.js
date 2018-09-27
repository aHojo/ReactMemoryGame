import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Container from './components/Container';
import images from './images.json'

class App extends Component {

	state = {
		images
	}

	imageClick = (id) => {
	}

	render() {
		return (
			<div>
				<Nav />
				<Header />
				<Container wasClicked={this.imageClick} images={this.state.images}/>
			</div>
		);
	}
}

export default App;
