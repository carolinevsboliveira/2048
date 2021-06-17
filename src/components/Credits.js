import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import info from './constants/info';
import { FaQuestion } from "react-icons/fa";
const Credits = () => {
  return (
    <div className="creditBox creditElement">
        <ReactCircleModal
      backgroundColor="#3d2963"
      toogleComponent={onClick => (
        <button onClick={onClick} className="creditButton">
          <FaQuestion/>
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div>
            <div className="info">
            <h1 className="text">Welcome to 2048</h1>
            <h2 className="text">How to play</h2>
            <p className="text">
            {info.howToPlay}.
            </p>
            <h3 className="text">Credits</h3>
            <div><a href={info.originalLogicCode} className="text">Original Logic Code</a></div>
            <div><a href={info.originalImageFiles} className="text">Original gifs source</a></div>
            <div><a href={info.tutorialLink} className="text">Youtube source tutorial</a></div>
            <div><a href={info.gitRepo} className="text">Github source code</a></div>
          </div>
          <div className="info">
          <button onClick={onClick}>
            <p className="goBack">Go back to game ❤</p>
          </button>
          </div>
        </div>
      )}
    </ReactCircleModal>
    </div>
  )
}

export default Credits