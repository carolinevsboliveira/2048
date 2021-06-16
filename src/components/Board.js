import React, {useState} from "react";
import Tile from "./Tile"
import Cell from "./Cell"; 
import {Board} from "../helper"

const BoardView = () =>{
    const [board, setBoard] = useState(new Board());
    const cells = board.cells.map((row, rowIndex)=>{
        return(
            <div key={rowIndex}>
                {row.map((col, colIndex) => {
                    return <Cell key={rowIndex * board.size + colIndex}/>
                })}
            </div>
        )
    });
    const tiles = board.tiles.filter((tile) => tile.value !== 0)
                        .map((tile, indexTile)=>{
                    return <Tile tile={tile} key={indexTile}/>;
                });
    return <div className="board">{cells}{tiles}</div>
};

export default BoardView;