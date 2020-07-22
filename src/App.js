import React from 'react';
import 'tachyons';
import Memegen from './Memegen';
import './style.css';

const App = () => {
    return (
        <div className="tc">
            <header className="dib tc">
                <img className="dib ml3 mt2 pa2 " src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Website Logo" width="150" height="100px"/>
                <h1 className="tc md3">MEME GENERATOR</h1>
            </header>
            <Memegen />
            <div>
                <p>&nbsp;</p>
                <p>This site was created by Suyash Patil</p>
                <p>&nbsp;
                </p>
                <p>&nbsp;</p>
            </div>
        </div>
    )
}

export default App;