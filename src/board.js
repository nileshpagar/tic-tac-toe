import React from "react";
import {Square} from "./square";
import {calculateWinner} from "./Winner";

export class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }
    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
            winner: null,
        });
    }

    render() {
        const status = this.getStatus();
        const statusCss = this.state.winner ? 'winner' : 'status';
        return (
            <div>
                <div className={statusCss}>{status}</div>

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

                <button className="reset" onClick={() => this.setState({
                    squares: Array(9).fill(null),
                    xIsNext: true,
                    winner: null,
                })}>Reset</button>

            </div>
        );
    }

    getStatus() {
        const winner = calculateWinner(this.state.squares);
        let status;
        this.state.winner = winner;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return status;
    }
}