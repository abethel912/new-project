const Team = (props) => {
  return (
    <div className="team-container">
      <img src={props.team.logo} alt="img"></img>
      <h2>{`${props.team.school} ${props.team.team_name}`}</h2>
    </div>
  )
}

export default Team
