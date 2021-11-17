import React from 'react';
import './App.css';

/*Components*/
import Button from './components/Button.js'
import Tile from "./components/Tile"
import Article from './components/Articles.js'

/*Images*/
import brand from './assets/brand.png'
import ourStory from './assets/our_story.png'
import bagOne from "./assets/bag_1.png";
import bagTwo from "./assets/bag_2.png";
import bagThree from "./assets/bag_3.png";
import bagFour from "./assets/bag_4.png";

function app() {

    /*Otherwise have to type twice*/
    const bestseller = 'best seller'
    const newCollection = 'new collection'
    return ( <>
            <nav>
                <Button text='to the collection'/>
                <Button text='shop all bags'/>
                <Button text='pre-orders' disabled={true}/>
            </nav>
            <main>
                <Article label={bestseller} picture={bagOne} name='the handy bag' price='€400,-'/>
                <Article label={bestseller} picture={bagTwo} name='the stylish bag' price='€250,-'/>
                <Article label={newCollection} picture={bagThree} name='the simple bag' price='€300,-'/>
                <Article label={newCollection} picture={bagFour} name='the trendy bag' price='€150,-'/>
            </main>
            <footer>
                <Tile>
                    <h2>the brand</h2>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit. ab assumenda autem debitis doloremque harum praesentium totam unde voluptate voluptates voluptatibus.</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit. a assumenda beatae dolorum eius neque pariatur placeat provident quo ullam voluptatem?</p>
                </Tile>
                <Tile image = {brand}/>
                <Tile>
                    <h2>the brand</h2>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit. ab assumenda autem debitis doloremque harum praesentium totam unde voluptate voluptates voluptatibus.</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit. a assumenda beatae dolorum eius neque pariatur placeat provident quo ullam voluptatem?</p>
                </Tile>
                <Tile image = {ourStory}/>
            </footer>
    </>
    );


}

export default app;



