const Info = (props) => {
  return (
    <div className="info">
      <section className="rank">
        <h1>{props.team.rank}</h1>
      </section>
    </div>
  )
}

export default Info
