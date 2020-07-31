'use strict'

class KartTrack {

  get validateAll() {
    return true
  }

  get rules () {
    return {
      name: 'required',
      site_url: 'required',
      phone: 'required',
      active: 'required',
    }
  }
}

module.exports = KartTrack
