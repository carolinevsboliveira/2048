import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import info from './constants/info';
import { FaQuestion } from "react-icons/fa";
import Redirect from "../hooks/useRedirect";
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
            {info.howToPlay}.
            </p>
            <h3 className="text">Credits</h3>
            <div><Redirect url={info.gitRepo} text={"Project github"}/></div>
            <div><Redirect url={info.originalImageFiles} text={"Original gifs author"}/></div>
            <div><Redirect url={info.originalLogicCode} text={"Original logic code"}/></div>
            <div><Redirect url={info.tutorialLink} text={"Youtube tutorial"}/></div>
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