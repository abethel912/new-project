import Team from './Team'
import Info from './Info'

const Conference = (props) => {
  let background

  switch (props.team.conference) {
    case 'SEC':
      background =
        'https://compote.slate.com/images/2eee76f1-f54e-4a48-95b0-9852efb1e0af.jpg?crop=668%2C376%2Cx0%2Cy0'
      break
  }

  return (
    <div
      className="conference"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Team team={props.team} />
      <Info team={props.team} />
    </div>
  )
}

export default Conference
