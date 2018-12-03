import React from "react";

function GameCard(props) {
    return (
        <div onClick={()=> props.handleImgClick(props.id)}>
            <img src={props.image} />
        </div>
    )

};

export default GameCard