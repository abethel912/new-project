const Info = (props) => {
  return (
    <div className="info">
      <section className="rank">
        <h1>{props.team.rank}</h1>
      </section>
      <h2>{props.team.school}</h2>
      <h2>{props.team.team_name}</h2>
    </div>
  )
}

export default Info
