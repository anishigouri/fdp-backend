'use strict'

class Pilot {

  get validateAll() {
    return true
  }

  get rules () {
    return {
      name: 'required',
      email: 'required|unique:pilots|email',
      celphone: 'required|unique:pilots',
      active: 'required'
    }
  }
}

module.exports = Pilot
