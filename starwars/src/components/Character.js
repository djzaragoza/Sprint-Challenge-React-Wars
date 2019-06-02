import React from "react";
import "./StarWars.css";

const Character = props => {
    return (
        <div className="character">
            <div className="name">
                <h3>{props.character.name}</h3>
            </div>
            <div className="charInfo">
                <div className="info">
                    <p><strong>Born:</strong></p>
                    <p>{props.character.birth_year}</p>
                </div>
                <div className="info">
                    <p><strong>Gender:</strong></p>
                    <p>{props.character.gender}</p>
            </div>
            <div className="info">
                <p><strong>Eye Color:</strong></p>
                <p>{props.character.eye_color}</p>
            </div>
            <div className="info">
                <p><strong>Skin Tone:</strong></p>
                <p>{props.character.skin_color}</p>
            </div>
            <div className="info">
                <p><strong>Hair Color:</strong></p>
                <p>{props.character.hair_color}</p>
            </div>
            <div className="info">
                <p><strong>Weight: </strong></p>
                <p>{props.character.mass} Kilos</p>
            </div>
            <div className="info">
                <p><strong>Height: </strong></p>
                <p>{props.character.height}</p>
            </div>
        </div>
    </div>

    )
} 

export default Character;