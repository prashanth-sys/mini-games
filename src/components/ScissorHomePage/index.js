import {Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

import './index.css'

const MatrixHomePage = () => (
  <div className="scissor-home-page">
    <div className="back-icon">
      <Link to="/" className="link">
        <button type="button" className="back-button">
          <FaArrowLeft className="icon" />
          <p className="back">Back</p>
        </button>
      </Link>
    </div>
    <h1 className="game-heading">ROCK PAPER SCISSOR</h1>
    <img
      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1708572334/Group_7469_1_i9ovya.png"
      alt="rock paper scissor"
      className="image"
    />
    <p className="rps-rules">Rules</p>
    <ul className="rules-list-container">
      <li>The game result should be based on user and user opponent choices</li>
      <li>
        When the user choice is rock and his opponent choice is rock then the
        result will be <span className="span">IT IS DRAW</span>
      </li>
      <li>
        When the user choice is paper and his opponent choice is rock then the
        result will be <span className="span">YOU WON</span>
      </li>
      <li>
        When the user choice is a scissor and his opponent choice is rock then
        the result will be <span className="span">YOU LOSE</span>
      </li>
      <li>
        When the user choice is paper and his opponent choice is paper then the
        result will be <span className="span">IT IS DRAW</span>
      </li>
      <li>
        When the user choice is scissors and his opponent choice is paper then
        the result will be <span className="span">YOU WON</span>
      </li>
      <li>
        When the user choice is rock and his opponent choice is scissors then
        the result will be <span className="span">YOU WON</span>
      </li>
      <li>
        When the user choice is paper and his opponent choice is scissors then
        the result will be <span className="span">YOU LOSE</span>
      </li>
      <li>
        When the user choice is scissors and his opponent choice is scissors
        then the result will be <span className="span">IT IS DRAW</span>
      </li>
      <li>
        When the result is <span className="span">YOU WON</span>, then the count
        of the score should be incremented by 1
      </li>
      <li>
        When the result is <span className="span">IT IS DRAW</span>, then the
        count of the score should be the same
      </li>
      <li>
        When the result is <span className="span">YOU LOSE</span>, then the
        count of the score should be decremented by 1.
      </li>
    </ul>
    <Link to="/matrix/game" className="link">
      <button className="start-button" type="button">
        Start playing
      </button>
    </Link>
  </div>
)

export default MatrixHomePage
