import {GET_NEW_PIXIWAY_PHOTO} from './../const'

import ajax from 'axios'
const config = require('config')


const actionPixiwayRecieved = (newPhotos) => {
  return { type: GET_NEW_PIXIWAY_PHOTO, newPhotos }
}
const fetchPhotos = (amount) => {
  return dispatch => {
    return ajax.get(config.default.pixiwayUrl)
      .then(response => {
        let photoArray = []
        for (var i = 0; i < amount; i++) {
          photoArray.push(response.data.statuses[i])
        }
        dispatch(actionPixiwayRecieved(photoArray))
      })
  }
}

module.exports = function (amount) {
  return fetchPhotos(amount)
}
