import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-container">
    <h1 className="games-heading">Games</h1>
    <div className="card-show-container">
      <ul className="emoji-card-container">
        <li className="list">
          <Link to="/emoji" className="link">
            <img
              src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1708572208/Asset_1_4x_1_1_vypqbi.png"
              alt="emoji game"
              className="emoji"
            />
            <h1 className="emoji-name">Emoji Game</h1>
          </Link>
        </li>
      </ul>

      <ul className="memory-card-container">
        <li className="list">
          <Link to="/memory/matrix" className="link">
            <img
              src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1708572317/memory_1_bvfmai.png"
              alt="memory matrix"
              className="memory"
            />
            <h1 className="memory-name">Memory Matrix</h1>
          </Link>
        </li>
      </ul>

      <ul className="rps-card-container">
        <li className="list">
          <Link to="/rps/game" className="link">
            <img
              src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1708572334/Group_7469_1_i9ovya.png"
              alt="rock paper scissor"
              className="rock"
            />
            <h1 className="memory-name">ROCK PAPER SCISSOR</h1>
          </Link>
        </li>
      </ul>

      <ul className="flip-card-container">
        <li className="list">
          <Link to="/flip" className="link">
            <img
              src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1708572327/Layer_2_yiiit6.png"
              alt="card flip memory game"
              className="flip"
            />
            <h1 className="memory-name">Flip Cart Game</h1>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)
export default Home
