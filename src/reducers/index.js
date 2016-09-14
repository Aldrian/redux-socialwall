import { combineReducers } from 'redux';
const reducers = {
  tweets: require('../reducers/tweets.js'),
  timeline: require('../reducers/timeline.js'),
  pixiway: require('../reducers/pixiway.js'),
  orchestrator: require('../reducers/orchestrator.js')
};
module.exports = combineReducers(reducers);
