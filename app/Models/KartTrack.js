'use strict'
const Model = use('Model')

class KartTrack extends Model {

  address() {
    return this.hasOne('App/Models/Address')
  }
}

module.exports = KartTrack
