const Team = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.rank}</h1>
      <img src={props.logo} alt="img" class="center"></img>
      <h2>{props.school}</h2>
      <h2>{props.team_name}</h2>
      <p>{props.conference}</p>
    </div>
  )
}

export default Team
