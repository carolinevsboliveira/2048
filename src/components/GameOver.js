import React from 'react'
import TryAgainLogo from '../assets/img/try-again.gif'
import styles from './styles/style';
const GameFinished = ({onRestart, board}) => {
    if(board.hasWon()){
        return <div className="tile2048"></div>;

    }else if(board.hasLost()){

        return <div className="gameOver" onClick={onRestart}>
            <img style={styles.tryAgainStyle}
            src={TryAgainLogo} 
            alt="Uh, you always can try again!"/>
            </div>;
    }
    return null;
}
export default GameFinished;