import {Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

import './index.css'

const MatrixHomePage = () => (
  <div className="matrix-home-page">
    <div className="back-icon">
      <Link to="/" className="link">
        <button type="button" className="back-button">
          <FaArrowLeft className="icon" />
          <p className="back">Back</p>
        </button>
      </Link>
    </div>
    <h1 className="game-heading">Card-Flip Memory Game</h1>
    <img
      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1708572327/Layer_2_yiiit6.png"
      alt="card flip game"
      className="image"
    />
    <p className="flip-rules">Rules</p>
    <ul className="rules-list-container">
      <li>
        When the game is started, the users should be able to see the list of
        Cards that are shuffled and turned face down.
      </li>
      <li>
        When a user starts the game, the user should be able to see the Timer
        running.
      </li>
      <li>After N seconds, the grid will clear the N highlighted cells.</li>
      <li>The Timer starts from 2 Minutes.</li>
      <li>
        If the two cards have the same image, they remain face up. If not, they
        should be flipped face down again after a short 2 seconds.
      </li>
      <li>Users should be able to compare only two cards at a time.</li>
      <li>
        When the user is not able to find all the cards before the timer ends
        then the game should end and redirect to the Time Up Page.
      </li>
      <li>
        If the user finds all the matching cards before the timer ends, then the
        user should be redirected to the results page.
      </li>
    </ul>
    <Link to="/matrix/game" className="link">
      <button className="flip-start-button" type="button">
        Start playing
      </button>
    </Link>
  </div>
)

export default MatrixHomePage
