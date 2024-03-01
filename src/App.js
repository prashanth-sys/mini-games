import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import MemoryMatrix from './components/MemoryMatrix'
import MatrixHomePage from './components/MatrixHomePage'
import EmojiHomePage from './components/EmojiHomePage'
import ScissorHomePage from './components/ScissorHomePage'
import FlipHomePage from './components/FlipHomePage'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/emoji" component={EmojiHomePage} />
    <Route exact path="/memory/matrix" component={MatrixHomePage} />
    <Route exact path="/matrix/game" component={MemoryMatrix} />
    <Route exact path="/rps/game" component={ScissorHomePage} />
    <Route exact path="/flip" component={FlipHomePage} />
  </Switch>
)

export default App
