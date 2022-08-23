import Team from './Team'
import Info from './Info'

const Conference = (props) => {
  let background

  switch (props.team.conference) {
    case 'SEC':
      background =
        'https://compote.slate.com/images/2eee76f1-f54e-4a48-95b0-9852efb1e0af.jpg?crop=668%2C376%2Cx0%2Cy0'
      break
    case 'Big Ten':
      background =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Big_Ten_Conference_former_logo.svg/2560px-Big_Ten_Conference_former_logo.svg.png'
      break
    case 'ACC':
      background =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/ACC_logo_in_Duke_colors.svg/1280px-ACC_logo_in_Duke_colors.svg.png'
      break
    case 'PAC-12':
      background =
        'https://cdn.vox-cdn.com/thumbor/odDxLAtDAZRD3rIVkN9sn1wAZRc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23663493/usa_today_17283469.jpg'
      break
    case 'Big 12':
      background =
        'http://cdn0.sbnation.com/imported_assets/1718591/big12_logo.jpg'
      break
    case 'American':
      background =
        'https://content.sportslogos.net/logos/153/5032/full/6833_american_athletic__conference-primary_dark-2017.png'
      break

    default:
      background =
        'http://cdn.shopify.com/s/files/1/0877/6118/articles/footballglovesstickyspray_61cd82ed-c059-4d25-92ad-37de50f5ca1d_1024x1024.jpg?v=1563412448'
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
