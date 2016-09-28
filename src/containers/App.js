/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
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
import { clear } from 'redux-localstorage-simple'

//Paramètres
//Twitteroff
//Alternativetimeline
//nocache
//pixiwayurl
//twitterhashtag

/* Populated by react-webpack-redux:reducer */
class App extends Component {
  constructor(props) {
    super(props)
    if (this.props.location.query.noCache) {
      clear()
    }
    setInterval(this.props.actions.getNextSlide, 4000)
  }
  render() {
    const { tweets, timeline, pixiway, orchestrator} = this.props
    return (
      <div className="app">
        {(() => {
          switch (orchestrator.order[orchestrator.index]) {
            case 'Pixiway': return <PixiwayView pixiway={pixiway} nextElem={this.props.actions.getNewPixiwayPhoto}/>
            case 'Tweets': return <TweetView tweets={tweets} nextElem={this.props.actions.getNewTweet}/>
            case 'Timeline': return <TimelineView timeline={timeline} nextElem={this.props.actions.getNewTimelineElem}/>
            case 'Pixiway Pola': return <PixiPolaView pixiway={pixiway} nextElem={this.props.actions.getNewPixiwayPhoto}/>
          }
        })()}
      </div>
    )
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  tweets: PropTypes.array.isRequired,
  timeline: PropTypes.object.isRequired,
  pixiway: PropTypes.array.isRequired,
  orchestrator: PropTypes.object.isRequired
}
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    tweets: state.tweets,
    timeline: state.timeline,
    pixiway: state.pixiway,
    orchestrator: state.orchestrator
  }
  return props
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    getNewTweet: require('../actions/tweets/getNewTweet.js'),
    getNewPixiwayPhoto: require('../actions/pixiway/getNewPixiwayPhoto.js'),
    getNewTimelineElem: require('../actions/timeline/getNewTimelineElem.js'),
    getNextSlide: require('../actions/orchestrator/getNextSlide.js')
  }
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
