const Team = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.logo} alt="img" class="center"></img>
      <h1>{props.school}</h1>
      <h2>{props.team_name}</h2>
      <p>{props.rank}</p>
      <p>{props.conference}</p>
    </div>
  )
}

export default Team
