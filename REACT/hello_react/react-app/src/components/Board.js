import React, {Component} from "react";
import "../css/Board.css";
import Note from './Note'

class Board extends Component {
    constructor() {
        super();  //inherits parent's stuff
    }
    render() {
        return (
        <div>
            <div className="div-board">
                <div className="row">
                <Note title="Class Notes" body="Use constructors when extending another class"/>
                <Note title="My Address" body="Nunya"/>
                <Note title="React Notes" body="Everything in React is a component"/>
                </div>
            </div>
            <button className="btn btn-success add-button">Add</button>
        </div>
        )
    }
}

export default Board;