'use strict'

import baseConfig from './base'

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  pixiwayUrl: 'http://www.pixiway.com/albums/partners/lcdwbanquet3.json',
  twitterUrl: 'http://tweetwall.novius.com/tweetwall/fullproxy.htm?code=blend'
}

export default Object.freeze(Object.assign({}, baseConfig, config))
