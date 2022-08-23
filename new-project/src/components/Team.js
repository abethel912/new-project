const Team = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.team.logo} alt="img"></img>
    </div>
  )
}

export default Team
