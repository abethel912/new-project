const Team = (props) => {
  return (
    <div>
      <img src={props.logo} alt="img"></img>
      <h1>{props.school}</h1>
      <h2>{props.team_name}</h2>
      <p>{props.rank}</p>
    </div>
  )
}
