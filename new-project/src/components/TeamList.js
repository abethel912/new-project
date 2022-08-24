import Conference from './Conference'

const TeamList = (props) => {
  return (
    <div className="team-list-container">
      {props.teams.map((team) => (
        <div class="container">
          <Conference team={team} />
        </div>
      ))}
    </div>
  )
}

export default TeamList
