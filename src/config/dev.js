'use strict'

import baseConfig from './base'

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  pixiwayUrl: 'http://www.pixiway.com/albums/partners/lcdwbanquet3.json',
  twitterUrl: 'http://www.pixiway.com/albums/partners/lcdwbanquet3.json'
}

export default Object.freeze(Object.assign({}, baseConfig, config))
