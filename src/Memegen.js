import React, { Component } from 'react';
import 'tachyons';
import './style.css';

class Memegen extends Component {
    constructor(){
        super()
        this.state={
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImg: [] 
        }
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemeImg: memes})
        })
    }


    forSubmit = (event) => {
        event.preventDefault()
        const randnum = Math.floor(Math.random() * this.state.allMemeImg.length)
        const randMeme = this.state.allMemeImg[randnum].url
        this.setState({randomImg: randMeme})
    }

    render () {
        return (
            <div>
                <form className="tc" onSubmit={this.forSubmit}>                 
                    <button>Generate</button>
                </form>
                <div className="tc mt6">
                    <img className="tc pa2 ma2" src={this.state.randomImg} alt="A Random Meme" width="90%" height="220px"/>
                </div>
            </div>
        )
    }
}

export default Memegen;