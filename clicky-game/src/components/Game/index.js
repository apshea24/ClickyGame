import React from "react";
import data from "../../data.json";
import Navbar from "../Navbar"
import GameCard from "../Gamecard"


class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            data,
            score: 0,
            topScore: 0
        };
    };

    handleImgClick = id => {
        console.log(id);
        this.setState({ score: this.state.score + 1 })
    }

    render() {
        const { 
            data, 
            score, 
            topScore 
        } = this.state;
        return (
            <div>
                <Navbar score={score} topScore={topScore} />
                {data.map(item => (<GameCard
                    handleImgClick={this.handleImgClick}
                    key={item.id} {...item}
                />)
                )}
            </div>
        );
    };
};

export default Game;