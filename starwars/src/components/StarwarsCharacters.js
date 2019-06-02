import React from "react";
import "./StarWars.css";

import Character from "./Character";

const StarwarsCharacters = props => {
    return (
        <div>
            {props.starwarsChars.map(character => (
                <Character character={character} />
            ))}
        </div>
    )
}

export default StarwarsCharacters;