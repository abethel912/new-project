import './App.css'
import teams from './data/teams.json'
import Team from './components/Team'

const App = () => {
  return (
    <div className="App">
      <h1>NCAA College Football Top 25 Rankings</h1>
      {teams.map((team) => (
        <Team
          school={team.school}
          team_name={team.team_name}
          logo={team.logo}
          rank={team.rank}
          conference={team.conference}
        />
      ))}
    </div>
  )
}

export default App
