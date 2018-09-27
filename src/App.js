import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Container from './components/Container';
import images from './images.json'


/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

class App extends Component {

	state = {
		images,
		score: 0,
		topScore: 0,
		prevHighScore: 0
	}

	imageClick = (id) => {
		let image = [...this.state.images];
		
		for(let i = 0; i < image.length; i++) {
			if(image[i].id === id) {
				if(image[i].clicked){
					let resetimages = images.map(x => {
						return {id: x.id,
								img: x.img,
								clicked: false}
						});
					console.log(resetimages);
					alert("Oops, better luck next time!");
					return this.setState({images: resetimages, score: 0});
				}else{ 
					image[i].clicked = true;
				}
			} 
		}

		if(this.state.score >= this.state.prevHighScore){
			this.setState({images: shuffle(image), score: this.state.score + 1, topScore: this.state.topScore + 1, prevHighScore: this.state.prevHighScore + 1});
		} else {
			this.setState({images: shuffle(image), score: this.state.score + 1});
		}
		
	}


	render() {
		return (
			<div>
				<Nav score={this.state.score} topscore={this.state.topScore}/>
				<Header />
				<Container wasClicked={this.imageClick} images={this.state.images}/>
			</div>
		);
	}
}

export default App;
