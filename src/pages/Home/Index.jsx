import React from "react";
import './style.css'
import {appendScript} from 'utils/appendScript'

export function Home () {

    appendScript("./functions.js");

    return (
        <main id="main">
            <legend className="title">
                <img src="/src/assets/chuck-icon.png" test="backToDefaultMode()" alt="Draw of Chuck Norris" />
                <h1>CHUCK NORRIS QUOTE!</h1>
            </legend>
            <div className="search">
                <div id="search-joke">
                    <input autoFocus type="text" id="search-box" name="search-box" placeholder="Search For an Quote" />
                    <div className="buttons">
                        <button test="getSearchResult()" id="search-button" value="Search">Search</button>
                        <button onClick={getLucky} id="get-lucky-joke" value="I'm The Lucky">I'm The Lucky</button>
                    </div>
                </div>
                <button onClick={getRandomJoke} id="new-random-joke" value="Random Joke">Random Quote</button>
            </div>
            <div className="result">
                <div className="joke" id="random-joke">
                    <div id="random-joke-box">
                        <span id="random-joke-result"></span>
                    </div>
                </div>
                <div className="joke" id="search-result"></div>
            </div>
        </main>
    )
}