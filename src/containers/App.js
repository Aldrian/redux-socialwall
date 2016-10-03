import React, {
  Component,
  PropTypes
} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PixiPolaView from '../components/PixiPola'
import PixiwayView from '../components/Pixiway'
import TimelineView from '../components/Timeline'
import TweetView from '../components/Tweet'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    if (this.props.location.query.noCache) {
      localStorage.removeItem('redux_localstorage_simple')
    }
    if (this.props.location.query.timeline) {
      this.props.actions.switchTimelineMode(this.props.location.query.timeline)
    }
    /*if (this.props.location.query.noTwitter) {
      this.props.actions.switchTimelineMode(this.props.location.query.timeline)
    }*/
    this.props.actions.setPixiwayUrl(this.props.location.query.pixiwayUrl || 'http://www.pixiway.com/albums/partners/20ansnovius.json')
    this.props.actions.setTwitterUrl(this.props.location.query.twitterUrl || 'http://tweetwall.novius.com/tweetwall/fullproxy.htm?code=20ansNovius')
  }
  componentDidMount() {
    setInterval(this.props.actions.getNextSlide, 6000)
  }
  render() {
    const { tweets, timeline, pixiway, orchestrator} = this.props
    return (
      <div className="app">
        {(() => {
          switch (orchestrator.order[orchestrator.index]) {
            case 'Pixiway': return <PixiwayView pixiway={pixiway} nextElem={this.props.actions.getNewPixiwayPhoto} getNextSlide={this.props.actions.getNextSlide}/>
            case 'Tweets': return <TweetView tweets={tweets} nextElem={this.props.actions.getNewTweet} getNextSlide={this.props.actions.getNextSlide}/>
            case 'Timeline': return <TimelineView timeline={timeline} nextElem={this.props.actions.getNewTimelineElem} getNextSlide={this.props.actions.getNextSlide}/>
            case 'Pixiway Pola': return <PixiPolaView pixiway={pixiway} nextElem={this.props.actions.getNewPixiwayPhoto} getNextSlide={this.props.actions.getNextSlide}/>
          }
        })()}
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  tweets: PropTypes.object.isRequired,
  timeline: PropTypes.object.isRequired,
  pixiway: PropTypes.object.isRequired,
  orchestrator: PropTypes.object.isRequired
}
function mapStateToProps(state) {
  const props = {
    tweets: state.tweets,
    timeline: state.timeline,
    pixiway: state.pixiway,
    orchestrator: state.orchestrator
  }
  return props
}
function mapDispatchToProps(dispatch) {
  const actions = {
    getNewTweet: require('../actions/tweets/getNewTweet.js'),
    getNewPixiwayPhoto: require('../actions/pixiway/getNewPixiwayPhoto.js'),
    getNewTimelineElem: require('../actions/timeline/getNewTimelineElem.js'),
    getNextSlide: require('../actions/orchestrator/getNextSlide.js'),
    switchTimelineMode: require('../actions/timeline/switchTimelineMode.js'),
    setPixiwayUrl: require('../actions/pixiway/setPixiwayUrl.js'),
    setTwitterUrl: require('../actions/tweets/setTwitterUrl.js')
  }
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
