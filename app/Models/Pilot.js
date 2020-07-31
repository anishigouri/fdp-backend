'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pilot extends Model {

  static boot () {
    super.boot();

    this.addHook('afterCreate', 'PilotHook.sendNewPilotEmail')
  }

  user() {
    return this.belongsTo('App/Models/User')
  }

  file() {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Pilot
