import React, {useState} from "react";
import Tile from "./Tile"
import Cell from "./Cell"; 
import {Board} from "../helper"
import useEvent from "../hooks/useEvent";
import { FaRedoAlt,FaArrowUp,FaArrowLeft,FaArrowDown,FaArrowRight } from "react-icons/fa";
import GameFinished from "./GameOver";

const BoardView = () =>{
    
    const [board, setBoard] = useState(new Board());
    
    function returnMovimentOnBoard(value){
        let direction = value -37;
            let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board)
            let newBoard = boardClone.move(direction);
            setBoard(newBoard);
    }

    const handleKeyDown = (event)=>{
        if(board.hasWon()) return;
        if(event.keyCode >= 37 && event.keyCode <= 40){
            returnMovimentOnBoard(event.keyCode)
        }
    }
    
    const handleClick = (value)=>{
        if(board.hasWon()) return;
        if(value >= 37 && value <= 40){
            returnMovimentOnBoard(value)
        }
    }
    useEvent("keydown", handleKeyDown)

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
    
    const resetGame = ()=>{
        setBoard(new Board());
    }
    return <div>
       <div className="details-box">
           <div className="resetButton" onClick={resetGame}><FaRedoAlt/></div>
           <div className="score-box">
               <div className="score-title">Score</div>
               <div>{board.score}</div>
           </div>
       </div>
        <div className="board">{cells}{tiles}<GameFinished onRestart={resetGame} board={board}/></div>
        <div className="arrowsBox"><button className="arrows" value="38" onClick={e => handleClick(e.target.value)} ><FaArrowUp onClick={e => handleClick(38)}/></button></div>
        <div>
            <div className="arrowsBox">
                <button className="arrows" value="37" onClick={e => handleClick(e.target.value)} ><FaArrowLeft onClick={e => handleClick(37)}/></button>
                <button className="arrows" value="40" onClick={e => handleClick(e.target.value)} ><FaArrowDown onClick={e => handleClick(40)}/></button>
                <button className="arrows" value="39" onClick={e => handleClick(e.target.value)} ><FaArrowRight onClick={e => handleClick(39)}/></button>
                </div>
        </div>
    </div>
};

export default BoardView;