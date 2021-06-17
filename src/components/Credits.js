import React from 'react'
import ReactCircleModal from 'react-circle-modal'
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
        <div style={{ backgroundColor: '#fff', padding: '0.5em' }}>
          <p className="text">
            Welcome to 2048
          </p>
          <button onClick={onClick}>
            Click here to close modal
          </button>
        </div>
      )}
    </ReactCircleModal>
    </div>
  )
}

export default Credits