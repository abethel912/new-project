import './App.css'
import teams from './data/teams.json'
import TeamList from './components/TeamList'

const App = () => {
  return (
    <div className="App">
      <h1>NCAA College Football Top 25 Rankings</h1>
      <TeamList teams={teams} />
    </div>
  )
}

export default App
