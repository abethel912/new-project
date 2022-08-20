import './App.css'
import teams from './data/teams.json'
import Team from './components/Team'

const App = (props) =>
  function App() {
    return (
      <div className="App">
        <h1>NCAA College Football Top 25 Rankings</h1>
        {teams.map((Team) => (
          <Team
            school={Team.school}
            team_name={Team.team_name}
            logo={Team.logo}
            rank={Team.rank}
            conference={Team.conference}
          />
        ))}
      </div>
    )
  }

export default App
