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
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div>
            <div className="info">
            <h1 className="text">Welcome to 2048</h1>
            <h2 className="text">How to play</h2>
            <p className="text">
            {info.howToPlay}
            </p>
            <h3 className="text">Credits</h3>
            <p><a href={info.gitRepo} className="link" target="_blank" rel="noreferrer">Project Repo</a></p>
            <p><a href={info.originalLogicCode} className="link" target="_blank" rel="noreferrer">Original logic code</a></p>
            <p><a href={info.originalImageFiles} className="link" target="_blank" rel="noreferrer">Original Image files</a></p>
            <p><a href={info.tutorialLink} className="link" target="_blank" rel="noreferrer">Youtube tutorial</a></p>

          <div className="info">
          <button onClick={onClick}>
            <p className="goBack">Go back to game ❤</p>
          </button>
          </div>
        </div>
        </div>
      )}
    </ReactCircleModal>
    </div>
  )
}

export default Credits